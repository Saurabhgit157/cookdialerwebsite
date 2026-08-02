import { useState } from 'react';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';
import { PRICING_DATA } from '../lib/constants';

export default function Pricing() {
  const [mealType, setMealType] = useState<'bachelors' | 'family'>('bachelors');
  const [peopleCount, setPeopleCount] = useState<number>(3);
  const [selectedPlan, setSelectedPlan] = useState<'essential' | 'premium'>('essential');

  const currentRates = PRICING_DATA[mealType];
  const rateItem = currentRates.find((r) => r.people === peopleCount) || currentRates[2];

  const basePricePerPerson = rateItem.pricePerPerson;
  const isPremium = selectedPlan === 'premium';
  const finalPricePerPerson = isPremium ? Math.round(basePricePerPerson * 1.15) : basePricePerPerson;
  const totalMonthlyBill = finalPricePerPerson * peopleCount;
  const totalOriginalBill = Math.round((rateItem.originalPrice * (isPremium ? 1.15 : 1)) * peopleCount);
  const monthlySavings = totalOriginalBill - totalMonthlyBill;

  return (
    <section id="pricing" className="py-24 bg-[#FFFFFF] relative overflow-hidden text-slate-900 bg-grid-pattern">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <SectionHeading
          badge="Live Pricing Calculator"
          title="Simple, Transparent Monthly Pricing"
          subtitle="Zero hidden agency fees or surprise charges. Calculate your exact monthly bill instantly based on your group size."
        />

        {/* Calculator Main Box */}
        <div className="mt-16 max-w-4xl mx-auto premium-glass-card p-8 md:p-12 rounded-3xl border border-slate-200">
          
          {/* Top Toggles: Meal Type */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-200">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#FF4747]">Step 1: Select Meal Type</span>
              <h4 className="text-xl font-black text-slate-900 mt-1">Who is the meal for?</h4>
            </div>

            <div className="flex bg-slate-100 p-1.5 rounded-2xl border border-slate-200 w-full sm:w-auto shadow-inner">
              <button
                onClick={() => setMealType('bachelors')}
                className={`flex-1 sm:flex-initial px-6 py-2.5 rounded-xl font-bold text-xs transition-all cursor-pointer ${
                  mealType === 'bachelors'
                    ? 'bg-white text-slate-900 shadow-sm border border-slate-200'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                🎓 Bachelors / Students
              </button>
              <button
                onClick={() => setMealType('family')}
                className={`flex-1 sm:flex-initial px-6 py-2.5 rounded-xl font-bold text-xs transition-all cursor-pointer ${
                  mealType === 'family'
                    ? 'bg-white text-slate-900 shadow-sm border border-slate-200'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                👨‍👩‍👧‍👦 Family Plan
              </button>
            </div>
          </div>

          {/* Step 2: People Count Selector */}
          <div className="py-8 border-b border-slate-200 space-y-4">
            <div className="flex justify-between items-center">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#FF4747]">Step 2: Number of People</span>
                <h4 className="text-xl font-black text-slate-900 mt-1">How many people to cook for?</h4>
              </div>
              <span className="text-xl font-black text-white bg-gradient-to-r from-[#FF4747] to-[#FF8A00] px-4 py-1.5 rounded-xl shadow-sm">
                {peopleCount} {peopleCount === 1 ? 'Person' : 'People'}
              </span>
            </div>

            <div className="flex gap-3 pt-2">
              {[1, 2, 3, 4, 5].map((num) => (
                <button
                  key={num}
                  onClick={() => setPeopleCount(num)}
                  className={`flex-1 py-3.5 rounded-xl font-black text-sm transition-all border cursor-pointer ${
                    peopleCount === num
                      ? 'bg-gradient-to-r from-[#FF4747] to-[#FF8A00] text-white border-transparent shadow-md shadow-[#FF4747]/20'
                      : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-slate-900 hover:border-slate-300'
                  }`}
                >
                  {num} {num === 5 ? '+' : ''}
                </button>
              ))}
            </div>
          </div>

          {/* Step 3: Plan Tier Selection */}
          <div className="py-8 border-b border-slate-200 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#FF4747]">Step 3: Choose Service Tier</span>
              <h4 className="text-xl font-black text-slate-900 mt-1">Select plan features</h4>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Essential Plan */}
              <div
                onClick={() => setSelectedPlan('essential')}
                className={`cursor-pointer p-6 rounded-2xl border transition-all ${
                  selectedPlan === 'essential'
                    ? 'bg-white border-[#FF4747] shadow-lg shadow-[#FF4747]/10'
                    : 'bg-slate-50 border-slate-200 hover:bg-white'
                }`}
              >
                <div className="flex justify-between items-center mb-3">
                  <h5 className="font-black text-lg text-slate-900">Essential Plan</h5>
                  <span className="text-[10px] font-bold bg-slate-200 text-slate-600 px-2.5 py-0.5 rounded-full">Standard</span>
                </div>
                <ul className="text-xs text-slate-600 space-y-2">
                  <li>✓ 2 meals daily (Lunch & Dinner)</li>
                  <li>✓ Standard hygiene checks</li>
                  <li>✓ Sunday half-day service</li>
                </ul>
              </div>

              {/* Premium Plan */}
              <div
                onClick={() => setSelectedPlan('premium')}
                className={`cursor-pointer p-6 rounded-2xl border transition-all ${
                  selectedPlan === 'premium'
                    ? 'bg-white border-[#10B981] shadow-lg shadow-[#10B981]/10'
                    : 'bg-slate-50 border-slate-200 hover:bg-white'
                }`}
              >
                <div className="flex justify-between items-center mb-3">
                  <h5 className="font-black text-lg text-[#059669]">Premium Plan</h5>
                  <span className="text-[10px] font-bold bg-emerald-100 text-emerald-700 px-2.5 py-0.5 rounded-full border border-emerald-200">+15% Tier</span>
                </div>
                <ul className="text-xs text-slate-600 space-y-2">
                  <li>✓ 2 meals daily (Lunch & Dinner)</li>
                  <li>✓ Premium ingredient preparation</li>
                  <li>✓ Full Sunday service included</li>
                  <li>✓ Priority 48h cook replacement</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Final Calculated Summary */}
          <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Total Estimated Monthly Bill</span>
              <div className="flex items-baseline gap-3 mt-1">
                <span className="text-4xl md:text-5xl font-black text-slate-900 font-heading tracking-tight">
                  ₹{totalMonthlyBill.toLocaleString('en-IN')}
                </span>
                <span className="text-sm text-slate-400 line-through">
                  ₹{totalOriginalBill.toLocaleString('en-IN')}
                </span>
                <span className="text-xs font-bold text-[#059669] bg-emerald-100 px-2.5 py-1 rounded-full border border-emerald-200">
                  Save ₹{monthlySavings.toLocaleString('en-IN')}/mo
                </span>
              </div>
              <p className="text-xs text-slate-500 mt-2">
                Rate: <span className="text-[#FF4747] font-bold">₹{finalPricePerPerson.toLocaleString('en-IN')}</span> per person / month ({peopleCount} {peopleCount === 1 ? 'person' : 'people'}).
              </p>
            </div>

            <Button variant="primary" size="lg" href="#download">
              Book This Plan
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
}
