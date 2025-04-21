import MainNavbar from "@/components/Layout/Navbar/MainNabar";
import Avatar from "@/components/Layout/Avatar/Avatar";
import Introduction from "@/components/Home/Introduction";
import Footer from "@/components/Layout/Footer/Footer";

export default function Home() {
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

        {/* Căn chỉnh phần Introduction */}
        <div className="flex justify-center md:justify-start w-full md:w-2/3 mb-16">
          <Introduction />
        </div>
      </div>
      <Footer />
    </div>
  );
}
