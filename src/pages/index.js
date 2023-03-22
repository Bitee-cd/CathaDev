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
import Cursor from "@/Components/UI/Cursor";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Layout from "@/Components/UI/Layout";
const squada = Squada_One({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--squada",
});

export default function Home() {
  const [title, setTitle] = useState("Home");
  const { theme } = useTheme();
  const { spartan, squada, darkMode } = useAppContext();
  useEffect(() => {
    const section1 = document.getElementById("section-1");
    const section2 = document.getElementById("section-2");
    const section3 = document.getElementById("section-3");
    const section4 = document.getElementById("section-4");
    const section5 = document.getElementById("section-5");
    const section6 = document.getElementById("section-6");
    const section7 = document.getElementById("section-7");
    const section8 = document.getElementById("section-8");

    function handleScroll() {
      if (section3 && window.scrollY >= section8.offsetTop) {
        setTitle("Contact Us");
      } else if (section3 && window.scrollY >= section7.offsetTop) {
        setTitle("Testimonials");
      } else if (section3 && window.scrollY >= section6.offsetTop) {
        setTitle("Portfolio");
      } else if (section3 && window.scrollY >= section5.offsetTop) {
        setTitle("Let's Get To Work");
      } else if (section3 && window.scrollY >= section4.offsetTop) {
        setTitle("Services");
      } else if (section3 && window.scrollY >= section3.offsetTop) {
        setTitle("Who We are");
      } else if (section2 && window.scrollY >= section2.offsetTop) {
        setTitle("About Us");
      } else if (section1 && window.scrollY >= section1.offsetTop) {
        setTitle("Home");
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Layout title={title}>
      <HeroSection />
      <AboutUs />
      <WhoWeAre />
      <Services />
      <EnoughSaid />
      <Portfolio />
      <Testimonials />
      <Contact squada={squada} darkMode={darkMode} spartan={spartan} />
      <ScrollButton />
    </Layout>
  );
}
