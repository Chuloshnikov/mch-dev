"use client"

import { Badge } from './ui/badge';
import { Card, CardContent } from './ui/card';
import { Code, Database, Server } from 'lucide-react';
import { motion } from "framer-motion";
import { skills } from '@/utils/data';

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent"
          >
            Technical Skills
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm h-full">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Code className="h-8 w-8 text-yellow-400 mr-3" />
                    <h3 className="text-xl font-semibold text-white">Frontend</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skills.frontend.map((skill, index) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ scale: 1.1 }}
                      >
                        <Badge variant="secondary" className="bg-yellow-400/20 text-yellow-400 hover:bg-yellow-400/30">
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm h-full">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Server className="h-8 w-8 text-yellow-400 mr-3" />
                    <h3 className="text-xl font-semibold text-white">Backend</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skills.backend.map((skill, index) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ scale: 1.1 }}
                      >
                        <Badge variant="secondary" className="bg-yellow-400/20 text-yellow-400 hover:bg-yellow-400/30">
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm h-full">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Database className="h-8 w-8 text-yellow-400 mr-3" />
                    <h3 className="text-xl font-semibold text-white">Tools & Others</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skills.tools.map((skill, index) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ scale: 1.1 }}
                      >
                        <Badge variant="secondary" className="bg-yellow-400/20 text-yellow-400 hover:bg-yellow-400/30">
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
  )
}

export default SkillsSection;