"use client";

import { useState } from "react";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

export default function Resume() {
  const [selectedCVType, setSelectedCVType] = useState<"web" | "mobile" | "game">("web");

  const WebCV = "/CV/NguyenPhiLong_CV_Web.pdf";
  const mobileCV = "/CV/NguyenPhiLong_CV_Mobile.pdf";
  const gameCV = "/CV/NguyenPhiLong_CV_Game.pdf";

  const selectedCV =
    selectedCVType === "mobile"
      ? mobileCV
      : selectedCVType === "game"
      ? gameCV
      : WebCV;

  return (
    <div className="w-full flex flex-col items-center gap-6 py-10 px-4">
      {/* Nút chọn CV */}
      <div className="flex gap-4 mb-4 flex-wrap justify-center">
        <button
          onClick={() => setSelectedCVType("web")}
          className={`px-4 py-2 rounded-lg font-semibold transition-all ${
            selectedCVType === "web" ? "bg-blue-600 text-white" : "bg-gray-200 text-black"
          }`}
        >
          🌐 CV Web
        </button>
        <button
          onClick={() => setSelectedCVType("mobile")}
          className={`px-4 py-2 rounded-lg font-semibold transition-all ${
            selectedCVType === "mobile" ? "bg-blue-600 text-white" : "bg-gray-200 text-black"
          }`}
        >
          📱 CV Mobile
        </button>
        <button
          onClick={() => setSelectedCVType("game")}
          className={`px-4 py-2 rounded-lg font-semibold transition-all ${
            selectedCVType === "game" ? "bg-blue-600 text-white" : "bg-gray-200 text-black"
          }`}
        >
          🎮 CV Game
        </button>
      </div>

      {/* PDF Viewer */}
      <div className="w-full shadow-md border rounded-xl overflow-hidden">
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
          <div className="w-full h-full">
            <Viewer fileUrl={selectedCV} />
          </div>
        </Worker>
      </div>

      {/* Nút tải CV */}
      <a
        href={selectedCV}
        download={`NguyenPhiLong_CV_${selectedCVType}.pdf`}
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition-all"
      >
        📄 Download CV
      </a>
    </div>
  );
}
