import MainNavbar from "@/components/Layout/Navbar/MainNabar";
import Footer from "@/components/Layout/Footer/Footer";
import Resume from "@/components/Resume/Resume";

export default function ResumePage() {
  return (
    <div
      className="min-h-screen flex flex-col bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/assets/background.jpg')" }}
    >
      <MainNavbar />

      <div className="pt-10 md:px-6 flex-grow">
        <Resume />
      </div>

      <Footer />
    </div>
  );
}
