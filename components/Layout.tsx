// React imports
import React from "react";
// NextJS imports
import Head from "next/head";
// Component imports
import Header from "@/components/Header";

type LayoutProps = {
  children: JSX.Element;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Zhouhua</title>
      </Head>
      <div className="dark:bg-neutral-900 min-h-screen">
        <Header />
        <div>{children}</div>
      </div>
    </>
  );
};

export default Layout;
