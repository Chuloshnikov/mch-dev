"use client"

import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Mail, Phone } from "lucide-react";
import Link from "next/link";
import ContactForm from "./ContactForm";

const ContactsSection = () => {
  return (
    <section id="contacts" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center flex flex-col gap-8">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent py-2"
          >
            Let&apos;s Work Together
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300"
          >
            Ready to bring your ideas to life? Let&apos;s discuss your next project.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
            href="mailto:maks447@ukr.net"
            >
                <Button className="cursor-pointer bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-semibold text-lg px-8 py-3">
                    <Mail className="mr-2 h-5 w-5" />
                    maks447@ukr.net
                </Button>
            </Link>
           <Link
           href="https://wa.me/380730452115" target="_blank" rel="noopener noreferrer"
           >
                <Button
                variant="outline"
                className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black text-lg px-8 py-3"
                >
                    <Phone className="mr-2 h-5 w-5" />
                    +380 730 452 115 (WhatsApp)
                </Button>
           </Link>
          </motion.div>
           <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <ContactForm/>
          </motion.div>
          
        </div>
      </section>
  )
}

export default ContactsSection;