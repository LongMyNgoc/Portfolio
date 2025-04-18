import MainNavbar from "@/components/Layout/Navbar/MainNabar";
import Avatar from "@/components/Layout/Avatar/Avatar";
import Introduction from "@/components/Home/Introduction";
import Footer from "@/components/Layout/Footer/Footer";

export default function Home() {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: "url('/assets/background.jpg')" }}
    >
      <MainNavbar />

      <div className="pt-20 pl-6 flex flex-col md:flex-row items-start gap-10">
        <Avatar />
        <Introduction />
      </div>

      {/* Đảm bảo footer không bị che mất nội dung */}
      <div className="mt-24">  {/* Thêm không gian dưới cùng để footer không che mất nội dung */}
      <Footer />
      </div> 
    </div>
  );
}
