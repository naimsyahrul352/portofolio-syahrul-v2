import Navbar from "./components/layout/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import LiquidEther from "./components/LiquidEther";
import Projects from "./pages/Projects";
import Skill from "./pages/Skill";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";

export default function App() {
  return (
    <div className="relative min-h-screen bg-black text-white">
      {/* FIXED BACKGROUND */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <LiquidEther className="w-full h-full" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10">
        <Navbar />
        <Home />
        <About />
        <Projects />
        <Skill />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
