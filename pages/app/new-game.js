
import Head from 'next/head'
import { OrderPage } from '../../container/orderpage';

export default function NewGame() {

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
            <OrderPage />
        </main>

        <footer>

        </footer>
        </div>
    );
}