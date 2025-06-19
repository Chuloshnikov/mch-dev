"use client";

import {
  Home,
  User,
  BookOpen,
  Hammer,
  MessageSquare,
} from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav
      className="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-black/30 backdrop-blur-md flex gap-3 px-4 py-2 md:px-6 md:py-3 rounded-full z-50"
    >
      <Link href="#home" className="p-3 rounded-full hover:bg-black/40 transition-colors">
        <Home className="w-5 h-5 text-orange-400 hover:text-orange-300 transition-colors" />
      </Link>
      <Link href="#about" className="p-3 rounded-full hover:bg-black/40 transition-colors">
        <User className="w-5 h-5 text-orange-400 hover:text-orange-300 transition-colors" />
      </Link>
      <Link href="#skills" className="p-3 rounded-full hover:bg-black/40 transition-colors">
        <Hammer className="w-5 h-5 text-orange-400 hover:text-orange-300 transition-colors" />
      </Link>
      <Link href="#experience" className="p-3 rounded-full hover:bg-black/40 transition-colors">
        <BookOpen className="w-5 h-5 text-orange-400 hover:text-orange-300 transition-colors" />
      </Link>
      <Link href="#contacts" className="p-3 rounded-full hover:bg-black/40 transition-colors">
        <MessageSquare className="w-5 h-5 text-orange-400 hover:text-orange-300 transition-colors" />
      </Link>
    </nav>
  );
};

export default Navbar;