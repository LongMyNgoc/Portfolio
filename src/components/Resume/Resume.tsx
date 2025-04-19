"use client";

import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

export default function Resume() {
  return (
    <div className="w-full flex flex-col items-center gap-6 py-10 px-4">
      {/* Responsive container */}
      <div className="w-full shadow-md border rounded-xl overflow-hidden">
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
          <div className="w-full h-full">
            <Viewer fileUrl="/CV/NguyenPhiLong_CV_Web.pdf" />
          </div>
        </Worker>
      </div>

      {/* Nút tải CV */}
      <a
        href="/CV/NguyenPhiLong_CV_Web.pdf"
        download="NguyenPhiLong_CV.pdf"
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition-all"
      >
        📄 Download CV
      </a>
    </div>
  );
}
