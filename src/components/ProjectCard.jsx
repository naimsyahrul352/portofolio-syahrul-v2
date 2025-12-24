import { motion } from "framer-motion";
import { useRef } from "react";

export default function ProjectCard({ project, index }) {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = -(y - centerY) / 18;
    const rotateY = (x - centerX) / 18;

    card.style.transform = `
      perspective(1200px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      translateY(-8px)
    `;
  };

  const resetTilt = () => {
    const card = cardRef.current;
    card.style.transform = `
      perspective(1200px)
      rotateX(0deg)
      rotateY(0deg)
      translateY(0)
    `;
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -80 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="relative"
    >
      {/* SHADOW */}
      <div className="absolute inset-x-6 -bottom-6 h-6 bg-black/50 blur-2xl rounded-full" />

      {/* CARD */}
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={resetTilt}
        className="
          relative
          rounded-3xl
          bg-gradient-to-br from-white/10 to-white/5
          backdrop-blur-xl
          p-6
          flex flex-col
          transition-transform duration-300 ease-out
        "
      >
        {/* IMAGE */}
        <div className="aspect-[10/8] rounded-2xl overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
          />
        </div>

        {/* CONTENT */}
        <div className="flex flex-col mt-5 flex-1">
          <h3 className="text-xl font-semibold text-white relative">
            {project.title}
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-cyan-400 to-purple-500 group-hover:w-full transition-all duration-500" />
          </h3>

          <p className="text-white/70 text-sm mt-2 leading-relaxed">
            {project.description}
          </p>

          {/* TECH */}
          <div className="flex flex-wrap gap-2 mt-4">
            {project.tech.map((tech, i) => (
              <span
                key={i}
                className="
                  px-3 py-1 text-xs rounded-full
                  bg-gradient-to-r from-purple-500/20 to-cyan-500/20
                  border border-white/20
                  text-white
                "
              >
                {tech}
              </span>
            ))}
          </div>

          {/* BUTTONS */}
          <div className="mt-5 flex gap-4">
            <a
              href={project.demo}
              className="
                flex-1 py-2 rounded-xl text-center font-medium
                bg-white text-black
                hover:bg-cyan-400 hover:shadow-[0_0_25px_rgba(34,211,238,0.6)]
                transition-all
              "
            >
              Demo
            </a>
            <a
              href={project.code}
              className="
                flex-1 py-2 rounded-xl text-center font-medium
                border border-white/30 text-white
                hover:bg-white hover:text-black
                hover:shadow-[0_0_25px_rgba(255,255,255,0.4)]
                transition-all
              "
            >
              Code
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
