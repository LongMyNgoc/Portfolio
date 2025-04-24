"use client"
import { Suspense } from "react"; // Nhập Suspense từ React
import MainNavbar from "@/components/Layout/Navbar/MainNabar";
import Footer from "@/components/Layout/Footer/Footer";
import { useSearchParams } from 'next/navigation';
import Feedback from "@/components/Projects/Feedback";

export default function FeedbackPage() {
  return (
    <div
      className="min-h-screen flex flex-col bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/assets/background.jpg')" }}
    >
      <MainNavbar />

      <div className="pt-10 md:pl-6 flex flex-col md:flex-row items-start gap-10 flex-grow mb-16">
        {/* Bọc Feedback trong Suspense */}
        <Suspense fallback={<div>Loading...</div>}>
          <FeedbackWithSearchParams />
        </Suspense>
      </div>

      <Footer />
    </div>
  );
}

// Component phụ để sử dụng useSearchParams
function FeedbackWithSearchParams() {
  const searchParams = useSearchParams();
  const name = searchParams.get('name')!;  // Lấy tham số 'name' từ URL
  
  return <Feedback name={name} />;
}
