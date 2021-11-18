import '../styles/globals.css'
import Head from "next/head";
import Header from "../layout/header/index";
import Footer from "../layout/footer/index";
import 'bootstrap/dist/css/bootstrap.min.css';


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Proaktif</title>
        <meta name="description" content="Proaktif Resmi Web Sitesi" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
