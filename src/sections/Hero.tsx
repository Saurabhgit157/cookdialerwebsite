import React from 'react';
import { motion } from 'framer-motion';
import HeroScene from '../components/3d/HeroScene';
import Button from '../components/ui/Button';
import { VIDEO_BACKGROUNDS, PLAY_STORE_URL, CONTACT } from '../lib/constants';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16 bg-[#FFFFFF]">
      {/* Background Cooking Video Loop */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover scale-105 opacity-90"
        >
          <source src={VIDEO_BACKGROUNDS.hero} type="video/mp4" />
          <source src={VIDEO_BACKGROUNDS.heroFallback} type="video/mp4" />
        </video>
      </div>

      {/* Elegant Light Orbs */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#FF4747]/10 rounded-full blur-[140px] pointer-events-none z-0" />
      <div className="absolute bottom-10 right-10 w-[30rem] h-[30rem] bg-[#FF8A00]/10 rounded-full blur-[160px] pointer-events-none z-0" />

      <div className="container mx-auto px-4 md:px-8 relative z-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* Left Column: Pure Text floating over raw 4K Video */}
          <motion.div
            className="flex-1 text-center lg:text-left max-w-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Elegant Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 backdrop-blur-md border border-slate-200 text-slate-900 text-[11px] font-extrabold uppercase tracking-widest mb-6 shadow-md">
              <span className="w-2 h-2 rounded-full bg-[#FF4747] animate-pulse" />
              <span>Greater Noida's #1 Daily Cook Service</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[72px] font-black text-slate-900 leading-[1.05] tracking-tight font-heading mb-6 drop-shadow-sm">
              Chef-Quality <br />
              <span className="gradient-text-primary">Home Food</span> <br />
              In Your Kitchen
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg md:text-xl text-slate-900 font-bold mb-8 leading-relaxed font-sans max-w-xl mx-auto lg:mx-0 drop-shadow-[0_1px_6px_rgba(255,255,255,0.9)]">
              Cook Dialer pairs you with verified, background-checked daily home cooks in Greater Noida. Enjoy fresh, hot meals prepared right in your kitchen from <span className="text-[#FF4747] font-black underline decoration-2">₹1,200/month</span> per person.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10">
              <Button variant="primary" size="lg" href={PLAY_STORE_URL} target="_blank">
                📱 Download App on Play Store
              </Button>
              <Button variant="outline" size="lg" href={CONTACT.whatsapp.link} target="_blank">
                💬 Book on WhatsApp (+91 8287794390)
              </Button>
            </div>

            {/* Trust Metrics */}
            <div className="pt-6 border-t border-slate-300/80 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-slate-900 font-extrabold drop-shadow-[0_1px_6px_rgba(255,255,255,0.9)]">
              <div className="flex items-center gap-2">
                <span className="text-[#FF4747] font-black text-lg">✓</span>
                <span>Background-Vetted Cooks</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#FF4747] font-black text-lg">✓</span>
                <span>48h Escrow Protection</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#10B981] font-black text-lg">✓</span>
                <span>Zero Hidden Fees</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: 3D Interactive Scene */}
          <div className="flex-1 w-full h-[450px] md:h-[550px] lg:h-[650px] relative">
            <HeroScene screenImage="assets/phone-screen.png" />
          </div>

        </div>
      </div>
    </section>
  );
}
