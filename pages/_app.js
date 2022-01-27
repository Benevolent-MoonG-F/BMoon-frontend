
import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.css';
import { MoralisProvider } from 'react-moralis';
import { MoralisDappProvider } from '../providers/MoralisDappProvider/MoralisDappProvider';
import { useEffect } from 'react';

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap');
  }, []);
  return (
    <div>
      

      <MoralisProvider
        appId="Amrco2Pbc0LcAAlhIyMITx7J00VMi1rTDZJqfIKn"
        serverUrl="https://oepovfty0zcq.usemoralis.com:2053/server"
      >
        <MoralisDappProvider>
          <Component {...pageProps} />
        </MoralisDappProvider>
      </MoralisProvider>
    </div>
  );
}
