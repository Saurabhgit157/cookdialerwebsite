import { motion } from 'framer-motion';
import SectionHeading from '../components/ui/SectionHeading';
import AnimatedCard from '../components/ui/AnimatedCard';
import { TESTIMONIALS } from '../lib/constants';

const audiences = [
  {
    icon: '🎓',
    title: 'Students & Hostelers',
    desc: 'Focus on studies while enjoying fresh rotis and home-style sabzi in your flat.',
    badge: 'Starting ₹1,200/mo'
  },
  {
    icon: '💻',
    title: 'Bachelors & Working Pros',
    desc: 'Skip Zomato expenses. Enjoy hot lunch and dinner prepared on your schedule.',
    badge: 'Save ₹5,000+/mo'
  },
  {
    icon: '🏠',
    title: 'Shared Flatmates',
    desc: 'Split cook cost between 3-5 flatmates to bring per-person pricing down to minimum.',
    badge: 'Most Popular'
  },
  {
    icon: '👨‍👩‍👧‍👦',
    title: 'Busy Families',
    desc: 'Customized non-veg and veg meals tailored strictly to family dietary needs.',
    badge: 'Full Customization'
  },
];

export const ForCustomers: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <SectionHeading
          badge="Tailored For Everyone"
          title="Fresh Food. Your Kitchen. Your Cook."
          subtitle="Designed specifically for the resident lifestyle across Greater Noida sectors and societies."
        />

        {/* Audience Cards Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {audiences.map((aud, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <AnimatedCard className="p-6 h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl">{aud.icon}</span>
                    <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                      {aud.badge}
                    </span>
                  </div>
                  <h3 className="text-lg font-black text-slate-900 mb-2 font-heading">{aud.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed font-sans">{aud.desc}</p>
                </div>
              </AnimatedCard>
            </motion.div>
          ))}
        </div>

        {/* Testimonials Banner */}
        <div className="mt-20">
          <h3 className="text-center text-xs font-bold uppercase tracking-widest text-emerald-400 mb-8">
            Real Reviews From Greater Noida Residents
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="bg-white border border-slate-200 shadow-sm premium-card p-6 rounded-2xl border border-slate-200 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-400 text-sm">★★★★★</div>
                  <span className="text-[10px] font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full">{t.tag}</span>
                </div>
                <p className="text-xs text-slate-500 italic leading-relaxed">"{t.quote}"</p>
                <div className="pt-2 border-t border-slate-200 flex justify-between items-center text-xs">
                  <span className="font-bold text-slate-900">{t.author}</span>
                  <span className="text-slate-500">{t.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>


      </div>
    </section>
  );
};

export default ForCustomers;
