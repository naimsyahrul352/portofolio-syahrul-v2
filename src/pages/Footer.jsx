import { useScrollAnimate } from "@/hooks/useScrollAnimate";

export default function Footer() {
  const { ref, visible } = useScrollAnimate(0.2);

  return (
    <footer className="relative px-6 py-16">
      <div
        ref={ref}
        className={`
          max-w-6xl mx-auto text-center
          transition-all duration-700
          ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
        `}
      >
        <p className="footer-text">© 2025 | Muhammad Syahrul Naim</p>
      </div>
    </footer>
  );
}
