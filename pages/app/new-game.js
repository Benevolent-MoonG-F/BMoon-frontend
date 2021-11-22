import Head from 'next/head';
import { OrderPage } from '../../container/orderpage';
import { useEffect } from 'react';
import { useMoralis } from 'react-moralis';
import { fetchCurrentPrice } from '../../utils/helpers';

export default function NewGame() {
  const { authenticate, isAuthenticated, logout } = useMoralis();

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
        <OrderPage />
      </main>

      <footer></footer>
    </div>
  );
}
