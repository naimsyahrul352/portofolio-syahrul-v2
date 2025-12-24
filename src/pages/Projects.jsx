import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen px-6 py-24">
      {/* TITLE */}
      <motion.div
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.6 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="max-w-7xl mx-auto mb-16 text-center"
      >
        <h2 className="text-4xl font-bold text-white tracking-wide relative inline-block">
          Projects
          <span className="block h-[3px] w-1/2 mx-auto mt-3 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full" />
        </h2>
      </motion.div>

      {/* GRID */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
