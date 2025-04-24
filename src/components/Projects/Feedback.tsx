'use client';

import React, { useState } from 'react';
import { feedbackData } from '@/data/feedbackData';
import FullscreenModal from '../Resume/FullscreenModal';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';

type FeedbackProps = {
  name: string;
};

const Feedback: React.FC<FeedbackProps> = ({ name }) => {
  const subject = `Feedback for ${name}`;
  const body = `I have some feedback regarding the project: ${name}.`;
  const mailtoLink = `mailto:nguyenphilong.dev@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  const feedbackFiles = feedbackData[name] || [];
  const [selectedPdf, setSelectedPdf] = useState<string | null>(null);

  return (
    <div className="w-full text-center mt-10 px-4">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
        <span className="text-yellow-400">{name}</span>
      </h1>

      <div className="mt-5">
        {feedbackFiles.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {feedbackFiles.map((file, index) => (
              <div
                key={index}
                onClick={() => setSelectedPdf(file)}  // Click vào để chọn PDF
                className="relative w-full h-96 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition cursor-pointer bg-white"
              >
                <div className="w-full h-full">
                  <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
                    <Viewer
                      fileUrl={file}
                      renderLoader={() => <div className="text-gray-600 p-4">Loading...</div>}
                      renderError={() => <div className="text-red-600 p-4">Failed to load PDF</div>}
                    />
                  </Worker>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="font-bold italic text-gray-600">Project chưa có feedback</div>
        )}
      </div>

      <a
        href={mailtoLink}
        className="mt-5 inline-block px-6 py-3 bg-blue-800 text-white text-sm rounded-full hover:bg-blue-500 transition"
      >
        Gửi Feedback
      </a>

      {/* Sử dụng FullscreenModal */}
      {selectedPdf && (
        <FullscreenModal fileUrl={selectedPdf} onClose={() => setSelectedPdf(null)} />
      )}
    </div>
  );
};

export default Feedback;
