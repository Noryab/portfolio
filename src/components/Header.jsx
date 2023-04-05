import Link from "next/link";
import React, { useEffect, useState } from "react";

import styles from "../styles/Header.module.css";
import { useRouter } from "next/router";

function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState(null);

  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;
      const direction = scrollY > lastScrollY ? "down" : "up";
      if (
        direction !== scrollDirection &&
        (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)
      ) {
        setScrollDirection(direction);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };
    window.addEventListener("scroll", updateScrollDirection); // add event listener
    return () => {
      window.removeEventListener("scroll", updateScrollDirection); // clean up
    };
  }, [scrollDirection]);

  return scrollDirection;
}

const Header = () => {
  const router = useRouter();
  const scrollDirection = useScrollDirection();

  return (
    <section
      // className={`sticky ${
      //   scrollDirection === "down" ? "sm:-top-24" : "sm:top-0 hidden"
      // } h-20 top-0 sm:fixed py-5 sm:flex flex-wrap flex-auto flex-row opacity-90 justify-center bg-black bg-gradient-to-tr w-screen bg-fixed bg-cover brightness-90  z-50 transition-all duration-700`}
      className={`sticky ${"sm:top-0"} h-20 top-0 sm:fixed py-5 sm:flex flex-wrap flex-auto flex-row opacity-90 justify-center bg-black bg-gradient-to-tr w-screen bg-fixed bg-cover brightness-90  z-50 transition-all duration-700`}
    >
      <header className="">
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
            <Link href="/blog">Blog</Link>
          </nav>
        </div>
      </header>
    </section>
  );
};

export default Header;

// how to make linear gradient css background color?
