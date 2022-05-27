import Head from "next/head";
import { PrintPage } from "../../container/69Sprint-page/index";
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
      <PrintPage />
    </Layout>
  );
}
