import Image from 'next/image';
import Link from 'next/link';
import client from '@/lib/apollo-clients';
import Layout from '@/components/Layout';
import { GET_HOME_PAGE } from '@/data/request';

// #5db0b8 / vert&bleu
// #f48142 /orange

export default function HomePage({statik}) {
  console.log(statik);

  return (
    <Layout>

      {/* Star Header properties */}

 
       {/* End Header properties */}

      <main className="">
        <div className="">

          <section className="">
            <h1 className="h1">
              <pan style={{ color: "#f48142" }}>{statik?.h1_start}</pan>&nbsp;
              <pan style={{ color: "#5db0b8" }}>{statik?.h1_center}</pan>
            </h1>
            <h2 className="h2">{statik?.h1_end}</h2>
          </section>


          <section className="">
            <Image
              src="/img/panorama.jpg"
              alt="www.animauxlogis.fr | mes pensionnaires"
              className="img-fluid rounded"
              width={800}
              height={416}
              property
            />
          </section>


          <section className="">

            <article className="">
              <div className="">
                <h2 className="">Bienvenue chez Anim&apos;aux Logis !</h2>              
              </div>
            </article>  

            <article className="">

              <div className="">
                <p>
                  Avec Anim&apos;aux Logis, vos compagnons sont entre de bonnes mains.<br />
                  Que vous ayez un chien joueur, un chat câlin, un oiseau bavard ou tout autre animal de compagnie, je suis là pour veiller sur eux, à votre domicile, lorsque vous ne pouvez pas le faire.
                </p><p>
                  Quand vous confiez votre animal à Anim&apos;aux Logis, vous pouvez avoir l&apos;esprit tranquille en sachant qu&apos;il sera choyé par une professionnelle, dans le confort de son propre environnement, en respectant ses habitudes.
                </p><p>
                  Que ce soit pour raison professionnelle, une hospitalisation, une courte escapade ou une longue période de vacances, Anim&apos;aux Logis, propose des services personnalisés pour répondre aux besoins de chaque animal.
                </p>
              </div>

              <div className="">
                <Image
                  src="/img/chien-laisse1.jpg"
                  alt="www.animauxlogis.fr | Un chien en laisse"
                  className=""
                  width={658}
                  height={516}
                  property
                />
              </div>

            </article>        

            <article className="">
              <div className="">
                <h3 className="">Mes services:</h3>
                </div>
            </article> 

            <article className="">
              <div className="">
                <p>
                  des 
                  <Link href="/visites-gardes-animales" className="" > visites </Link>
                  régulières, <br />
                  de plusieurs heures <br />
                  à votre domicile,
                </p>

                <button type="button" className="" style={{ background: "#5db0b8", border: "#5db0b8" }}>
                  <Link href="/visites-gardes-animales" style={{ color: "#ffffff", textDecoration: "none" }}>Plus d&apos;infos</Link>
                </button>

              </div>

              <div className="">
                <p className="">
                  des
                    <Link href="/visites-gardes-animales" className="" > promenades </Link>
                  .
                </p>

                <button type="button" className="" style={{ background: "#5db0b8", border: "#5db0b8" }}>
                  <Link href="/sorties-promenades-canines" style={{ color: "#ffffff", textDecoration: "none" }}>Plus d&apos;infos</Link>
                </button>

                </div>              

            </article> 


            <article className="">

              <div className="">
                <p>
                  Je prends soin de vos compagnons et m&apos;assure de leur sécurité, en respectant vos consignes.
                </p>
                <p>
                  Messages photos/vidéos vous seront envoyés tous les jours, si vous le souhaitez, pour vous informer du bon déroulement des prestations.
                </p>
              </div>

              <div className="">
                <Image
                    src="/img/chat-balle.jpg"
                    alt="www.animauxlogis.fr | Un chat joue avec sa balle"
                    className=""
                    width={394}
                    height={309}
                    property
                  />
              </div>

            </article> 

            <article className="">
              <div className="">
                <p>
                  N&apos;hésitez pas à explorer le site pour en savoir plus sur les services et les tarifs. <br />
                  Si vous avez des questions ou des préoccupations, je suis disponible pour vous aider. <br />
                  Votre satisfaction et le bien-être de vos animaux sont ma priorité.
                </p>
                <p>
                  J&apos;ai hâte de faire la connaissance de vos adorables compagnons à poils, à plumes ou à écailles !
                </p>
              </div>

              <div className="">
                <Image
                  src="/img/poule.jpg"
                  alt="www.animauxlogis.fr | Une poule"
                  className=""
                  width={400}
                  height={267}
                  property
                />
              </div>

            </article> 

            <article className="">
              <div className="">Avec « ANIM&apos;AUX LOGIS », TRANQUILITÉ D&apos;ESPRIT GARANTIE !</div>
            </article> 


          </section>

        </div>




      </main>
    </Layout>
  );
}

export async function getStaticProps() {
  const { data } = await client.query({
    query: GET_HOME_PAGE,
  });

  return {
    props: {
      home: data.aL_Page || null,
    },
    revalidate: 86400, // 24 heures
  };
}


