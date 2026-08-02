import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';

const cookBenefits = [
  {
    icon: '💰',
    title: '85% Direct Cook Earnings Split',
    desc: 'Keep 85% of customer payments. Zero hidden commissions or agency deductions.',
  },
  {
    icon: '⚡',
    title: 'Instant UPI Payouts (Min ₹100)',
    desc: 'Withdraw earnings directly to your UPI ID or bank account anytime after 48h hold.',
  },
  {
    icon: '📍',
    title: 'Work Near Your Neighborhood',
    desc: 'Select preferred sectors and societies in Greater Noida to minimize commute time.',
  },
  {
    icon: '📲',
    title: 'Dedicated Cook Partner App',
    desc: 'Manage active customer houses, mark service starts, view daily earnings, and request leaves.',
  },
];

export const ForCooks: React.FC = () => {
  return (
    <section id="for-cooks" className="py-24 bg-[#0B0F17] relative overflow-hidden text-white">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <SectionHeading
          badge="Cook Partner Network"
          title="Earn More as a Verified Home Cook"
          subtitle="Join Cook Dialer's growing partner community in Greater Noida and enjoy guaranteed earnings, flexible timings, and instant payouts."
        />

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Benefits List */}
          <div className="space-y-6">
            {cookBenefits.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass-panel p-5 rounded-2xl border border-white/5 flex items-start gap-4 hover:border-emerald-500/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-2xl flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-extrabold text-white text-base mb-1 font-heading">{item.title}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed font-sans">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Column: Cook Partner Dashboard UI Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-panel-glow p-8 rounded-3xl border border-emerald-500/30 relative"
          >
            <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
              <div>
                <span className="text-[10px] font-bold uppercase text-emerald-400 tracking-wider">Partner App Mockup</span>
                <h4 className="text-xl font-extrabold text-white">Cook Partner Dashboard</h4>
              </div>
              <span className="bg-emerald-500/20 text-emerald-300 text-xs px-3 py-1 rounded-full font-bold">
                Online
              </span>
            </div>

            {/* Dashboard Stats */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-slate-900/90 p-4 rounded-xl border border-slate-800">
                <span className="text-[10px] text-slate-400 uppercase font-semibold">Monthly Income</span>
                <p className="text-2xl font-black text-emerald-400 mt-1">₹18,500</p>
              </div>
              <div className="bg-slate-900/90 p-4 rounded-xl border border-slate-800">
                <span className="text-[10px] text-slate-400 uppercase font-semibold">Active Houses</span>
                <p className="text-2xl font-black text-white mt-1">4 Houses</p>
              </div>
            </div>

            {/* Mock House Card */}
            <div className="bg-slate-900/80 p-4 rounded-xl border border-emerald-500/20 mb-6 space-y-2">
              <div className="flex justify-between items-center text-xs">
                <span className="font-bold text-white">Rohan Kumar (3 People)</span>
                <span className="bg-emerald-950 text-emerald-400 px-2 py-0.5 rounded font-bold text-[10px]">Service Active</span>
              </div>
              <p className="text-xs text-slate-400">Flat 402, Gaur City 2, Greater Noida West</p>
              <div className="text-[11px] text-emerald-300 font-semibold pt-1">
                ⏰ Visit Timings: 8:00 AM & 7:30 PM
              </div>
            </div>

            <div className="text-center">
              <Button variant="secondary" size="md" href="#download">
                Apply as a Cook Partner
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ForCooks;
