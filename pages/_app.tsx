import { MantineProvider } from "@mantine/core";
import type { AppProps } from "next/app";
import Head from "next/head";
import "../styles/globals.css";
import { NotificationsProvider } from '@mantine/notifications';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>BudgetBear</title>
        <link rel="shortcut icon" href="/BudgetBear.png" />
      </Head>
      <MantineProvider withGlobalStyles withNormalizeCSS>
      <NotificationsProvider position="top-right" autoClose={800}>
        <Component {...pageProps} />
      </NotificationsProvider>
      </MantineProvider>
    </>
  );
}
