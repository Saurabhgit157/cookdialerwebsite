import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';
import { CONTACT, PLAY_STORE_URL } from '../lib/constants';

export const Download: React.FC = () => {
  return (
    <section id="download" className="py-24 bg-slate-50 relative overflow-hidden text-slate-900">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="bg-white border border-slate-200 shadow-xl premium-card p-8 md:p-16 rounded-3xl border border-emerald-500/30 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column */}
          <div className="space-y-6 text-center lg:text-left">
            <span className="inline-block px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-widest">
              Available on Mobile
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 font-heading leading-tight">
              Your Next Cook is Just a Few Taps Away
            </h2>
            <p className="text-slate-500 text-sm md:text-base leading-relaxed font-sans">
              Download the Cook Dialer app to browse active cooks, request customized daily meal plans, and track cook arrivals directly from your smartphone.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <Button variant="primary" size="lg" href={PLAY_STORE_URL} target="_blank">
                📱 Get App on Google Play
              </Button>
              <Button variant="outline" size="lg" href={CONTACT.whatsapp.link} target="_blank">
                💬 Book on WhatsApp (+91 8287794390)
              </Button>
            </div>

            <div className="pt-6 border-t border-slate-200 flex items-center justify-center lg:justify-start gap-6 text-xs text-slate-500">
              <span>✓ Free Download</span>
              <span>•</span>
              <span>✓ No Advance Subscriptions</span>
              <span>•</span>
              <span>✓ Android Compatible</span>
            </div>
          </div>

          {/* Right Column: Bottom Phone Mockup */}
          <div className="flex justify-center">
            <div className="w-[260px] h-[510px] bg-[#0A0A0C] rounded-[36px] border-[6px] border-slate-800 p-0 shadow-2xl relative overflow-hidden">
              {/* Speaker / Camera Notch */}
              <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-16 h-3.5 bg-slate-950 rounded-full z-20 shadow-inner" />
              
              {/* Bottom Phone Image */}
              <img
                src="assets/bottom-phone-screen.png"
                alt="Cook Dialer App Release"
                className="w-full h-full object-fill block border-0 p-0 m-0 relative z-10"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Download;
