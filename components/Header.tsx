import React from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import SunIcon from "@/components/icons/SunIcon";
import MoonIcon from "@/components/icons/MoonIcon";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = ({}) => {
  const { theme, setTheme } = useTheme();

  return (
    <header className="h-16 flex items-center">
      <div className="max-w-screen-lg w-full m-auto flex items-center justify-between">
        <Link href="/">
          <a className="font-semibold">Zhouhua</a>
        </Link>
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="bg-gray-200 dark:bg-gray-600 flex items-center justify-center h-9 w-9 rounded-lg"
        >
          {theme === "dark" ? <SunIcon size="18" /> : <MoonIcon size="18" />}
        </button>
      </div>
    </header>
  );
};
export default Header;
