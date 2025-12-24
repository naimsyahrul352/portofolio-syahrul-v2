import { useRef } from "react";

export default function ProfileCard({ image, name, role }) {
  const cardRef = useRef(null);

  const handleMove = (e) => {
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = -(y - centerY) / 18;
    const rotateY = (x - centerX) / 18;

    card.style.transform = `
      perspective(1000px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      translateY(-6px)
    `;

    card.style.setProperty("--x", `${x}px`);
    card.style.setProperty("--y", `${y}px`);
  };

  const reset = () => {
    const card = cardRef.current;
    card.style.transform = `
      perspective(1000px)
      rotateX(0deg)
      rotateY(0deg)
      translateY(0)
    `;
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      className="
        relative
        w-64 h-80
        rounded-3xl
        overflow-hidden
        bg-white/10
        border border-white/20
        backdrop-blur-md
        transition-transform duration-300
      "
      style={{
        transformStyle: "preserve-3d",
      }}
    >
      {/* IMAGE */}
      <img
        src={image}
        alt={name}
        className="absolute inset-0 w-full h-full object-cover"
        style={{ transform: "translateZ(30px)" }}
      />

      {/* LIGHT SWEEP */}
      <div
        className="
          absolute inset-0
          pointer-events-none
        "
        style={{
          background: `
            radial-gradient(
              400px circle at var(--x) var(--y),
              rgba(255,255,255,0.35),
              transparent 60%
            )
          `,
        }}
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

      {/* TEXT */}
      <div
        className="absolute bottom-0 w-full p-5"
        style={{ transform: "translateZ(40px)" }}
      >
        <h3 className="text-lg font-semibold text-white">{name}</h3>
        <p className="text-sm text-white/70">{role}</p>
      </div>
    </div>
  );
}
