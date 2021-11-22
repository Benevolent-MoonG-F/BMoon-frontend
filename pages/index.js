import Head from 'next/head';
import Link from 'next/link';
import { HomePage } from '../container/homepage';
import { useMoralis } from 'react-moralis';
import { useEffect } from 'react';
export default function Home() {
  const { isWeb3Enabled, enableWeb3, isAuthenticated, isWeb3EnableLoading } =
    useMoralis();

  useEffect(() => {
    if (isAuthenticated && !isWeb3Enabled && !isWeb3EnableLoading) enableWeb3();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated, isWeb3Enabled]);

  return (
    <div>
      <Head>
        <title>Benevolent Moon</title>
        <link rel="icon" href="/images/logo.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Jost&family=Play&family=Poppins:wght@200;300&family=Raleway:wght@600&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main>
        <HomePage />
      </main>

      <footer></footer>
    </div>
  );
}
