import ProfileCard from "../components/ProfileCard";
import mePhoto from "@/assets/img/profil.png";
import SplitText from "@/components/SplitText";
import { useScrollAnimate } from "@/hooks/useScrollAnimate";

export default function About() {
  const { ref, visible } = useScrollAnimate(0.3);

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-4 py-24"
    >
      <div
        ref={ref}
        className={`
          w-full max-w-5xl
          rounded-3xl
          bg-white/5 backdrop-blur-md
          border border-white/10
          p-8 sm:p-12
          transition-all duration-700
          ${visible ? "animate-fade-up" : "opacity-0"}
        `}
      >
        {/* TITLE */}
        <h2 className="text-3xl font-bold text-center mb-12">
          <SplitText
            key={visible ? "title-on" : "title-off"}
            text="About Me"
            active={visible}
            delay={0.05}
          />
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
          {/* PHOTO */}
          <div className="flex justify-center">
            <ProfileCard
              image={mePhoto}
              name="Muhammad Syahrul Naim"
              role="Frontend Developer"
            />
          </div>

          {/* TEXT */}
          <div className="md:col-span-2 space-y-5 text-white/80 leading-relaxed">
            <h3 className="text-2xl font-semibold text-white">
              <SplitText
                key={visible ? "name-on" : "name-off"}
                text="Muhammad Syahrul Naim"
                active={visible}
                delay={0.06}
              />
            </h3>

            <p className="text-white/80 text-justify leading-relaxed">
              <SplitText
                key={visible ? "p1-on" : "p1-off"}
                text="I am a Frontend Developer with a strong passion for building modern, responsive, and user-centered web interfaces. I focus on translating design concepts into clean, maintainable, and high-performance code while ensuring a seamless user experience across all devices."
                active={visible}
                delay={0.02}
              />
            </p>

            <p className="mt-4 text-white/80 text-justify leading-relaxed">
              <SplitText
                key={visible ? "p2-on" : "p2-off"}
                text="My main expertise lies in React, modern JavaScript, and UI styling using Tailwind CSS. I enjoy working closely with UI/UX principles, paying attention to layout, spacing, color harmony, and micro-interactions that make a product feel intuitive and polished."
                active={visible}
                delay={0.025}
              />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
