"use client"

import Scene3D from './Scene3D';
import { motion } from "framer-motion"
import { Button } from './ui/button';
import { Download, Mail } from 'lucide-react';
import FloatingSocialIcons from './FloatingSocialIcons';
import Link from 'next/link';

const HeroSection = () => {
  return (
     <section className="relative min-h-screen py-20 flex items-center justify-center">
        <div className="absolute inset-0 w-full h-full">
          <Scene3D />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center px-4"
        >
          <motion.h1
            className="text-4xl md:text-8xl font-bold py-4 mb-4 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          >
            Maksym Chuloshnikov
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-lg md:text-2xl mb-8 text-gray-300"
          >
            Full-Stack Web Developer | React, Next.js, Node.js
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <Link
            href="/docs/CV.pdf"
            >
                <Button className="cursor-pointer bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-semibold">
                    <Download className="mr-2 h-4 w-4" />
                    Download CV
                </Button>
            </Link>
            
            <Link
            href="#contacts"
            >
              <Button
              variant="outline"
              className="cursor-pointer border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black"
            >
              <Mail className="mr-2 h-4 w-4" />
              Contact Me
            </Button>
            </Link>
           
          </motion.div>
        </motion.div>
       <FloatingSocialIcons/>
      </section>
  )
}

export default HeroSection;