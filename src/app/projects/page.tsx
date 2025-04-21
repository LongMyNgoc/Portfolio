import MainNavbar from "@/components/Layout/Navbar/MainNabar";
import Footer from "@/components/Layout/Footer/Footer";
import Project from "@/components/Projects/Project";

export default function ProjectPage() {
  return (
    <div
      className="min-h-screen flex flex-col bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/assets/background.jpg')" }}
    >
      <MainNavbar />

      <div className="pt-10 md:pl-6 flex flex-col md:flex-row items-start gap-10 flex-grow">
      </div>

      <div className="mb-16">
        <Project />
      </div>

      <Footer />
    </div>
  );
}
