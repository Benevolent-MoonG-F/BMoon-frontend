import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import { MoralisProvider } from "react-moralis";
import { MoralisDappProvider } from "../providers/MoralisDappProvider/MoralisDappProvider";
import { useEffect } from "react";
import { Provider } from "react-redux";
import store from "../state";

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);
  return (
    <div>
      <MoralisProvider
        appId={process.env.NEXT_PUBLIC_APPID}
        serverUrl={process.env.NEXT_PUBLIC_SERVERURL}
      >
        <MoralisDappProvider>
          <Provider store={store}>
            <Component {...pageProps} />
          </Provider>
        </MoralisDappProvider>
      </MoralisProvider>
    </div>
  );
}
