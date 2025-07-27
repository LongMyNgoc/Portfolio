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
            {/* Sidebar chính */}
            <div
                className={`fixed top-0 left-0 h-screen w-4/5 max-w-xs bg-white text-black shadow-lg transform transition-transform duration-300 ease-in-out z-[2147483647] rounded-r-2xl flex flex-col ${
                    isOpen ? "translate-x-0" : "-translate-x-full"
                }`}
            >
                {/* Header với logo */}
                <div className="flex justify-between items-center px-8 py-2 border-b border-gray-300 flex-shrink-0">
                    <div className="w-14 h-14 relative rounded-full overflow-hidden">
                        <Image
                            src="/assets/Logo.png" // Thay bằng đường dẫn logo của bạn
                            alt="Logo"
                            layout="fill"
                            objectFit="contain"
                        />
                    </div>
                    <button
                        onClick={onClose}
                        className="text-gray-600 hover:text-red-500 transition text-2xl"
                        aria-label="Đóng menu"
                    >
                        <Close fontSize="large" />
                    </button>
                </div>

                {/* Danh sách menu có thể cuộn */}
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
            </div>

            {/* Overlay nền đen mờ */}
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
