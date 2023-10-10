import Image from "next/image";
import Head from "next/head";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: ["400", "700"],
});

import NavBar from "./components/NabBar";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import FunFacts from "./components/FunFacts";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <div className={`${roboto.variable} font-roboto bg-[#FBF9FF]`}>
      <Head>
        <title>Sherry Wang</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen">
        <NavBar />
        <Hero />
      </div>
      <AboutMe />
      <Projects />
      <FunFacts />
      <Skills />
    </div>
  );
}
