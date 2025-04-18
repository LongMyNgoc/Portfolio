"use client";

import React, { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { Home, Info, Work, Description } from "@mui/icons-material";
import Link from "next/link";
import { CgGitFork } from "react-icons/cg";
import { AiFillStar } from "react-icons/ai";

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <div className="md:hidden relative">
      <button
        onClick={toggleMenu}
        className="text-white p-2 focus:outline-none"
        aria-label="Toggle menu"
      >
        <HiMenu className="text-2xl" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 bg-gray-900 rounded-md shadow-lg z-50">
          <ul className="py-2 text-white text-lg font-semibold">
            <li>
              <Link
                href="/"
                onClick={closeMenu}
                className="flex items-center gap-2 px-4 py-2 hover:text-yellow-400 hover:bg-gray-800 transition-all duration-300"
              >
                <Home fontSize="small" /> Home
              </Link>
            </li>
            <li>
              <Link
                href="/pages/about"
                onClick={closeMenu}
                className="flex items-center gap-2 px-4 py-2 hover:text-yellow-400 hover:bg-gray-800 transition-all duration-300"
              >
                <Info fontSize="small" /> About
              </Link>
            </li>
            <li>
              <Link
                href="/pages/projects"
                onClick={closeMenu}
                className="flex items-center gap-2 px-4 py-2 hover:text-yellow-400 hover:bg-gray-800 transition-all duration-300"
              >
                <Work fontSize="small" /> Projects
              </Link>
            </li>
            <li>
              <Link
                href="/pages/resume"
                onClick={closeMenu}
                className="flex items-center gap-2 px-4 py-2 hover:text-yellow-400 hover:bg-gray-800 transition-all duration-300"
              >
                <Description fontSize="small" /> Resume
              </Link>
            </li>
            <li>
              <a
                href="https://yourblog.com"
                target="_blank"
                rel="noreferrer"
                onClick={closeMenu}
                className="flex items-center gap-2 px-4 py-2 hover:text-yellow-400 hover:bg-gray-800 transition-all duration-300"
              >
                <CgGitFork className="text-xl" />
                <AiFillStar className="text-xl" />
                Blog
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default MobileNavbar;
