// src/pages/[slug].js
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import Layout from "@/components/Layout";
import Contact from "@/components/ContactPage";
import client from "@/lib/apollo-clients";
import CoupsDeCoeur from "@/components/CoupsDeCoeurPage";
import Presentation from "@/components/PresentationPage";
import Promenades from "@/components/PromenadesPage";
import TarifsSorties from "@/components/TarifsSorties";
import ZoneArea from "@/components/ZoneArea";
import Gardes from "@/components/GardesPage";
import TarifsGardes from "@/components/TarifsGardes";
import Custom404 from "@/components/Error/";
import MapArea from "@/components/Map/MapArea";
import { GET_ALL_SLUGS, GET_PAGE_BY_SLUG } from "@/data/request";
import { BsHouseDoorFill } from "react-icons/bs";
import { DocumentRenderer } from '@keystone-6/document-renderer';
import { SECTIONS } from "@/components/Section";
import BreadCrumb from "@/components/Breadcrumb";

export default function SlugPage({ data }) {
  console.log(data)
  const router = useRouter();
  const { slug } = router.query;

  // 1) si composant en dur existe -> priorité
  if (slug && SECTIONS[slug]) {
    return (
      <Layout>
        <Head>
          <link rel="canonical" href={`https://www.animauxlogis.fr/${slug}`} />
          <meta property="og:url" content={`https://www.animauxlogis.fr/${slug}`} />
          <meta property="og:type" content="website" />
          <meta property="og:image" content="https://new.animauxlogis.fr/logos/logo.png" />
        </Head>

        <main className="">
          <div className="">


            {/* breadcrumb */}
            <BreadCrumb slug={slug} />

            <section className="">
              <h1 className="h1">
                <span style={{ color: "#f48142" }}>Animaux&apos;</span>&nbsp;
                <span style={{ color: "#5db0b8" }}>Logis</span>
              </h1>
            </section>

            <article className="">
              <div id={slug}>{SECTIONS[slug]}</div>
            </article>
          </div>
        </main>
      </Layout>
    );
  }

  // 2) sinon, si backend a renvoyé des données -> afficher backend
  if (data) {
    return (
      <Layout>
        <Head>
          <link rel="canonical" href={`https://www.animauxlogis.fr/${data.slug || slug || ""}`} />
          <meta property="og:url" content={`https://www.animauxlogis.fr/${data.slug || slug || ""}`} />
          <meta property="og:type" content="website" />
          <meta property="og:image" content="https://new.animauxlogis.fr/logos/logo.png" />
        </Head>

        <main className="">
          <div className="">
            {/* breadcrumb */}
            <nav className="">
              <ol className="">
                <li className="">
                  <Link href="/"><BsHouseDoorFill size={18} /></Link>
                </li>
                <li>{data?.breadcrumb}</li>
              </ol>
            </nav>

            <section className="">
              <h1 className="h1">
                <span style={{ color: "#f48142" }}>Animaux&apos;</span>&nbsp;
                <span style={{ color: "#5db0b8" }}>Logis</span>
              </h1>
            </section>

          <article>
             <DocumentRenderer document={data.content.document} />
          </article>
          </div>
        </main>
      </Layout>
    );
  }

  // 3) sinon, rien trouvé nulle part -> Custom404 (composant)
  return <Custom404 />;
}

// -----------------------------------------
// SSG: on pré-génère et on laisse "blocking"
// -----------------------------------------
export async function getStaticPaths() {
  const { data } = await client.query({
    query: GET_ALL_SLUGS,
  });

  // On inclut aussi les slugs "en dur" pour éviter un 1er rendu en blocking
  const hardcoded = Object.keys(SECTIONS).map((slug) => ({ params: { slug } }));

  const backend =
    data?.aLPages?.map((page) => ({
      params: { slug: page.slug },
    })) || [];

  return {
    paths: [...hardcoded, ...backend],
    fallback: "blocking", // permet /mentions-legales non listé au build
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;

  // 1) si page "en dur" -> pas d'appel backend, on rend côté client
  if (SECTIONS[slug]) {
    return {
      props: {
        data: null, // on n'a pas besoin du backend dans ce cas
      },
      revalidate: 86400, // 24h
    };
  }

  // 2) sinon, tenter le backend
  try {
    const { data } = await client.query({
      query: GET_PAGE_BY_SLUG,
      variables: { slug },
    });

    const page = data?.aL_Page;

    if (page) {
      return {
        props: {
          data: {
            slug: page.slug || slug,
            title: page.title || slug,
            content: page.content || "",
          },
        },
        revalidate: 86400, // 24h
      };
    }

    // 3) rien trouvé : on renverra Custom404 côté rendu
    return {
      props: {
        data: null,
      },
      // on peut revalider vite pour éviter de garder une 404 si la page apparaît ensuite:
      revalidate: 3600, // 1h
    };
  } catch (e) {
    // En cas d'erreur backend, on affiche Custom404 (sans casser la page)
    console.error("Erreur Apollo GET_PAGE_BY_SLUG:", e);
    return {
      props: {
        data: null,
      },
      revalidate: 3600,
    };
  }
}
