import { useScrollAnimate } from "@/hooks/useScrollAnimate";

export default function Footer() {
  const { ref, visible } = useScrollAnimate(0.2);

  return (
    <footer className="relative px-4 py-6 sm:py-8">
      <div
        ref={ref}
        className={`
          max-w-6xl mx-auto text-center
          transition-all duration-700
          ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
        `}
      >
        <p
          className="
            text-xs sm:text-sm
            font-normal
            text-white/50
            tracking-wide
          "
        >
          © 2025 · Muhammad Syahrul Naim
        </p>
      </div>
    </footer>
  );
}
