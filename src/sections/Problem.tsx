import { motion } from 'framer-motion';
import SectionHeading from '../components/ui/SectionHeading';

const problemItems = [
  {
    icon: '😫',
    oldTitle: 'Endless Classifieds & No-Shows',
    oldDesc: 'Asking neighbors, calling unverified phone numbers, facing unexpected cook leaves without replacement.',
    newIcon: '⚡',
    newTitle: '1-Tap Cook Dialer Matching',
    newDesc: 'Select meal type, dietary preference, and timing. Get a background-verified cook assigned instantly.',
  },
  {
    icon: '⚠️',
    oldTitle: 'Unchecked Hygiene & Safety',
    oldDesc: 'Zero identity verification, unknown kitchen hygiene standards, and security concerns at home.',
    newIcon: '🛡️',
    newTitle: '100% Verified & Hygiene Trained',
    newDesc: 'Every cook passes police identity checks, cooking trial evaluation, and strict hygiene guidelines.',
  },
  {
    icon: '💸',
    oldTitle: 'Cash Disputes & Hidden Agency Fees',
    oldDesc: 'Advance cash demands, unrecorded payments, arguments over attendance, and high agency cut.',
    newIcon: '💳',
    newTitle: '48h Escrow Protection & Direct Pay',
    newDesc: 'Single monthly postpaid billing. Your payment is held safely in escrow before release.',
  },
];

const chefShowcase = [
  {
    name: 'Aarti Devi',
    experience: '8+ Yrs Exp.',
    specialty: 'North & South Indian Daily Thali',
    rating: '4.9 ⭐',
    verifiedBadge: 'Hygiene & Identity Verified',
    image: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=600&q=80',
    tag: 'Top Rated in Greater Noida',
  },
  {
    name: 'Ramesh Kumar',
    experience: '10+ Yrs Exp.',
    specialty: 'Healthy Bachelor & Family Meals',
    rating: '4.95 ⭐',
    verifiedBadge: 'Background Checked',
    image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=600&q=80',
    tag: 'Sector 4 Specialist',
  },
  {
    name: 'Sunita Sharma',
    experience: '6+ Yrs Exp.',
    specialty: 'Custom Diet & Veg Comfort Food',
    rating: '4.88 ⭐',
    verifiedBadge: 'Escrow Protected',
    image: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=600&q=80',
    tag: 'Gaur City Expert',
  },
];

export default function Problem() {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50 relative overflow-hidden border-b border-slate-200">
      {/* Background Decorative Blur Orbs */}
      <div className="absolute top-1/3 -left-32 w-96 h-96 bg-[#FF4747]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 -right-32 w-96 h-96 bg-[#FF8A00]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <SectionHeading
          badge="The Culinary Dilemma Solved"
          title="Finding a Reliable Cook Shouldn't Be Hard"
          subtitle="See how Cook Dialer transforms frustrating, unvetted house cook arrangements into a seamless, digital-first experience."
        />

        {/* 1. Comparison Cards Grid */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {problemItems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xl shadow-slate-100 flex flex-col justify-between hover:shadow-2xl transition-all duration-300 group"
            >
              {/* Old Way (Red Tinted) */}
              <div className="p-5 rounded-2xl bg-red-50/80 border border-red-200/80 mb-6">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">{item.icon}</span>
                  <span className="text-[11px] font-black uppercase tracking-widest text-red-500">The Frustrating Old Way</span>
                </div>
                <h4 className="font-extrabold text-slate-900 text-base mb-1.5">{item.oldTitle}</h4>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">{item.oldDesc}</p>
              </div>

              {/* Arrow Indicator */}
              <div className="flex justify-center my-1 text-[#FF4747] font-black text-xl animate-bounce">
                ↓
              </div>

              {/* New Way (Emerald / Saffron Tinted) */}
              <div className="p-5 rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50/60 border border-emerald-300/80 shadow-md shadow-emerald-50">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">{item.newIcon}</span>
                  <span className="text-[11px] font-black uppercase tracking-widest text-emerald-700">The Cook Dialer Advantage</span>
                </div>
                <h4 className="font-extrabold text-slate-900 text-base mb-1.5">{item.newTitle}</h4>
                <p className="text-xs text-slate-700 leading-relaxed font-semibold">{item.newDesc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 2. Chef Images & Verified Partner Spotlight Showcase */}
        <div className="mt-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-black uppercase tracking-widest inline-block mb-3">
              👨‍🍳 Verified Local Culinary Partners
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 font-heading">
              Meet Trained, Background-Checked Cooks Near You
            </h3>
            <p className="text-slate-600 text-sm mt-2 font-medium">
              Every cook assigned through Cook Dialer is personally interviewed, background-verified, and hygiene certified.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {chefShowcase.map((chef, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-xl shadow-slate-100 group hover:-translate-y-2 transition-all duration-300"
              >
                {/* Chef Image with Overlay Badge */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={chef.image}
                    alt={chef.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                  
                  <span className="absolute top-4 left-4 bg-emerald-500 text-white text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full shadow-lg">
                    ✓ {chef.verifiedBadge}
                  </span>

                  <span className="absolute top-4 right-4 bg-white/90 backdrop-blur-md text-slate-900 text-xs font-black px-2.5 py-1 rounded-full shadow-md">
                    {chef.rating}
                  </span>

                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h4 className="text-xl font-black">{chef.name}</h4>
                    <p className="text-xs text-slate-200 font-medium">{chef.experience} • {chef.tag}</p>
                  </div>
                </div>

                {/* Card Details */}
                <div className="p-6">
                  <div className="flex items-center justify-between text-xs text-slate-500 font-bold mb-3">
                    <span>Specialty</span>
                    <span className="text-[#FF4747]">{chef.specialty}</span>
                  </div>
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-700">
                    <span className="flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-emerald-500" /> Available for Booking
                    </span>
                    <span className="text-slate-400">Greater Noida</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
