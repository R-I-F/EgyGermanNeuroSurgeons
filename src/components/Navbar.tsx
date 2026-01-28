import { motion } from 'framer-motion'

export function Navbar() {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-medical-light shadow-sm"
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-center px-4 py-3 md:px-6">
        <a href="#" className="flex-shrink-0" aria-label="عيادات مصرية التخصصية">
          <img
            src="/logo.png"
            alt="عيادات مصرية التخصصية"
            className="h-10 w-auto object-contain md:h-12"
          />
        </a>
      </nav>
    </motion.header>
  )
}
