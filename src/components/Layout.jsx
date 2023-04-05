import Head from "next/head";
import Header from "./Header";
import Sidenav from "./main/Sidenav";

const Layout = ({ children, title = "", description = "" }) => {
  return (
    <>
      <Head>
        <meta name="description" content={`${description}`} />
        <meta name="author" content="Alejandro Garzón" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="Computer Science, UNAM, Artificial Intelligence, Machine Learning, Computer Vision, Digital Signal Processing, OpenCV, TensorFlow, Python, C++, JavaScript, MongoDB, SQL, Data Scientist, Node.js, React, Pandas, HTML, Ray Tracing"
        />
        <title>{`Alejandro Garzon - ${title}`}</title>
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
