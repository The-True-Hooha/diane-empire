// Header.jsx
import React from "react";
import Link from "next/link";
import { AnimatePresence, Spring, motion } from "framer-motion";

const Header = () => {
  return (
    <header>
      <nav className="bg-orange-600 text-black p-4">
        <div className="container mx-auto flex justify-between items-center">
          <motion.div
            style={{ display: "inline-block" }}
            whileHover={{ scale: 1.1 }}
          >
            <Link className="text-xl font-bold" href="/">
              Your Brand
            </Link>
          </motion.div>

          <button className="block lg:hidden focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
          <div className="hidden lg:flex space-x-4">
            <motion.div
              style={{ display: "inline-block" }}
              whileHover={{ scale: 1.1 }}
            >
              <Link className="text-xl font-bold" href="/about">
                About
              </Link>
            </motion.div>
            <motion.div
              style={{ display: "inline-block" }}
              whileHover={{ scale: 1.1 }}
            >
              <Link className="text-xl font-bold" href="/contact">
                Contact
              </Link>
            </motion.div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
