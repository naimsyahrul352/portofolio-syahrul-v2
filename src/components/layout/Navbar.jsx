import PillNav from "@/components/PillNav";
import logo from "@/assets/img/logo.png";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skill", href: "#skill" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="fixed top-6 inset-x-0 z-50 flex justify-center">
      <PillNav
        logo={logo}
        items={navItems}
        className="
          bg-transparent
    border-none
    shadow-none
    font-semibold
        "
      />
    </header>
  );
}
