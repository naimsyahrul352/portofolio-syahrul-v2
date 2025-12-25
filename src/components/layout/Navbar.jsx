import { useEffect, useState } from "react";
import PillNav from "@/components/PillNav";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skill", href: "#skill" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-40% 0px -45% 0px",
        threshold: 0.1,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed top-6 inset-x-0 z-50 flex justify-center">
      <PillNav
        items={navItems}
        active={active}
        className="
          relative
          px-6 py-3
          rounded-full
          backdrop-blur-xl
          bg-white/10
          border border-white/20
          shadow-[0_0_25px_rgba(56,189,248,0.15)]
        "
      />
    </header>
  );
}
