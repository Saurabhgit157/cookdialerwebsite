import { motion } from 'framer-motion';
import SectionHeading from '../components/ui/SectionHeading';

const features = [
  {
    title: 'Verified Cooks',
    description: 'Every cook passes a strict background check and cooking quality test.',
    icon: '👨‍🍳',
    color: 'from-[#FF4747] to-[#FF8A00]'
  },
  {
    title: '48h Escrow Guarantee',
    description: 'Your payment is held safely. Only released when you are 100% satisfied.',
    icon: '🛡️',
    color: 'from-emerald-500 to-teal-500'
  },
  {
    title: 'Instant Replacements',
    description: 'Cook goes on leave? Get a replacement cook assigned within 48 hours.',
    icon: '🔄',
    color: 'from-blue-500 to-indigo-500'
  },
  {
    title: 'Zero Hidden Fees',
    description: 'What you see is what you pay. No sudden agency charges.',
    icon: '💎',
    color: 'from-purple-500 to-fuchsia-500'
  }
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-slate-50 relative border-b border-slate-200">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeading
          badge="Why Choose Us"
          title="Premium Service, Zero Hassle"
          subtitle="We handle the vetting, payments, and replacements so you can just enjoy your food."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white premium-card p-8 group hover:-translate-y-2 transition-all duration-300"
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-6 bg-gradient-to-br ${feature.color} text-white shadow-md`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-black text-slate-900 mb-3 group-hover:text-[#FF4747] transition-colors">{feature.title}</h3>
              <p className="text-slate-600 font-medium text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
