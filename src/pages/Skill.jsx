import { skills } from "@/data/skills";
import SkillCard from "@/components/SkillCard";
import { useScrollAnimate } from "@/hooks/useScrollAnimate";

export default function Skill() {
  const { ref, visible } = useScrollAnimate(0.3);

  return (
    <section
      id="skill"
      className="min-h-screen px-6 py-24 flex items-center justify-center"
    >
      <div
        ref={ref}
        className={`w-full max-w-7xl transition-all duration-700
          ${visible ? "scale-100 opacity-100" : "scale-90 opacity-0"}
        `}
      >
        {/* TITLE */}
        <h2 className="text-3xl font-bold text-center text-white mb-16">
          Skills
        </h2>

        {/* GRID */}
        <div
          className="
            grid
            grid-cols-2
            sm:grid-cols-3
            md:grid-cols-5
            lg:grid-cols-7
            gap-8
            justify-items-center
          "
        >
          {skills.map((skill, index) => (
            <SkillCard
              key={skill.id}
              skill={skill}
              index={index}
              active={visible}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
