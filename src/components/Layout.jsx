import Head from "next/head";
import Header from "./Header";
import Sidenav from "./main/Sidenav";

const Layout = ({ children, title = "", description = "" }) => {
  return (
    <>
      <Head>
        <title>{`Alejandro Garzon - ${title}`}</title>
        <meta name="description" content={`${description}`} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-row">
        <Sidenav />
        <Header />
      </div>

      {children}
    </>
  );
};

export default Layout;
