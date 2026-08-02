import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Button from '../components/ui/Button';
import SectionHeading from '../components/ui/SectionHeading';
import { InteractiveMap } from '../components/ui/InteractiveMap';
import { VIDEO_BACKGROUNDS } from '../lib/constants';

const CookPartnerPage: React.FC = () => {
  const [houses, setHouses] = useState(4);
  const baseEarnings = houses * 5000;
  const platformFee = Math.round(baseEarnings * 0.15);
  const takeHome = baseEarnings - platformFee;

  return (
    <div className="bg-[#FFFFFF] min-h-screen pt-24 font-sans text-slate-900">
      {/* 1. Cook Hero Section */}
      <section className="relative pt-16 pb-24 overflow-hidden border-b border-slate-200">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover scale-105 opacity-90"
          >
            <source src={VIDEO_BACKGROUNDS.heroFallback} type="video/mp4" />
          </video>
        </div>
        
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#10B981]/15 rounded-full blur-[140px] pointer-events-none z-0" />

        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/90 backdrop-blur-md border border-emerald-200 text-emerald-800 text-sm font-extrabold tracking-wide mb-8 shadow-md"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-[#10B981] animate-pulse" />
            <span>Earn 85% on every booking</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black font-heading leading-tight mb-6 drop-shadow-sm"
          >
            Turn Your Cooking Skills <br />
            Into a <span className="gradient-text-cook">Stable Income</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-900 text-lg md:text-xl font-bold max-w-2xl mx-auto mb-10 drop-shadow-[0_1px_6px_rgba(255,255,255,0.9)]"
          >
            Join Greater Noida's top daily cook network. Choose your working sectors, get matched with nearby families, and get paid instantly.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button variant="secondary" size="lg" href="#cook-apply">
              Apply to Join Now
            </Button>
            <Button variant="outline" size="lg" href="#cook-earnings">
              Calculate Earnings
            </Button>
          </motion.div>
        </div>
      </section>

      {/* 2. Cook Earnings Calculator */}
      <section id="cook-earnings" className="py-24 bg-slate-50 relative border-b border-slate-200">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <SectionHeading
            badge="Revenue Simulator"
            title="Transparent 85% / 15% Split"
            subtitle="You keep 85% of what the customer pays. We take a flat 15% for marketing, support, and escrow guarantees."
          />

          <div className="mt-16 bg-white premium-card p-8 md:p-12 rounded-3xl grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            <div className="space-y-8">
              <div>
                <h4 className="text-xl font-black text-slate-900 mb-2">How many houses per day?</h4>
                <p className="text-sm text-slate-500 font-medium mb-6">Drag the slider to calculate monthly earnings.</p>
                <input
                  type="range"
                  min="1"
                  max="8"
                  value={houses}
                  onChange={(e) => setHouses(parseInt(e.target.value))}
                  className="w-full h-3 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#10B981]"
                />
                <div className="flex justify-between text-xs font-bold text-slate-400 mt-3 px-1">
                  <span>1 House</span>
                  <span>8 Houses (Max)</span>
                </div>
              </div>

              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-slate-500 font-semibold text-sm">Houses/Families</span>
                  <span className="text-xl font-black text-slate-900">{houses}</span>
                </div>
                <div className="flex justify-between items-center text-sm font-semibold text-emerald-600">
                  <span>Average Time</span>
                  <span>~{houses * 1.5} Hours / day</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#059669] to-[#047857] p-8 rounded-2xl text-white shadow-xl shadow-emerald-900/10 flex flex-col justify-center">
              <span className="text-sm font-bold text-emerald-200 uppercase tracking-widest mb-2">Your Monthly Take-Home</span>
              <div className="text-5xl md:text-6xl font-black font-heading tracking-tight mb-6">
                ₹{takeHome.toLocaleString('en-IN')}
              </div>
              
              <div className="space-y-3 pt-6 border-t border-emerald-400/30 text-sm font-medium">
                <div className="flex justify-between text-emerald-100">
                  <span>Total Gross (Customer Pays)</span>
                  <span>₹{baseEarnings.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between text-emerald-200">
                  <span>Platform Fee (15%)</span>
                  <span>- ₹{platformFee.toLocaleString('en-IN')}</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Demand Map */}
      <section id="map" className="py-24 bg-white relative border-b border-slate-200">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <SectionHeading
            badge="Live Demand"
            title="High Demand Sectors in Greater Noida"
            subtitle="We have customers waiting. See where you are needed the most today."
          />
          <div className="mt-16">
            <InteractiveMap mode="cook" />
          </div>
        </div>
      </section>

      {/* 4. Application Form */}
      <section id="cook-apply" className="py-24 bg-slate-50 relative">
        <div className="container mx-auto px-4 md:px-8 max-w-3xl">
          <div className="bg-white premium-card p-8 md:p-12 rounded-3xl border border-slate-200">
            <div className="text-center mb-10">
              <span className="text-emerald-600 font-black text-xs uppercase tracking-widest">Fast Track Onboarding</span>
              <h2 className="text-3xl font-black font-heading mt-2">Start Earning in 48 Hours</h2>
            </div>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-700 uppercase">Full Name</label>
                  <input type="text" placeholder="Aarti Devi" className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 font-medium" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-700 uppercase">Phone Number</label>
                  <div className="flex">
                    <span className="bg-slate-100 border border-slate-200 border-r-0 rounded-l-xl p-4 text-slate-500 font-bold">+91</span>
                    <input type="tel" placeholder="98765 43210" className="w-full bg-slate-50 border border-slate-200 rounded-r-xl p-4 text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 font-medium" />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-700 uppercase">Preferred Sector (Greater Noida)</label>
                <select className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 font-medium cursor-pointer">
                  <option>Gaur City 1 & 2</option>
                  <option>Greater Noida West (Sector 4)</option>
                  <option>Alpha 1 & 2</option>
                  <option>Beta 1 & 2</option>
                  <option>Noida Extension</option>
                </select>
              </div>

              <label className="flex items-start gap-3 p-4 bg-emerald-50 rounded-xl border border-emerald-100 cursor-pointer">
                <input type="checkbox" className="mt-1 w-5 h-5 rounded text-emerald-600 focus:ring-emerald-500 accent-emerald-600" />
                <span className="text-sm text-emerald-800 font-medium">I agree to the background check process and confirm I have a valid Aadhar Card.</span>
              </label>

              <button type="submit" className="w-full py-4 bg-gradient-to-r from-[#10B981] to-[#047857] text-white rounded-xl font-black text-lg shadow-lg shadow-emerald-500/20 hover:-translate-y-0.5 transition-all focus:ring-4 focus:ring-emerald-500/30">
                Submit Application
              </button>
            </form>
          </div>
        </div>
      </section>

    </div>
  );
};

export default CookPartnerPage;
