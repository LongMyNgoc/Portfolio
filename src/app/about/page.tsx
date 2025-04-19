import MainNavbar from "@/components/Layout/Navbar/MainNabar";
import Avatar from "@/components/Layout/Avatar/Avatar";
import Footer from "@/components/Layout/Footer/Footer";

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

      </div>

      <Footer />
    </div>
  );
}
