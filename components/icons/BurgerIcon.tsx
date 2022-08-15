import React from "react";

interface BurgerIconProps {
  size?: string;
  className?: string;
}

const BurgerIcon: React.FC<BurgerIconProps> = ({ className, size }) => {
  return (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      viewBox="0 0 24 24"
      height={size ? size : "24"}
      className={className && className}
      width={size ? size : "24"}
    >
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zm0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zM3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1z" />{" "}
    </svg>
  );
};

export default BurgerIcon;
