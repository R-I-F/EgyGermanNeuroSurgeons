import { motion } from 'framer-motion'
import { Brain, Droplets, Bone, CircleDot, Disc, Gauge, Zap } from 'lucide-react'

const scopeItems = [
  {
    id: 1,
    title: 'أورام المخ والغدة النخامية',
    sub: 'Brain Tumors & Pituitary',
    icon: Brain,
  },
  {
    id: 2,
    title: 'استسقاء المخ',
    sub: 'Hydrocephalus',
    icon: Droplets,
  },
  {
    id: 3,
    title: 'أورام العمود الفقري',
    sub: 'Spinal Tumors',
    icon: Bone,
  },
  {
    id: 4,
    title: 'أكياس المخ والعمود الفقري',
    sub: 'Brain & Spinal Cysts',
    icon: CircleDot,
  },
  {
    id: 5,
    title: 'الانزلاق الغضروفي',
    sub: 'Herniated Disc',
    icon: Disc,
  },
  {
    id: 6,
    title: 'ضيق القناة العصبية',
    sub: 'Canal Stenosis',
    icon: Gauge,
  },
  {
    id: 7,
    title: 'ألم العصب الخامس وتشنجات الوجه',
    sub: 'Trigeminal Neuralgia',
    icon: Zap,
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
}

const item = {
  hidden: { y: 16, opacity: 0 },
  show: { y: 0, opacity: 1 },
}

export function Scope() {
  return (
    <section id="cases" className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="mb-4 text-center text-2xl font-bold text-medical-navy md:text-3xl"
        >
          التخصصات المعالجة
        </motion.h2>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mx-auto mb-12 max-w-2xl text-center text-medical-navy/80"
        >
          سيتم مناظرة الحالات وإجراء الجراحات في التخصصات الآتية:
        </motion.p>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-40px' }}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {scopeItems.map((s) => (
            <motion.div
              key={s.id}
              variants={item}
              className="flex items-start gap-4 rounded-xl border border-medical-light bg-medical-light/30 p-4 transition hover:border-medical-blue/30 hover:bg-medical-light/50"
            >
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-medical-blue text-white">
                <s.icon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold text-medical-navy">{s.title}</h3>
                <p className="mt-0.5 text-sm text-medical-gray">{s.sub}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
