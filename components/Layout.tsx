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
        <link rel="icon" href="/icons/HuLogo.jpeg" />
        <link rel="apple-touch-icon" href="/icons/HuLogo.jpeg" />
        <link rel="shortcut icon" href="/icons/HuLogo.jpeg" />
        {/* Meta for the viewport */}
        <meta
          name="viewport"
          // This makes sure that the viewport is responsive and doesn't zoom in on mobile devices.
          content="initial-scale=1, maximum-scale=1, width=device-width"
        />
      </Head>
      <div className="dark:bg-neutral-900 min-h-screen">
        <Header />
        <div>{children}</div>
      </div>
    </>
  );
};

export default Layout;
