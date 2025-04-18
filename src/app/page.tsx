import MainNavbar from "@/components/Layout/Navbar/MainNabar";
import Avatar from "@/components/Layout/Avatar/Avatar";

export default function Home() {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/assets/background.jpg')" }}
    >
      <MainNavbar />
      
      {/* Container dưới navbar */}
      <div className="pt-20 pl-6"> {/* 👈 tạo khoảng cách từ top xuống */}
        <Avatar />
        {/* Các nội dung khác */}
      </div>
    </div>
  );
}
