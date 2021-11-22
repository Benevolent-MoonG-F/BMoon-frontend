import '../styles/globals.css';
import { MoralisProvider } from 'react-moralis';
import { MoralisDappProvider } from '../providers/MoralisDappProvider/MoralisDappProvider';

export default function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider
      appId="YUfmatAO05TOm0I0Fr8hHGjRmrk1iSJ4eRGq9LJl"
      serverUrl="https://bfcz4zkoflul.usemoralis.com:2053/server"
    >
      <MoralisDappProvider>
        <Component {...pageProps} />
      </MoralisDappProvider>
    </MoralisProvider>
  );
}
