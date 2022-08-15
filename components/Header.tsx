import React from "react";
import Link from "next/link";
import Image from "next/image";
import HuIcon from "@/icons/HuIcon";
import LinkedInIcon from "@/icons/LinkedInIcon";
import GitHubIcon from "@/icons/GitHubIcon";

// Component imports
import BurgerMenu from "@/components/BurgerMenu";

interface HeaderProps {}

// Header has 3 sections;
// 1. Links to different parts of the website. Hidden on mobile.
// 2. Home button / logo.
// 3. Icons for social media & download resume button.
const Header: React.FC<HeaderProps> = ({}) => {
  return (
    <header className="h-24 flex items-center mx-6">
      <nav className="max-w-screen-lg w-full m-auto flex items-center justify-between">
        {/* ******** 1 ********* */}
        <div className="uppercase text-xs space-x-8 hidden sm:flex">
          <Link href="/">
            <a className="font-medium">projects</a>
          </Link>
          <Link href="/contact">
            <a className="font-medium">contact</a>
          </Link>
        </div>
        <BurgerMenu />
        {/* ******** 2 ********* */}
        <Link href="/">
          <a className="red-focus-ring rounded p-0.5">
            <HuIcon size="50" className="header_icon_animation" />
          </a>
        </Link>
        {/* ******** 3 ********* */}
        <div className="items-center space-x-4 flex">
          <Link href="https://linkedin.com/in/zhouhuahu">
            <a
              rel="noreferrer"
              target="_blank"
              className="flex items-center red-focus-ring rounded"
            >
              <LinkedInIcon className="header_icon_animation" size="20" />
            </a>
          </Link>
          <Link href="https://github.com/zhouhuahu91">
            <a
              rel="noreferrer"
              target="_blank"
              className="flex items-center red-focus-ring rounded"
            >
              <GitHubIcon className="header_icon_animation" size="20" />
            </a>
          </Link>
          <a
            className="border px-2 py-1 text-xs font-medium rounded shadow-sm uppercase bg-white hidden sm:block"
            href="/vercel.svg"
            download
          >
            download cv
          </a>
        </div>
      </nav>
    </header>
  );
};
export default Header;
