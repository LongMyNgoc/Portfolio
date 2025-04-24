import React from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';

type FullscreenModalProps = {
  fileUrl: string;
  onClose: () => void;
};

const FullscreenModal: React.FC<FullscreenModalProps> = ({ fileUrl, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4">
      <div className="relative w-full h-full max-w-6xl max-h-[95vh] bg-white rounded-lg overflow-hidden shadow-xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-red-600 hover:bg-red-500 text-white font-semibold px-3 py-1 rounded z-50"
        >
          ✖ Đóng
        </button>
        <div className="w-full h-full">
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
            <Viewer
              fileUrl={fileUrl}
              renderLoader={() => <div className="text-gray-600 p-4">Loading...</div>}
              renderError={() => <div className="text-red-600 p-4">Failed to load PDF</div>}
            />
          </Worker>
        </div>
      </div>
    </div>
  );
};

export default FullscreenModal;
