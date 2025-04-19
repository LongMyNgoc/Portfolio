"use client";

import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

export default function Resume() {
  return (
    <div className="w-full flex flex-col items-center gap-6 py-10 px-4">
      {/* Phần chứa CV với chiều cao tự động và chiều rộng responsive */}
      <div className="w-full min-h-[80vh] h-auto shadow-md border rounded-xl overflow-auto">
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
          <Viewer fileUrl="/CV/CV_Web.pdf" />
        </Worker>
      </div>

      {/* Nút tải CV */}
      <a
        href="/CV/CV_Web.pdf"
        download="my_cv.pdf"
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition-all"
      >
        📄 Download CV
      </a>
    </div>
  );
}
