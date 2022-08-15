import React, { useState } from "react";
import BurgerIcon from "@/icons/BurgerIcon";
import IconButton from "@/components/IconButton";

interface BurgerMenuProps {}

const BurgerMenu: React.FC<BurgerMenuProps> = ({}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <IconButton onClick={() => setIsOpen((prev) => !prev)}>
        <BurgerIcon />
      </IconButton>
    </>
  );
};

export default BurgerMenu;
