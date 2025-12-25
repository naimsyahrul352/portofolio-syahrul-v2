import GradientText from "@/components/GradientText";
import { useScrollAnimate } from "@/hooks/useScrollAnimate";
import { Github, Linkedin, Instagram } from "lucide-react";

export default function Home() {
  const { ref, visible } = useScrollAnimate(0.35);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 pt-20 sm:pt-24"
    >
      <div
        ref={ref}
        className={`
          w-full max-w-4xl
          flex flex-col items-center justify-center
          text-center
          transition-all duration-700
          ${visible ? "opacity-100" : "opacity-0"}
        `}
      >
        {/* TITLE */}
        <h1
          className={`
            text-3xl sm:text-4xl md:text-5xl font-bold mb-6
            ${visible ? "animate-slide-down" : ""}
          `}
        >
          <GradientText className="animate-gradient">
            Hi, I’m Muhammad Syahrul Naim
          </GradientText>
        </h1>

        {/* TYPEWRITER SUBTITLE */}
        <div className="mb-6 max-w-fit mx-auto">
          {visible && (
            <p className="text-lg sm:text-xl text-white/80 typewriter">
              Frontend Developer ● UI/UX Designer ● IT Support
            </p>
          )}
        </div>

        {/* DESCRIPTION */}
        <p
          className={`
            text-white/60 max-w-2xl leading-relaxed mb-10
            ${visible ? "animate-fade-up" : ""}
          `}
          style={{ animationDelay: "0.2s" }}
        >
          I specialize in crafting modern, responsive, and user-focused web
          experiences. I enjoy combining clean code with thoughtful design to
          create interfaces that are both functional and visually engaging.
        </p>

        {/* CTA + SOCIAL */}
        <div
          className={`
            flex flex-col items-center gap-6
            ${visible ? "animate-fade-up" : ""}
          `}
          style={{ animationDelay: "0.35s" }}
        >
          {/* BUTTON */}
          <a
            href="/CV_Muhammad_Syahrul_Naim.pdf"
            download
            className="
              px-7 py-3 rounded-full
              bg-white text-black font-semibold
              transition-all duration-300
              hover:scale-105
              hover:shadow-[0_0_25px_rgba(255,255,255,0.6)]
            "
          >
            Download CV
          </a>

          {/* SOCIAL ICONS */}
          <div className="flex gap-4">
            <a
              href="https://github.com/naimsyahrul352"
              target="_blank"
              className="social-glow animate-float"
            >
              <Github className="w-5 h-5 text-white transition-colors" />
            </a>

            <a
              href="https://linkedin.com/in/m-syahrul-naim"
              target="_blank"
              className="social-glow animate-float"
              style={{ animationDelay: "0.2s" }}
            >
              <Linkedin className="w-5 h-5 text-white transition-colors" />
            </a>

            <a
              href="https://instagram.com/syahrul__nm"
              target="_blank"
              className="social-glow animate-float"
              style={{ animationDelay: "0.4s" }}
            >
              <Instagram className="w-5 h-5 text-white transition-colors" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
