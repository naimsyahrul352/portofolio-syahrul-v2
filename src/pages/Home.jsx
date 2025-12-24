import GradientText from "@/components/GradientText";
import { useScrollAnimate } from "@/hooks/useScrollAnimate";
import { Github, Linkedin, Instagram } from "lucide-react";

export default function Home() {
  const { ref, visible } = useScrollAnimate(0.4);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4"
    >
      <div
        ref={ref}
        className={`
          max-w-4xl text-center
          ${visible ? "animate-fade-up" : "opacity-0"}
        `}
      >
        {/* TITLE */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
          <GradientText>Hi, I’m Muhammad Syahrul Naim</GradientText>
        </h1>

        {/* SUBTITLE */}
        <p className="text-lg sm:text-xl text-white/70 mb-6">
          Frontend Developer ● UI/UX Designer ● IT Support
        </p>

        {/* DESCRIPTION */}
        <p className="text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed">
          I specialize in crafting modern, responsive, and user-focused web
          experiences. I enjoy combining clean code with thoughtful design to
          create interfaces that are both functional and visually engaging.
        </p>

        {/* CTA BUTTONS */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <a
            href="/cv.pdf"
            className="
              px-6 py-3 rounded-full
              bg-white text-black font-medium
              transition-all
              hover:scale-105 hover:bg-white/90
            "
            download
          >
            Download CV
          </a>

          {/* SOCIAL ICONS */}
          <div className="flex justify-center gap-4">
            <a
              href="https://github.com/username"
              target="_blank"
              className="social-light group"
            >
              <Github className="w-5 h-5 text-white transition-colors group-hover:text-blue-600" />
            </a>

            <a
              href="https://linkedin.com/in/username"
              target="_blank"
              className="social-light group"
            >
              <Linkedin className="w-5 h-5 text-white transition-colors group-hover:text-blue-600" />
            </a>

            <a
              href="https://instagram.com/username"
              target="_blank"
              className="social-light group"
            >
              <Instagram className="w-5 h-5 text-white transition-colors group-hover:text-blue-600" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
