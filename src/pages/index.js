import Head from "next/head";
import { Inter } from "next/font/google";

import Sidenav from "@/components/Sidenav";
import Main from "@/components/Main";
import Work from "@/components/Work";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import About from "@/components/About";
import { ScrollToTop } from "@/components/ScrollToTop";
import Skills from "@/components/Skills";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Alejandro Garzon - Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="m-auto h-full w-full flex flex-col justify-center pr-2">
          <Sidenav />
          <Main />
          <About />
          <Skills />
          <Projects />
          <Work />
          <Contact />
          <ScrollToTop />
        </div>
      </main>
    </>
  );
}
