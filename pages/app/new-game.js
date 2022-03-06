import Head from "next/head";
import { OrderPage } from "../../container/orderpage";
import { useEffect } from "react";
import { useMoralis } from "react-moralis";
import { fetchCurrentPrice } from "../../utils/helpers";
import Layout from "../../components/layout";
import { Navbar } from "../../components/navbar";
import dynamic from "next/dynamic";

export default function NewGame() {
  return (
    <Layout>
      <Navbar />
      <OrderPage />
    </Layout>
  );
}
