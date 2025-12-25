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
  const [active, setActive] = useState("Home");

  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector(item.href))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            const current = navItems.find((item) => item.href === `#${id}`);
            if (current) setActive(current.label);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed top-4 inset-x-0 z-50 px-3">
      <div className="flex justify-center">
        <PillNav
          items={navItems}
          active={active}
          className="
            max-w-full
            overflow-x-auto
            scrollbar-hide

            px-2 sm:px-4
            py-2

            rounded-full
            backdrop-blur-xl
            bg-white/10
            border border-white/20
            shadow-[0_0_25px_rgba(56,189,248,0.15)]
          "
        />
      </div>
    </header>
  );
}
