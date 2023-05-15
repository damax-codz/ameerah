import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Ameerah &mdash; The Designer girl</title>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossorigin
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces&family=Source+Sans+Pro&display=swap"
          rel="stylesheet"
        ></link>
        <meta
          name="description"
          content="A UX Designer who believes Good design is more than just aesthetics."
        />
      </Head>

      <Component {...pageProps} />
    </>
  );
}
