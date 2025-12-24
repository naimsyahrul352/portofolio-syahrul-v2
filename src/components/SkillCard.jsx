import { useRef } from "react";

export default function SkillCard({ skill, index, active }) {
  const cardRef = useRef(null);

  const directions = [
    "translate-x-24",
    "-translate-x-24",
    "translate-y-24",
    "-translate-y-24",
  ];
  const from = directions[index % directions.length];

  const handleMove = (e) => {
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = -(y / rect.height - 0.5) * 20;
    const rotateY = (x / rect.width - 0.5) * 20;

    card.style.transform = `
      perspective(1000px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      translateZ(18px)
      scale(1.08)
    `;
  };

  const handleDown = () => {
    cardRef.current.style.transform += " scale(0.97)";
  };

  const reset = () => {
    cardRef.current.style.transform =
      "perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0) scale(1)";
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      onMouseDown={handleDown}
      onMouseUp={reset}
      className={`
        relative
        w-28 h-28
        rounded-2xl
        bg-white/10 backdrop-blur
        border border-white/20
        flex flex-col items-center justify-center
        text-white
        cursor-pointer
        transition-transform duration-300 ease-out
        animate-float

        ${
          active
            ? "opacity-100 translate-x-0 translate-y-0"
            : `opacity-0 ${from}`
        }
      `}
      style={{
        animationDelay: `${index * 0.12}s`,
        transformStyle: "preserve-3d",
      }}
    >
      {/* SHADOW DEPTH */}
      <div className="absolute inset-0 rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.45)] -z-10" />

      {/* ICON */}
      <img
        src={skill.image}
        alt={skill.name}
        className="w-12 h-12 object-contain mb-2"
        draggable={false}
        style={{ transform: "translateZ(25px)" }}
      />

      {/* NAME */}
      <span
        className="text-xs font-medium text-center"
        style={{ transform: "translateZ(18px)" }}
      >
        {skill.name}
      </span>
    </div>
  );
}
