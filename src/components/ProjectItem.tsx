import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import Link from "next/link";
import { Button } from "./ui/button";
import { ExternalLink } from "lucide-react";


const ProjectItem = ({ item, index }: {item: ProjectItemProps, index: number }) => {
  return (
    <motion.div
        key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
              >
                <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm h-full">
                  <CardContent className="p-6 flex flex-col justify-between h-full">
                    <div>
                        <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                        <p className="text-gray-300 mb-4">{item.description}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                        {item.tech.map((tech, techIndex) => (
                            <Badge key={techIndex} variant="secondary" className="bg-yellow-400/20 text-yellow-400">
                            {tech}
                            </Badge>
                        ))}
                        </div>
                    </div>
                  
                    <Link
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                        <Button
                        variant="outline"
                        className="cursor-pointer border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black w-full"
                        >
                          <ExternalLink className="mr-2 h-4 w-4" />
                          View Project
                        </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
  )
}

export default ProjectItem;