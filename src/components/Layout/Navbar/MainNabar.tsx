"use client";

import React, { useState } from "react";
import WebNavbar from "./WebNavbar";
import { Menu, Close } from "@mui/icons-material";

const MainNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="w-full bg-transparent shadow-none border-b-2 border-white">
            <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
                {/* Chữ Portfolio nổi bật */}
                <h2 className="text-3xl font-extrabold text-yellow-500">
                    Portfolio
                </h2>

                {/* Desktop navbar */}
                <div className="hidden md:flex">
                    <WebNavbar />
                </div>

                {/* Hamburger icon for mobile */}
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? (
                            <Close className="text-white" />
                        ) : (
                            <Menu className="text-white" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className="md:hidden px-4 pb-4">
                    <WebNavbar />
                </div>
            )}
        </header>
    );
};

export default MainNavbar;
