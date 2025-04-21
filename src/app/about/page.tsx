import MainNavbar from "@/components/Layout/Navbar/MainNabar";
import Avatar from "@/components/Layout/Avatar/Avatar";
import CareerObjective from "@/components/About/CareerObjective";
import Footer from "@/components/Layout/Footer/Footer";
import About from "@/components/About/About";

export default function AboutPage() {
  return (
    <div
      className="min-h-screen flex flex-col bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/assets/background.jpg')" }}
    >
      <MainNavbar />

      <div className="pt-10 md:pl-6 flex flex-col md:flex-row items-start gap-10 flex-grow">
        {/* Căn chỉnh Avatar */}
        <div className="flex justify-center md:justify-start w-full md:w-auto">
          <Avatar />
        </div>

        {/* Căn chỉnh phần CareerObjective */}
        <div className="flex justify-center md:justify-start w-full md:w-2/3">
          <CareerObjective />
        </div>
      </div>

      {/* Đặt About dưới CareerObjective và cách Footer một khoảng */}
      <div className="mt-10 mb-16">
        <About />
      </div>

      <Footer />
    </div>
  );
}
