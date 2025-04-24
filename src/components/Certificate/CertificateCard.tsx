"use client"
import { useState } from "react";
import Image from "next/image";

interface CertificateCardProps {
    title: string;
    imageUrl: string;
}

const CertificateCard = ({ title, imageUrl }: CertificateCardProps) => {
    const [isModalOpen, setIsModalOpen] = useState(false);  // State để kiểm tra xem modal có mở hay không

    const openModal = () => setIsModalOpen(true);  // Mở modal
    const closeModal = () => setIsModalOpen(false);  // Đóng modal

    return (
        <div>
            {/* Card */}
            <div
                className="w-full flex flex-col items-center justify-center bg-white rounded-2xl shadow-lg overflow-hidden transition-transform hover:scale-105 hover:shadow-2xl cursor-pointer"
                onClick={openModal}  // Mở modal khi click vào card
            >
                <div className="w-full relative">
                    <Image
                        src={imageUrl}
                        alt={title}
                        width={500}  // Chiều rộng nhỏ hơn cho card
                        height={300}  // Chiều cao nhỏ hơn cho card
                        className="w-full h-auto object-contain"
                    />
                </div>
                <div className="p-6 text-center w-full">
                    <h3 className="text-2xl font-bold text-gray-800">{title}</h3>
                </div>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
                    onClick={closeModal}  // Đóng modal khi click ra ngoài
                >
                    <div
                        className="relative"
                        onClick={(e) => e.stopPropagation()}  // Ngăn không đóng modal khi click vào ảnh
                    >
                        <button
                            className="absolute top-0 right-0 text-white text-xl p-2"
                            onClick={closeModal}  // Đóng modal khi click nút "Close"
                        >
                            &times;
                        </button>
                        <Image
                            src={imageUrl}
                            alt={title}
                            width={800}  // Giới hạn chiều rộng của ảnh
                            height={450}  // Giới hạn chiều cao của ảnh
                            className="object-contain"
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default CertificateCard;
