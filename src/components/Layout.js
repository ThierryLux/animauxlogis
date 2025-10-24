import Head from 'next/head';
import { useRouter } from 'next/router';
import Header from './Header';
import { SloganTop } from './Slogan/Slogan';
import Footer from './Footer';

export default function Layout({
  language,
  children,
}) {
  const router = useRouter();

  return (
    <div>

      <Head>
          <meta name='language' content={language} />
      </Head>

      <SloganTop />

      <Header />

      {children}

      <Footer />
 
    </div>
  )
}

Layout.defaultProps = {
    robots: 'noarchive',
    canonical: '/',
    language: 'fr',
    site_name: 'https://www.animauxlogis.fr',
    breadcrumb: 'Partners Page' 
}

/*

          <title>{title}</title>
          <meta name='description' content={description} />

      <OffcanvasSignIn />
      <OffcanvasSignUp />


router.pathname !== '/' && 


*/
