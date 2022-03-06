import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
// import { MoralisProvider } from "react-moralis";
// import { MoralisDappProvider } from "../providers/MoralisDappProvider/MoralisDappProvider";
import { useEffect } from "react";
import { Provider } from "react-redux";
import store from "../state";
import dynamic from "next/dynamic";
import { InitializeMoralis } from "../utils/hooks/initialize";

const MoralisDappProvider = dynamic(
  () => {
    return import("../providers/MoralisDappProvider/MoralisDappProvider").then(
      (mod) => mod.MoralisDappProvider
    );
  },
  { ssr: false }
);

const MoralisProvider = dynamic(() => {
  return import("react-moralis").then((mod) => mod.MoralisProvider);
});

export default function MyApp({ Component, pageProps }) {
  useEffect(async () => {
    import("bootstrap/dist/js/bootstrap");
  }, []);

  console.log("env", process.env);
  return (
    <div>
      <MoralisProvider
        appId='Amrco2Pbc0LcAAlhIyMITx7J00VMi1rTDZJqfIKn'
        serverUrl='https://oepovfty0zcq.usemoralis.com:2053/server'
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
