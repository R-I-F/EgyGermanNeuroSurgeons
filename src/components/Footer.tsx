import { motion } from 'framer-motion'
import { Phone, MapPin, Facebook } from 'lucide-react'

const PHONE = '01015558155'
const FACEBOOK_URL = 'https://www.facebook.com/p/Egyptian-German-Neurosurgeons-100067418503870/'
const ADDRESS = '٣٠ شارع الدقي، الدقي، الجيزة، مصر'

export function Footer() {
  return (
    <footer id="contact" className="bg-medical-navy py-16 text-white md:py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <motion.div
          initial={{ y: 24, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-2xl font-bold md:text-3xl">احجز كشفك التحضيري الآن</h2>
          <p className="mt-2 text-medical-light/80">
            تواصل معنا للحجز أو الاستفسار
          </p>

          <a
            href={`tel:${PHONE}`}
            className="mt-8 inline-flex items-center gap-3 text-xl font-semibold text-white underline decoration-white/50 underline-offset-4 transition hover:decoration-white"
          >
            <Phone className="h-6 w-6" aria-hidden />
            {PHONE}
          </a>

          <div className="mt-8 flex flex-col items-center gap-2 text-medical-light/80">
            <div className="flex items-center justify-center gap-2">
              <MapPin className="h-5 w-5 flex-shrink-0" aria-hidden />
              <span>العنوان: {ADDRESS}</span>
            </div>
          </div>

          <a
            href={FACEBOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 text-white underline decoration-white/50 underline-offset-4 transition hover:decoration-white"
          >
            <Facebook className="h-5 w-5" aria-hidden />
            <span>صفحة جراحي المخ والأعصاب المصريين والألمان على فيسبوك</span>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 border-t border-white/20 pt-8 text-center text-sm text-white/70"
        >
          <p>© {new Date().getFullYear()} عيادات مصرية التخصصية. جميع الحقوق محفوظة.</p>
        </motion.div>
      </div>
    </footer>
  )
}
