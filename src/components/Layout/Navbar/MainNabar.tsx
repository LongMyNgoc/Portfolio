"use client";

import React from "react";
import WebNavbar from "./WebNavbar";
import MobileNavbar from "./MobileNavbar";

const MainNavbar = () => {
    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-transparent shadow-none">
            <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
                <h2 className="text-xl font-bold text-white">
                    Portfolio
                </h2>

                {/* Navbar hiển thị theo màn hình */}
                <div className="hidden md:flex">
                    <WebNavbar />
                </div>
                <div className="md:hidden">
                    <MobileNavbar />
                </div>
            </div>
        </header>
    );
};

export default MainNavbar;
