import Layout from "@/components/Layout";
import Link from "next/link";
import React from "react";

const blog = () => {
  return (
    <Layout
      title="Blog"
      description="Blog of ML, Cloud architectures, Backend and more"
    >
      <Link href={"/"}>Home</Link>
    </Layout>
  );
};

export default blog;
