"use client"

import { experience } from "@/utils/data";
import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import { Badge } from "@/components/ui/badge"
import { Check } from "lucide-react";

const ExperienceSection = () => {
  return (
     <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent"
          >
            Work Experience
          </motion.h2>

          <div className="space-y-8">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-1">{exp.title}</h3>
                        <p className="text-yellow-400 font-medium">{exp.company}</p>
                      </div>                 
                      <Badge variant="outline" className="border-yellow-400 text-yellow-400 w-fit mt-2 md:mt-0">
                        {exp.period}
                      </Badge>
                    </div>
                    <ul className="text-gray-300">
                        {exp.description.map((item, index) => (
                            <li key={index} className="flex gap-2 items-center">
                               <Check className="text-yellow-400 hidden md:block"/> {item}
                            </li>
                        ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default ExperienceSection;