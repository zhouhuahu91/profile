import React from "react";
import Link from "next/link";
import Image from "next/image";
import HuIcon from "@/icons/HuIcon";
import LinkedInIcon from "@/icons/LinkedInIcon";
import GitHubIcon from "@/icons/GitHubIcon";

interface HeaderProps {}

// Header has 3 sections;
// 1. Links to different parts of the website.
// 2. Home button / logo.
// 3. Icons for social media & download resume button.
const Header: React.FC<HeaderProps> = ({}) => {
  return (
    <header className="h-24 flex items-center">
      <nav className="max-w-screen-lg w-full m-auto flex items-center justify-between">
        {/* ******** 1 ********* */}
        <div className="uppercase text-xs flex space-x-8">
          <Link href="/">
            <a className="font-medium">projects</a>
          </Link>
          <Link href="/contact">
            <a className="font-medium">contact</a>
          </Link>
        </div>
        {/* ******** 2 ********* */}
        <Link href="/">
          <a>
            <HuIcon size="60" />
          </a>
        </Link>
        {/* ******** 3 ********* */}
        <div className="flex items-center space-x-4">
          <Link href="https://linkedin.com/in/zhouhuahu">
            <a rel="noreferrer" target="_blank" className="flex items-center">
              <LinkedInIcon className="header_icon_animation" size="20" />
            </a>
          </Link>
          <Link href="https://github.com/zhouhuahu91">
            <a rel="noreferrer" target="_blank" className="flex items-center">
              <GitHubIcon className="header_icon_animation" size="20" />
            </a>
          </Link>
          <a
            className="border px-2 py-1 text-xs font-medium rounded shadow-sm uppercase"
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
