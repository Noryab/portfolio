import Head from "next/head";
import { Inter } from "next/font/google";

import Sidenav from "@/components/main/Sidenav";
import Main from "@/components/main/Main";
import Work from "@/components/work/Work";
import Projects from "@/components/projects/Projects";
import Contact from "@/components/contact/Contact";
import About from "@/components/about/About";
import { ScrollToTop } from "@/components/utilities/ScrollToTop";
import Skills from "@/components/skills/Skills";
import Layout from "@/components/Layout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Layout title={"Portfolio"} description={"Portfolio and Blog."}>
        <main>
          <div className="m-auto h-full w-full flex flex-col justify-center pr-2">
            <Main />
            <About />
            <Skills />
            <Projects />
            <Work />
            <Contact />
            <ScrollToTop />
          </div>
        </main>
      </Layout>
    </>
  );
}
