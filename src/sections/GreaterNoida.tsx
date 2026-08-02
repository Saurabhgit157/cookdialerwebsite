import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/ui/SectionHeading';
import { SERVICEABLE_AREAS } from '../lib/constants';

export const GreaterNoida: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searched, setSearched] = useState(false);

  const filteredAreas = SERVICEABLE_AREAS.filter((area) =>
    area.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const isMatched = searchTerm.trim().length > 0 && filteredAreas.length > 0;

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <SectionHeading
          badge="Hyperlocal Network"
          title="Built For Everyday Life in Greater Noida"
          subtitle="We serve major sectors, apartments, and societies across Greater Noida West & Noida Extension."
        />

        {/* Live Area Lookup Tool */}
        <div className="mt-12 max-w-2xl mx-auto bg-white border border-slate-200 shadow-sm premium-card p-6 rounded-3xl border border-emerald-500/20 text-center">
          <label className="text-xs font-extrabold uppercase tracking-widest text-emerald-400 block mb-3">
            Check Serviceability in Your Sector
          </label>

          <div className="relative flex items-center">
            <input
              type="text"
              placeholder="e.g. Gaur City, Sector 4, Alpha 1..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setSearched(true);
              }}
              className="w-full bg-white border border-slate-200 text-slate-900 placeholder-slate-500 rounded-xl px-5 py-3.5 text-sm focus:outline-none focus:border-emerald-500 transition-colors"
            />
          </div>

          {searched && searchTerm.trim().length > 0 && (
            <div className="mt-4 p-4 rounded-xl text-xs font-bold transition-all">
              {isMatched ? (
                <div className="bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 p-3 rounded-lg flex items-center justify-center gap-2">
                  <span>✅ Great news!</span>
                  <span>"{searchTerm}" is actively covered in Greater Noida.</span>
                </div>
              ) : (
                <div className="bg-white border border-slate-200 text-slate-500 p-3 rounded-lg">
                  📍 We are continuously expanding! If your sector isn't listed, request it via WhatsApp and we will prioritize onboarding cooks there.
                </div>
              )}
            </div>
          )}
        </div>

        {/* Floating Sector Badges */}
        <div className="mt-12 flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
          {SERVICEABLE_AREAS.map((area, idx) => (
            <motion.span
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.04 }}
              className="px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-500 text-xs font-semibold hover:border-emerald-500/40 hover:text-emerald-400 transition-colors cursor-default"
            >
              📍 {area}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GreaterNoida;
