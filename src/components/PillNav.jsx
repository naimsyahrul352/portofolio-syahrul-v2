export default function PillNav({ items, active, className }) {
  return (
    <nav className={className}>
      <ul className="flex items-center gap-2 relative">
        {items.map((item) => {
          const id = item.href.replace("#", "");
          const isActive = active === id;

          return (
            <li key={item.label} className="relative">
              {isActive && (
                <span
                  className="
                    absolute inset-0
                    rounded-full
                    bg-gradient-to-r from-cyan-400/30 to-purple-500/30
                    blur-md
                    -z-10
                  "
                />
              )}

              <a
                href={item.href}
                className={`
                  relative px-4 py-2 rounded-full
                  text-sm font-medium transition-all duration-300
                  ${isActive ? "text-white" : "text-white/70 hover:text-white"}
                `}
              >
                {item.label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
