import Head from 'next/head'
import { Navbar } from '../components/navbar'

export default function About() {
  return (
    <div>
      <Head>
        <title>Benevolent Moon</title>
        <link rel="icon" href="/images/logo.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Jost&family=Play&family=Poppins:wght@200;300&family=Raleway:wght@600&display=swap" rel="stylesheet" />
      </Head>

      <main>
        <Navbar />
        <h1>About</h1>
      </main>

      <footer>

      </footer>
    </div>
  )
}
