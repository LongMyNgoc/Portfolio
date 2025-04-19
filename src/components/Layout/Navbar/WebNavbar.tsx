"use client";

import { Home, Info, Work, Description } from "@mui/icons-material";
import { CgGitFork } from "react-icons/cg";
import { AiFillStar } from "react-icons/ai";
import Link from "next/link";

const WebNavbar = () => {
  return (
    <nav className="flex flex-wrap gap-6 items-center text-white text-xl font-semibold">
      {/* Link không còn có hiệu ứng active hoặc focus */}
      <Link
        href="/"
        className="flex items-center gap-2 hover:text-yellow-500 transition-all duration-500 transform hover:scale-110 no-underline"
      >
        <Home fontSize="small" className="text-white hover:text-yellow-500 transition-all duration-500 transform hover:scale-110" />
        <span className="text-white hover:text-yellow-500 transition-all duration-500 transform hover:scale-110">Home</span>
      </Link>
      <Link
        href="/pages/about"
        className="flex items-center gap-2 hover:text-yellow-500 transition-all duration-500 transform hover:scale-110 no-underline"
      >
        <Info fontSize="small" className="text-white hover:text-yellow-500 transition-all duration-500 transform hover:scale-110" />
        <span className="text-white hover:text-yellow-500 transition-all duration-500 transform hover:scale-110">About</span>
      </Link>
      <Link
        href="/pages/projects"
        className="flex items-center gap-2 hover:text-yellow-500 transition-all duration-500 transform hover:scale-110 no-underline"
      >
        <Work fontSize="small" className="text-white hover:text-yellow-500 transition-all duration-500 transform hover:scale-110" />
        <span className="text-white hover:text-yellow-500 transition-all duration-500 transform hover:scale-110">Projects</span>
      </Link>
      <Link
        href="/pages/resume"
        className="flex items-center gap-2 hover:text-yellow-500 transition-all duration-500 transform hover:scale-110 no-underline"
      >
        <Description fontSize="small" className="text-white hover:text-yellow-500 transition-all duration-500 transform hover:scale-110" />
        <span className="text-white hover:text-yellow-500 transition-all duration-500 transform hover:scale-110">Resume</span>
      </Link>

      <a
        href="https://yourblog.com"
        target="_blank"
        rel="noreferrer"
        className="ml-4 px-4 py-2 border border-white rounded-md flex items-center gap-3 hover:bg-yellow-500 hover:text-white transition-all duration-500 transform hover:scale-110"
      >
        <CgGitFork className="text-xl text-white hover:text-black transition-all duration-500 transform hover:scale-110" />
        <AiFillStar className="text-xl text-white hover:text-black transition-all duration-500 transform hover:scale-110" />
      </a>
    </nav>
  );
};

export default WebNavbar;
