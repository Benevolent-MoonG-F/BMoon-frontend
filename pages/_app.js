import Head from 'next/head';
import '../styles/globals.css';
import { MoralisProvider } from 'react-moralis';
import { MoralisDappProvider } from '../providers/MoralisDappProvider/MoralisDappProvider';

export default function MyApp({ Component, pageProps }) {
  return (
    <div>
      {/* <Head>
        <title>Benevolent Moon</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Meta description content goes here." />      
        <link rel="icon" href="/images/logo.png" />
      </Head> */}

      <MoralisProvider
        appId="YUfmatAO05TOm0I0Fr8hHGjRmrk1iSJ4eRGq9LJl"
        serverUrl="https://bfcz4zkoflul.usemoralis.com:2053/server"
      >
        <MoralisDappProvider>

          <Component {...pageProps} />

        </MoralisDappProvider>
      </MoralisProvider>
    </div>
  );
}
