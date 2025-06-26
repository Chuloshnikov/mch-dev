"use client"

import { projects } from "@/utils/data";
import { motion } from "framer-motion";
import ProjectItem from "./ProjectItem";


const ProjectsSection = () => {
  return (
     <section id="portfolio" className="py-20 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-center mb-18 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent py-2"
          >
            Featured Projects
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectItem key={index} index={index} item={project}/>
            ))}
          </div>
        </div>
      </section>
  )
}

export default ProjectsSection;