import "../styles/globals.css";
import "../styles/index.css";
import "../styles/slider-input.css";
import Layout from "../components/Layout";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Head>
          <title>Unnecessary UI</title>
        </Head>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
