import { motion } from 'framer-motion'

export function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-gradient-to-b from-medical-light/50 via-white to-medical-light/30 pt-24 pb-16 md:pt-28 md:pb-24"
    >
      {/* Subtle medical pattern overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0L30 60M0 30L60 30' stroke='%230f2942' stroke-width='1' fill='none'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative mx-auto max-w-4xl px-4 text-center md:px-6">
        <motion.h1
          initial={{ y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl font-bold leading-tight text-medical-navy md:text-4xl lg:text-5xl"
        >
          زيارة الخبير الألماني البروفيسور هنري شرودر
        </motion.h1>

        <motion.p
          initial={{ y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 text-xl font-semibold text-medical-blue md:text-2xl"
        >
          لعيادات مصرية التخصصية
        </motion.p>

        <motion.div
          initial={{ y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-medical-navy px-5 py-2.5 text-white"
        >
          <span className="text-sm font-medium md:text-base">من 10 إلى 14 فبراير 2026</span>
        </motion.div>

      </div>
    </section>
  )
}
