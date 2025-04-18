"use client";

import React from "react";
import WebNavbar from "./WebNavbar";

const MainNavbar = () => {
    return (
        <header className="w-full bg-transparent shadow-none">
            <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
                <h2 className="text-xl font-bold text-white">
                    Portfolio
                </h2>

                {/* Luôn hiển thị WebNavbar */}
                <div className="flex">
                    <WebNavbar />
                </div>
            </div>
        </header>
    );
};

export default MainNavbar;
