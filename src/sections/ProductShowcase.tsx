import React, { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import { motion, AnimatePresence } from 'framer-motion';
import { APP_SCREENS } from '../lib/constants';
import { ProductShowcaseScene } from '../components/3d/ProductShowcaseScene';
import SectionHeading from '../components/ui/SectionHeading';

const ProductShowcase: React.FC = () => {
  const [activeScreen, setActiveScreen] = useState<number>(0);

  return (
    <section
      id="product-showcase"
      className="py-24 bg-slate-50 relative overflow-hidden text-slate-900"
    >
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <SectionHeading
          badge="Live Interface Preview"
          title="Experience the Cook Dialer App"
          subtitle="Click through core customer screens to explore how effortlessly you can book, manage, and rate your cook."
        />

        <div className="mt-16 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* 3D Interactive Smartphone */}
          <div className="w-full lg:w-1/2 h-[480px] lg:h-[580px] relative flex justify-center items-center">
            <Canvas camera={{ position: [0, 0, 8.5], fov: 45 }} style={{ width: '100%', height: '100%' }}>
              <Suspense fallback={null}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[4, 5, 5]} intensity={1} />
                <pointLight position={[-3, -2, 2]} color="#10B981" intensity={0.5} />
                <ProductShowcaseScene activeScreen={activeScreen} />
                <Environment preset="city" />
              </Suspense>
            </Canvas>
          </div>

          {/* Screen Tabs List */}
          <div className="w-full lg:w-1/2 flex flex-col gap-4">
            {APP_SCREENS.map((screen, index) => {
              const isActive = activeScreen === index;
              return (
                <motion.div
                  key={index}
                  onClick={() => setActiveScreen(index)}
                  className={`cursor-pointer rounded-2xl p-5 transition-all duration-300 relative overflow-hidden border ${
                    isActive
                      ? 'bg-white border border-slate-200 shadow-xl premium-card border-emerald-500/40 bg-white'
                      : 'bg-white border border-slate-200 shadow-sm premium-card border-slate-200 hover:border-slate-300 bg-white'
                  }`}
                  whileHover={{ x: 6 }}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm ${
                      isActive ? 'bg-emerald-500 text-slate-900 shadow-md shadow-emerald-500/30' : 'bg-slate-100 text-slate-500'
                    }`}>
                      0{index + 1}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-black text-lg text-slate-900 font-heading">{screen.label}</h3>
                        <span className="text-[10px] font-semibold text-emerald-400 uppercase tracking-widest bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                          {screen.tagline}
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 mt-1.5 leading-relaxed font-sans">
                        {screen.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
