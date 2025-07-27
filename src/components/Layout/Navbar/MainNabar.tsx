// components/MainNavbar.tsx
"use client";

import React, { useState } from "react";
import Image from "next/image";
import WebNavbar from "./WebNavbar";
import MobileSidebar from "./MobileNavbar";
import { Menu } from "@mui/icons-material";
import Link from "next/link";

const MainNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="w-full bg-white/10 backdrop-blur-md border-b border-white/20 shadow-sm">
            <div className="max-w-7xl mx-auto pr-4 py-2 flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="flex-shrink-0 pl-4">
                    <div className="w-20 h-20 relative rounded-full overflow-hidden border border-white shadow">
                        <Image
                            src="/assets/logo.png"
                            alt="Logo Nguyễn Phi Long"
                            fill
                            priority
                            className="object-cover"
                        />
                    </div>
                </Link>

                {/* Desktop navbar */}
                <div className="hidden md:flex">
                    <WebNavbar />
                </div>

                {/* Hamburger icon */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsOpen(true)}
                        className="text-white hover:text-yellow-400 transition"
                        aria-label="Open menu"
                    >
                        <Menu fontSize="large" />
                    </button>
                </div>
            </div>

            {/* Mobile sidebar */}
            <MobileSidebar isOpen={isOpen} onClose={() => setIsOpen(false)} />
        </header>
    );
};

export default MainNavbar;
