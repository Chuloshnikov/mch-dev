import { motion } from "framer-motion";

interface AboutItemProps {
    title: string;
    subTitle: string;
}

const AboutItem = ({ title, subTitle }: AboutItemProps) => {
  return (
     <motion.div className="p-4 bg-gray-800/50 rounded-lg backdrop-blur-sm hover:scale-105 duration-300 w-full">
        <div className="text-3xl font-bold text-yellow-400">{title}</div>
        <div className="text-sm text-gray-400">{subTitle}</div>
    </motion.div>
  )
}

export default AboutItem;