import Header from "./Header";
import Head from 'next/head';
import { Navbar } from "./navbar/index";

const layoutStyle = {
  display: "flex",
  flexDirection: "column",
  height: "100%",
  width: "100vw",
};

const contentStyle = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
};

const Layout = props => (
    <div className="Layout" style={layoutStyle}>
        <Head>
            <title>Benevolent Moon</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="description" content="Meta description content goes here." />      
            <link rel="icon" href="/images/logo.png" />
            <meta charSet="utf-8" />
        </Head>

        <main className="Content" style={contentStyle}>
        {props.children}
        </main>
       
    </div>
);

export default Layout;