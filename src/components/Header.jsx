import Link from "next/link";
import Image from "next/image";
import React from "react";

import styles from "../styles/Header.module.css";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();
  return (
    <header className="fixed py-5 flex flex-wrap flex-auto flex-row opacity-90 justify-center bg-black bg-gradient-to-tr w-screen h-auto bg-fixed bg-cover brightness-90 from-[#323232] to-[#222323] z-50">
      {/* <header className={styles.header}> */}
      <div className={styles.bar}>
        {/* <Link href="#main">
            <Image width={50} height={50} src="/assets/bg4.jpg" alt="Logo" />
          </Link> */}

        <nav className={styles.navigation}>
          <Link id="Link" href="/#main">
            Main
          </Link>
          <Link href="/#about">About</Link>
          <Link href="/#skills">Skills</Link>
          <Link href="/#projects">Projects</Link>
          <Link href="/#work">Work</Link>
          <Link href="/#contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;

// how to make linear gradient css background color?
