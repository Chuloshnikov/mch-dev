"use client"

import { projects } from "@/utils/data";
import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import { ExternalLink } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

const ProjectsSection = () => {
  return (
     <section className="py-20 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent"
          >
            Featured Projects
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
              >
                <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm h-full">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-3">{project.title}</h3>
                    <p className="text-gray-300 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="bg-yellow-400/20 text-yellow-400">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <Button
                      variant="outline"
                      className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black w-full"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Project
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default ProjectsSection;