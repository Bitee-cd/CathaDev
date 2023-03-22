import Head from "next/head";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Cursor from "./Cursor";
import { useAppContext } from "../Context/AppContext";

const Layout = ({ children, title }) => {
  const { spartan } = useAppContext();
  return (
    <>
      <Head>
        <title>{title ? title + " - Cathadev" : "Cathadev"}</title>
        <meta name="description" content="Texkoop Logistics Company" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </Head>

      <Navbar />
      <main className={`${spartan.className}`}>{children}</main>
      <Footer />
      <Cursor />
    </>
  );
};

export default Layout;
