import { useMoralis } from "react-moralis";
import { useEffect } from "react";
import Layout from "../components/layout";
import { HomePage } from "../container/homepage";
import { Navbar } from "../components/navbar";
import dynamic from "next/dynamic";

// const HomeComponent = dynamic(() => {
//   return import("../container/Home"), { ssr: false };
// });

// const CompAnd = dynamic(() => import("react-moralis"), { ssr: false });

export default function Home() {
  // console.log(CompAnd);
  const { isWeb3Enabled, enableWeb3, isAuthenticated, isWeb3EnableLoading } =
    useMoralis();

  useEffect(() => {
    if (isAuthenticated && !isWeb3Enabled && !isWeb3EnableLoading) enableWeb3();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated, isWeb3Enabled]);

  return (
    <Layout>
      <Navbar />
      <HomePage />
    </Layout>
  );
}

// export default function Home() {
//   return <HomeComponent />;
// }
