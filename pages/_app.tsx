import Head from "next/head";
import GlobalStyle from "../styles/globals";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Portfólio - Jaime Barbosa</title>
        <link
          rel="icon"
          href="/favicon.svg"
          sizes="any"
          type="image/svg+xml"
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />
      <GlobalStyle />
    </>
  );
}

export default MyApp;
