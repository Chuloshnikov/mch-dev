import { motion } from "framer-motion";
import Linkedin from "./svg/Linkedin";
import Github from "./svg/Github";
import Mail from "./svg/Mail";

const FloatingSocialIcons = () => {
  return (
     <motion.div
          className="fixed hidden sm:inline left-8 top-1/2 transform -translate-y-1/2 z-20 space-y-4"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <motion.a
            href="https://github.com/Chuloshnikov"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: 360 }}
            className="block p-3 bg-gray-800 rounded-full hover:bg-yellow-400 hover:text-black transition-colors"
          >
            <Github />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/maksym-chuloshnikov-ba9a0283/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: 360 }}
            className="block p-3 bg-gray-800 rounded-full hover:bg-yellow-400 hover:text-black transition-colors"
          >
            <Linkedin />
          </motion.a>
          <motion.a
            href="mailto:maks447@ukr.net"
            whileHover={{ scale: 1.2, rotate: 360 }}
            className="block p-3 bg-gray-800 rounded-full hover:bg-yellow-400 hover:text-black transition-colors"
          >
            <Mail />
          </motion.a>
        </motion.div>
  )
}

export default FloatingSocialIcons;
