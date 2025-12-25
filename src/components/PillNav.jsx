export default function PillNav({ items, active, className }) {
  return (
    <nav className={className}>
      <ul
        className="
          flex items-center
          gap-1 sm:gap-2
          whitespace-nowrap
        "
      >
        {items.map((item) => {
          const isActive = active === item.label;

          return (
            <li key={item.label} className="relative flex-shrink-0">
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
                  block
                  px-3 sm:px-4
                  py-1.5 sm:py-2
                  text-xs sm:text-sm
                  font-medium
                  rounded-full
                  transition-all
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
