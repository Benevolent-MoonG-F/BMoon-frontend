import Layout from '../components/layout';
import { HomePage } from '../container/homepage';
import { Navbar } from '../components/navbar';

export default function About() {
  return (
    <Layout>
      <Navbar />
      <h1 styles={{height: '100vh', backgroud: 'black'}}>About</h1>
    </Layout>
  )
}
