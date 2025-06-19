const Footer = () => {

  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">© {currentYear} MCH. Built with Next.js, Three.js, and Framer Motion.</p>
        </div>
    </footer>
  )
}

export default Footer;