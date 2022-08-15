import React from "react";

interface IconButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick: () => void;
  disabled?: boolean;
}

const IconButton: React.FC<IconButtonProps> = ({
  children,
  className,
  onClick,
  disabled,
}) => {
  return (
    <button
      className={`${className && className} red-focus-ring rounded`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default IconButton;
