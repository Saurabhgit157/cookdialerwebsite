import { useState, useEffect } from 'react';
import Lenis from 'lenis';

import Navbar from './components/ui/Navbar';
import Footer from './sections/Footer';
import CustomerPage from './pages/CustomerPage';
import CookPartnerPage from './pages/CookPartnerPage';

export default function App() {
  // Always default to customer mode unless search parameter ?portal=cook is explicitly passed
  const getInitialMode = (): 'customer' | 'cook' => {
    if (typeof window === 'undefined') return 'customer';
    return window.location.search.toLowerCase().includes('portal=cook') ? 'cook' : 'customer';
  };

  const [mode, setMode] = useState<'customer' | 'cook'>(getInitialMode);

  useEffect(() => {
    // Lenis Smooth Scroll Initialization
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  const handleModeChange = (newMode: 'customer' | 'cook') => {
    setMode(newMode);
    if (typeof window !== 'undefined') {
      const newTarget = newMode === 'cook' ? '?portal=cook' : window.location.pathname;
      window.history.pushState({}, '', newTarget);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative bg-[#090D16] min-h-screen text-slate-100 font-sans">
      <Navbar mode={mode} onModeChange={handleModeChange} />

      <main>
        {mode === 'customer' ? <CustomerPage /> : <CookPartnerPage />}
      </main>

      <Footer />
    </div>
  );
}
