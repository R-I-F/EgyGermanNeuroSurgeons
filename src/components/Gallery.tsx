import { motion } from 'framer-motion'

const images = [
  { src: '/surgery-1.jpg', alt: 'تعاون جراحي في غرفة العمليات' },
  { src: '/surgery-2.jpg', alt: 'تعاون جراحي في غرفة العمليات' },
  { src: '/surgery-3.jpg', alt: 'تعاون جراحي في غرفة العمليات' },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
}

const item = {
  hidden: { y: 24, opacity: 0 },
  show: { y: 0, opacity: 1 },
}

export function Gallery() {
  return (
    <section className="bg-medical-light/30 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="mb-10 text-center text-lg font-semibold text-medical-navy md:text-xl"
        >
          تعاون مصري ألماني لتقديم أدق الجراحات العالمية
        </motion.p>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-40px' }}
          className="grid gap-4 md:grid-cols-3"
        >
          {images.map((img, i) => (
            <motion.div
              key={img.src}
              variants={item}
              className="overflow-hidden rounded-xl border border-medical-light bg-white shadow-md"
            >
              <div className="aspect-[4/3] overflow-hidden bg-medical-light">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="h-full w-full object-cover transition hover:scale-105"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
