"use client";

import { FaLinkedin, FaGithub, FaFacebook, FaEnvelope, FaPhoneAlt } from "react-icons/fa"; // Import các icon

const Footer = () => {

    return (
        <footer className="bg-dark text-white py-6 px-4 sm:px-6 md:px-8 w-full">
            <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 items-center">
                {/* Phần thông tin liên hệ bên trái */}
                <div className="flex justify-start gap-4 sm:justify-center md:justify-start">
                    <a href="mailto:nguyenphilong.dev@gmail.com" className="text-white hover:text-blue-500 transition-all duration-300">
                        <FaEnvelope size={20} />
                    </a>
                    <a href="tel:+84363291823" className="text-white hover:text-blue-500 transition-all duration-300">
                        <FaPhoneAlt size={20} />
                    </a>
                </div>

                {/* Phần văn bản ở giữa */}
                <span className="text-center sm:text-left col-span-1 fw-bold">
                   Copyright © 2025 Long Mỹ Ngọc. All rights reserved. Designed by Nguyễn Phi Long
                </span>

                {/* Phần mạng xã hội bên phải */}
                <div className="flex justify-end gap-4 sm:justify-center md:justify-end">
                    <a
                        href="https://www.linkedin.com/in/nguyễn-phi-long-b75117359"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-blue-600 transition-all duration-300"
                    >
                        <FaLinkedin size={30} />
                    </a>
                    <a
                        href="https://github.com/LongMyNgoc"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-gray-500 transition-all duration-300"
                    >
                        <FaGithub size={30} />
                    </a>
                    <a
                        href="https://www.facebook.com/profile.php?id=100043780454580"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-blue-600 transition-all duration-300"
                    >
                        <FaFacebook size={30} />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
