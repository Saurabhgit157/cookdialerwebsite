import { motion } from 'framer-motion';
import SectionHeading from '../components/ui/SectionHeading';
import AnimatedCard from '../components/ui/AnimatedCard';

const trustPillars = [
  {
    icon: '🛡️',
    title: 'Personal Identity & Skill Vetting',
    desc: 'Cooks pass Aadhaar identity verification, culinary trial, and food hygiene assessment before listing.',
  },
  {
    icon: '💳',
    title: '48-Hour Platform Escrow Hold',
    desc: 'Customer payments are held securely in platform escrow for 48 hours to protect against disputes.',
  },
  {
    icon: '🔄',
    title: '48h Cook Replacement Guarantee',
    desc: 'If a cook leaves or service is unsatisfactory, request a replacement within 48h or receive a pro-rata refund.',
  },
  {
    icon: '📋',
    title: 'Pro-Rata Cancellation Terms',
    desc: 'Cancel within 15 days of service start to receive a 100% pro-rata refund for all unused days worked.',
  },
  {
    icon: '🔒',
    title: 'Strict Customer Privacy',
    desc: 'Your name, address, and phone number are strictly used for cook assignment and never shared or sold.',
  },
  {
    icon: '💬',
    title: '7-Day Dedicated WhatsApp Support',
    desc: 'Our support team is active 7 days a week on WhatsApp to handle menu requests, pauses, or issues.',
  },
];

export default function Trust() {
  return (
    <section id="trust" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <SectionHeading
          badge="Guaranteed Peace of Mind"
          title="Built on 100% Trust & Transparency"
          subtitle="How Cook Dialer protects your money, food safety, and kitchen privacy."
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trustPillars.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <AnimatedCard className="p-6 h-full flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-2xl mb-5">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-black text-slate-900 mb-2 font-heading">{item.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed font-sans">{item.desc}</p>
                </div>
              </AnimatedCard>
            </motion.div>
          ))}
        </div>

        {/* Reassurance Footer Bar */}
        <div className="mt-16 pt-8 border-t border-slate-200 flex flex-wrap items-center justify-between gap-6 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <span className="text-emerald-400 font-bold">✓</span>
            <span>Razorpay Escrow Gateway</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-emerald-400 font-bold">✓</span>
            <span>100% Pro-Rata Refund Eligible</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-emerald-400 font-bold">✓</span>
            <span>Zero Late Payment Penalty</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-emerald-400 font-bold">✓</span>
            <span>Verified Cooks Standard</span>
          </div>
        </div>
      </div>
    </section>
  );
}
