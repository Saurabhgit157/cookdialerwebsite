import { motion } from 'framer-motion';
import SectionHeading from '../components/ui/SectionHeading';
import AnimatedCard from '../components/ui/AnimatedCard';
import { HOW_IT_WORKS } from '../lib/constants';

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <SectionHeading
          badge="Seamless Process"
          title="How Cook Dialer Works"
          subtitle="From your first request to hot, freshly prepared meals on your table in 4 effortless steps."
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {HOW_IT_WORKS.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.12 }}
            >
              <AnimatedCard className="p-6 h-full flex flex-col justify-between relative group hover:border-emerald-500/40">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl">
                      {item.icon}
                    </span>
                    <span className="text-3xl font-black text-slate-800 group-hover:text-emerald-500/40 transition-colors">
                      {item.step}
                    </span>
                  </div>

                  <span className="inline-block px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] font-bold uppercase tracking-wider mb-3">
                    {item.badge}
                  </span>

                  <h3 className="text-xl font-extrabold text-slate-900 mb-3 font-heading">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-500 leading-relaxed font-sans">
                    {item.description}
                  </p>
                </div>
              </AnimatedCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
