import React, { useState, useRef } from "react";
import Link from "next/link";
// Component imports
import BurgerIcon from "@/icons/BurgerIcon";
import IconButton from "@/components/IconButton";
import HuIcon from "@/icons/HuIcon";
// Animation imports
import { motion, AnimatePresence } from "framer-motion";
// Hook imports

interface BurgerMenuProps {}

const BurgerMenu: React.FC<BurgerMenuProps> = ({}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <IconButton
        className="sm:hidden"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <BurgerIcon />
      </IconButton>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black bg-opacity-40 z-50"
          >
            <motion.nav
              initial={{ x: "-100%" }}
              animate={{ x: 0, transition: { duration: 0.3 } }}
              exit={{ x: "-100%", transition: { duration: 0.3 } }}
              onClick={(e) => e.stopPropagation()}
              className="w-64 h-full bg-white flex flex-col text-xs uppercase"
            >
              <div className="flex items-center justify-center p-4">
                <Link href="/">
                  <a
                    onClick={() => setIsOpen(false)}
                    className="red-focus-ring rounded"
                  >
                    <HuIcon size="40" />
                  </a>
                </Link>
              </div>
              <Link href="/">
                <a className="font-medium focus:outline-none focus:bg-neutral-100 hover:bg-neutral-100 py-2 pl-6">
                  projects
                </a>
              </Link>

              <Link href="/contact">
                <a className="font-medium focus:outline-none focus:bg-neutral-100 hover:bg-neutral-100 py-2 pl-6">
                  contact
                </a>
              </Link>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default BurgerMenu;
