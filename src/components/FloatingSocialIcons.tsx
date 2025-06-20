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

<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-linkedin-icon lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>