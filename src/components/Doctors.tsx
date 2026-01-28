import { motion } from 'framer-motion'

const expert = {
  id: 'expert',
  image: '/henry-profile.jpg',
  name: 'البروفيسور الألماني هنري شرودر',
  role: 'رئيس قسم جراحة المخ والأعصاب بجامعة جرايسفالد بألمانيا',
  highlights: [
    'رئيس الاتحاد العالمي لجراحي مناظير المخ والأعصاب (IFNE)',
    'خبرة أكثر من 30 عاماً',
    'أجرى أكثر من 5000 جراحة دقيقة ناجحة',
  ],
}

const host = {
  id: 'host',
  image: '/ihab-conf.jpg',
  name: 'الأستاذ الدكتور إيهاب الرفاعي',
  role: 'أستاذ جراحة المخ والأعصاب بجامعة القاهرة',
  highlights: [
    'المشرف على العيادات التحضيرية',
    'عضو الجمعية الألمانية لجراحة المخ والأعصاب',
    'استشاري بمستشفى مصر الدولي',
    'خبرة أكثر من 3000 جراحة دقيقة',
  ],
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
}

const item = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1 },
}

function DoctorCard({
  id,
  image,
  name,
  role,
  highlights,
}: {
  id: string
  image: string
  name: string
  role: string
  highlights: string[]
}) {
  return (
    <motion.article
      id={id}
      variants={item}
      className="flex flex-col overflow-hidden rounded-2xl border border-medical-light bg-white shadow-lg transition hover:shadow-xl"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-medical-light">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-medical-navy/60 to-transparent" />
        <div className="absolute bottom-0 right-0 left-0 p-4 text-white">
          <h3 className="text-lg font-bold md:text-xl">{name}</h3>
          <p className="mt-1 text-sm opacity-90">{role}</p>
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <ul className="flex flex-1 flex-col gap-2">
          {highlights.map((h) => (
            <li key={h} className="flex items-start gap-2 text-medical-navy/90">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent-gold" />
              <span className="text-sm md:text-base">{h}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.article>
  )
}

export function Doctors() {
  return (
    <section className="bg-medical-light/30 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="mb-12 text-center text-2xl font-bold text-medical-navy md:text-3xl"
        >
          الخبراء
        </motion.h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-50px' }}
          className="grid gap-8 md:grid-cols-2"
        >
          <DoctorCard {...expert} />
          <DoctorCard {...host} />
        </motion.div>
      </div>
    </section>
  )
}
