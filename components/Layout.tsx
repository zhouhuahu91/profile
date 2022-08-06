import Head from "next/head";
import React from "react";

type Props = {
  children: JSX.Element;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Head>
        <title>Zhouhua</title>
      </Head>
      <div>
        <div>{children}</div>
      </div>
    </>
  );
};

export default Layout;
