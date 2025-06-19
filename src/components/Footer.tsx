import Link from "next/link";

const Footer = () => {

  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 border-t border-gray-800 flex flex-col gap-16 items-center justify-center">
        <ul className="hidden md:flex gap-4 mt-8 text-[#f59e0b]">
            <li><Link href="#">Home</Link></li>
            |
            <li><Link href="#about">About</Link></li>
            |
            <li><Link href="#experience">Experience</Link></li>
            |
            <li><Link href="#skills">Services</Link></li>
            |
            <li><Link href="#portfolio">Portfolio</Link></li>
            |
            <li><Link href="#contacts">Contacts</Link></li>
        </ul>
        <div className="max-w-6xl mx-auto text-center mb-20">
          <p className="text-gray-400">© {currentYear} MCH. Built with Next.js, Three.js, and Framer Motion.</p>
        </div>
    </footer>
  )
}

export default Footer;