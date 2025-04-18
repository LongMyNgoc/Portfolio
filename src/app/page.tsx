import MainNavbar from "@/components/Layout/Navbar/MainNabar";
import Avatar from "@/components/Layout/Avatar/Avatar";
import Introduction from "@/components/Home/Introduction";
import Footer from "@/components/Layout/Footer/Footer";

export default function Home() {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/assets/background.jpg')" }}
    >
      <MainNavbar />

      <div className="pt-20 pl-6 flex flex-col md:flex-row items-start gap-10">
        <Avatar />
        <Introduction />
      </div>
      <Footer />
    </div>
  );
}
