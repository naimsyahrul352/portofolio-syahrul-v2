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
    <div className="relative min-h-screen bg-black text-white overflow-x-hidden">
      {/* FIXED BACKGROUND */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <LiquidEther />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 overflow-x-hidden">
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
