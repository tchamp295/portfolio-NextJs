import About from "./components/About";
import AboutSection from "./components/AboutSection";
import AchievementsSection from "./components/AchievementsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import ProjectsSection from "./components/ProjectsSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]  ">
      <Navbar/>
      <div className="container mt-24 mx-auto px-5 py-4">
        <HeroSection />  
        <About/>
        
        <ProjectsSection/>
        <ContactSection/>
      </div>
        <Footer/>
    </main>
  );
}
