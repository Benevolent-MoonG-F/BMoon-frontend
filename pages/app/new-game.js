import Head from 'next/head';
import { OrderPage } from '../../container/orderpage';
import { useEffect } from 'react';
import { useMoralis } from 'react-moralis';
import { fetchCurrentPrice } from '../../utils/helpers';
import Layout from '../../components/layout';
import { Navbar } from '../../components/navbar';

export default function NewGame() {
  const { authenticate, isAuthenticated, logout } = useMoralis();

  return (
    <Layout>
      <Navbar />
      <OrderPage />
    </Layout>
  );
}
