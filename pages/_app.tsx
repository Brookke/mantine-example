import { AppProps } from "next/app";
import Head from "next/head";
import { MantineProvider } from "@mantine/core";
import { withFronteggApp } from "@frontegg/nextjs";

function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>Page title</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <MantineProvider withNormalizeCSS>
        <Component {...pageProps} />
      </MantineProvider>
    </>
  );
}

// export default App;

export default withFronteggApp(App, {
  hostedLoginBox: false,
  customLoader: true,
  authOptions: {
    keepSessionAlive: true,
  },
});
