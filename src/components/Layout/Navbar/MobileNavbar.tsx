"use client";

import React from "react";
import Image from "next/image";
import { Close, Home, Info, Work, Description } from "@mui/icons-material";
import Link from "next/link";

interface MobileSidebarProps {
    isOpen: boolean;
    onClose: () => void;
}

const MobileSidebar: React.FC<MobileSidebarProps> = ({ isOpen, onClose }) => {
    const menuItems = [
        { href: "/", label: "Home", icon: <Home fontSize="medium" /> },
        { href: "/about", label: "About", icon: <Info fontSize="medium" /> },
        { href: "/projects", label: "Projects", icon: <Work fontSize="medium" /> },
        { href: "/resume", label: "Resume", icon: <Description fontSize="medium" /> },
    ];

    return (
        <>
            <div
                className={`fixed top-0 left-0 h-screen w-4/5 max-w-xs bg-white text-black shadow-lg transform transition-transform duration-300 ease-in-out z-[2147483647] rounded-r-2xl flex flex-col ${isOpen ? "translate-x-0" : "-translate-x-full"
                    }`}
            >
                {/* Header */}
                <header className="flex items-center justify-between px-4 py-3 bg-gray-100 border-b border-gray-300 gap-2 flex-shrink-0">
                    <div className="w-12 h-12 relative rounded-full overflow-hidden flex-shrink-0">
                        <Image
                            src="/assets/Logo.png"
                            alt="Logo"
                            layout="fill"
                            objectFit="contain"
                        />
                    </div>
                    <a
                        href="tel:0363291823"
                        className="flex items-center gap-2 text-yellow-500 font-semibold text-sm whitespace-nowrap hover:text-yellow-600 transition"
                    >
                        📞 0363 291 823
                    </a>
                    <button
                        onClick={onClose}
                        className="text-gray-600 hover:text-red-500 transition text-2xl"
                        aria-label="Đóng menu"
                    >
                        <Close fontSize="large" />
                    </button>
                </header>

                {/* Body */}
                <nav className="flex-1 overflow-y-auto px-4 py-6 space-y-4">
                    {menuItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            onClick={onClose}
                            className="flex items-center gap-4 px-4 py-3 rounded-lg text-gray-700 hover:bg-yellow-100 transition font-medium text-base"
                        >
                            <span>{item.icon}</span>
                            <span>{item.label}</span>
                        </Link>
                    ))}
                </nav>

                {/* Footer */}
                <footer className="px-4 py-3 bg-gray-100 border-t border-gray-300 flex items-center justify-around text-sm">
                    <button className="flex items-center gap-2 text-yellow-600 font-medium">
                        <span className="fi fi-vn rounded-sm" style={{ width: 24, height: 16 }} />
                        <span>Vietnamese</span>
                    </button>
                    <button className="flex items-center gap-2 text-yellow-600 font-medium">
                        <span className="fi fi-gb rounded-sm" style={{ width: 24, height: 16 }} />
                        <span>English</span>
                    </button>
                </footer>

            </div>

            {/* Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[998]"
                    onClick={onClose}
                />
            )}
        </>
    );
};

export default MobileSidebar;
