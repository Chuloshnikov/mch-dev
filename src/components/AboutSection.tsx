"use client"

import { aboutItemsData } from "@/utils/data";
import { motion, useMotionValue } from "framer-motion";
import AboutItem from "./AboutItem";
import { profilePic } from "@/assets";
import Image from "next/image";

const AboutSection = () => {
    const y = useMotionValue(0);

  return (
     <motion.section id="about" style={{ y }} className="py-20 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent"
          >
            About Me
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                Full-Stack Web Developer with 4+ years of experience building scalable and performant web applications.
                I specialize in React, Next.js, Node.js, and PostgreSQL/MongoDB, creating elegant solutions that drive
                business growth.
              </p>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Known for writing clean code, implementing beautiful UI/UX, and consistently contributing to team
                success. I&apos;m passionate about learning new technologies and solving complex problems.
              </p>

              <div className="flex flex-col md:flex-row gap-6 justify-between text-center w-full">
                {aboutItemsData.map((item, index) => (
                    <AboutItem key={index} title={item.title} subTitle={item.subTitle}/>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
            <div className="w-full rounded-2xl relative bg-gradient-to-br from-yellow-400/20 to-orange-500/20 p-4">
                <Image src={profilePic} width={500} height={500} alt="Profile Picture" className="w-full h-full object-cover rounded-2xl" />
                <div className="absolute top-0 left-0 bg-black/20 w-full h-full z-50 rounded-full"/>
            </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
  )
}

export default AboutSection;