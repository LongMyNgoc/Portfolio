"use client"
import MainNavbar from "@/components/Layout/Navbar/MainNabar";
import Footer from "@/components/Layout/Footer/Footer";
import { useSearchParams } from 'next/navigation';
import Feedback from "@/components/Projects/Feedback";

export default function FeedbackPage() {
  const searchParams = useSearchParams();
  const name = searchParams.get('name')!;
  return (
    <div
      className="min-h-screen flex flex-col bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/assets/background.jpg')" }}
    >
      <MainNavbar />

      <div className="pt-10 md:pl-6 flex flex-col md:flex-row items-start gap-10 flex-grow mb-16">
      <Feedback name={name} />
      </div>

      <Footer />
    </div>
  );
}
