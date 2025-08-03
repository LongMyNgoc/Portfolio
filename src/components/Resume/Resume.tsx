"use client";

import Image from "next/image";

export default function Resume() {
  const CVImage = "/CV/NguyenPhiLong_CV_Web.png";
  const WebCV = "/CV/NguyenPhiLong_CV_Web.pdf";

  return (
    <div className="w-full flex flex-col items-center gap-6 py-10 px-4">
      {/* Hiển thị ảnh CV */}
      <div className="w-full max-w-4xl shadow-md border rounded-xl overflow-hidden">
        <Image
          src={CVImage}
          alt="Nguyen Phi Long CV"
          width={1000}
          height={1414}
          layout="responsive"
          className="rounded-xl"
          priority
        />
      </div>

      {/* Nút tải CV PDF */}
      <a
        href={WebCV}
        download="NguyenPhiLong_CV_Web.pdf"
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition-all"
      >
        📄 Download CV (PDF)
      </a>
    </div>
  );
}
