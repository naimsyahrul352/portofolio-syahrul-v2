import LiquidEther from "@/components/LiquidEther";
import GradientText from "@/components/GradientText";
import { Github, Linkedin, Instagram } from "lucide-react";

export default function Home() {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <LiquidEther />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center px-4">
        <div className="text-center animate-slide-down max-w-3xl">
          {/* NAME */}
          <GradientText
            className="
              animate-gradient
              text-3xl
              sm:text-4xl
              md:text-5xl
              font-bold
              tracking-tight
            "
            gradient="linear-gradient(90deg, #60a5fa, #a78bfa, #f472b6)"
          >
            Hi, I’m Muhammad Syahrul Naim
          </GradientText>

          {/* ROLE */}
          <p className="mt-4 text-zinc-300 text-base sm:text-lg">
            Frontend Developer ● UI/UX Designer ● IT Support
          </p>

          {/* DESCRIPTION */}
          <p className="mt-6 text-zinc-400 max-w-xl mx-auto">
            I create modern, responsive, and user-focused web interfaces with a
            strong attention to usability, performance, and clean design.
          </p>

          {/* BUTTONS */}
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            {/* Download CV */}
            <a
              href="/cv.pdf"
              download
              className="
                px-6 py-3 rounded-full
                bg-white text-black font-medium
                hover:bg-zinc-200
                transition
              "
            >
              Download CV
            </a>

            {/* Social Icons */}
            <div className="flex gap-3">
              <a
                href="https://github.com/username"
                target="_blank"
                className="p-3 rounded-full border border-white/20 hover:bg-white/10 transition"
              >
                <Github size={20} />
              </a>

              <a
                href="https://linkedin.com/in/username"
                target="_blank"
                className="p-3 rounded-full border border-white/20 hover:bg-white/10 transition"
              >
                <Linkedin size={20} />
              </a>

              <a
                href="https://instagram.com/username"
                target="_blank"
                className="p-3 rounded-full border border-white/20 hover:bg-white/10 transition"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
