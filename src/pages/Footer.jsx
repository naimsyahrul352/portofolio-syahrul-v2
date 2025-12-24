import { useScrollAnimate } from "@/hooks/useScrollAnimate";

export default function Footer() {
  const { ref, visible } = useScrollAnimate(0.2);

  return (
    <footer className="relative px-6 py-20">
      <div
        ref={ref}
        className={`
          max-w-6xl mx-auto text-center
          transition-all duration-700
          ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}
        `}
      >
        <div className="footer-name">© Muhammad Syahrul Naim</div>
      </div>
    </footer>
  );
}
