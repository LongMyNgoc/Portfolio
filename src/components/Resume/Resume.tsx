"use client";

import { useState } from "react";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

export default function Resume() {
  const [isMobileCV, setIsMobileCV] = useState(false);

  const WebCV = "/CV/NguyenPhiLong_CV_Web.pdf";
  const mobileCV = "/CV/NguyenPhiLong_CV_Mobile.pdf"; // file này bạn cần có trong thư mục public

  const selectedCV = isMobileCV ? mobileCV : WebCV;

  return (
    <div className="w-full flex flex-col items-center gap-6 py-10 px-4">
      {/* Nút chuyển đổi CV */}
      <div className="flex gap-4 mb-4">
        <button
          onClick={() => setIsMobileCV(false)}
          className={`px-4 py-2 rounded-lg font-semibold transition-all ${
            !isMobileCV ? "bg-blue-600 text-white" : "bg-gray-200 text-black"
          }`}
        >
          🌐 CV Web
        </button>
        <button
          onClick={() => setIsMobileCV(true)}
          className={`px-4 py-2 rounded-lg font-semibold transition-all ${
            isMobileCV ? "bg-blue-600 text-white" : "bg-gray-200 text-black"
          }`}
        >
          📱 CV Mobile
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
        download="NguyenPhiLong_CV.pdf"
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition-all"
      >
        📄 Download CV
      </a>
    </div>
  );
}
