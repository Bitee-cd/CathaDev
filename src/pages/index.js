import Head from "next/head";
import { Squada_One } from "@next/font/google";
import HeroSection from "@/Components/Hero";
import Navbar from "@/Components/UI/Navbar";
import AboutUs from "@/Components/about";
import { useAppContext } from "@/Components/Context/AppContext";
import WhoWeAre from "@/Components/who_we_are";
import Services from "@/Components/services";
import EnoughSaid from "@/Components/EnoughSaid/EnoughSaid";
import Portfolio from "@/Components/Portfolio/Portfolio";
import Testimonials from "@/Components/Testimonials/Testimonials";
import Contact from "@/Components/GetInTouch/Contact";
import ScrollButton from "@/Components/UI/ScrollButton";
import Footer from "@/Components/UI/Footer";

const squada = Squada_One({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--squada",
});

export default function Home() {
  const { spartan, squada, darkMode } = useAppContext();
  return (
    <>
      <Head>
        <title>CathaDev</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <>
        <main className={`${spartan.className}`}>
          <Navbar />
          <HeroSection />
          <AboutUs />
          <WhoWeAre />
          <Services />
          <EnoughSaid />
          <Portfolio />
          <Testimonials />
          <Contact squada={squada} darkMode={darkMode} spartan={spartan} />
          <ScrollButton />
          <Footer />
        </main>
      </>
    </>
  );
}
