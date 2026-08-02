import React from 'react';
import { motion } from 'framer-motion';
import Button from '../components/ui/Button';
import { CONTACT, VIDEO_BACKGROUNDS, PLAY_STORE_URL } from '../lib/constants';

export const FinalCTA: React.FC = () => {
  return (
    <section className="py-28 relative overflow-hidden bg-white text-slate-900 border-t border-slate-200">
      {/* Background Video Loop of Cook Cooking in Kitchen */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-90 scale-105"
        >
          <source src={VIDEO_BACKGROUNDS.cta} type="video/mp4" />
          <source src={VIDEO_BACKGROUNDS.hero} type="video/mp4" />
        </video>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10 text-center max-w-4xl">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-[#FF4747]/20 text-[#FF4747] text-xs font-black uppercase tracking-widest mb-6 shadow-md"
        >
          🍳 Stop Searching. Start Cooking.
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-black text-slate-900 font-heading leading-tight mb-6 tracking-tight"
        >
          Enjoy Fresh Homemade Food Every Day
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-slate-900 text-base md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-sans font-bold drop-shadow-[0_1px_6px_rgba(255,255,255,0.9)]"
        >
          Join hundreds of students, bachelors, and families across Greater Noida who rely on Cook Dialer for wholesome daily home meals.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button variant="primary" size="lg" href={PLAY_STORE_URL} target="_blank">
            📱 Download App on Play Store
          </Button>
          <Button variant="outline" size="lg" href={CONTACT.whatsapp.link} target="_blank">
            💬 Book on WhatsApp (+91 8287794390)
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
