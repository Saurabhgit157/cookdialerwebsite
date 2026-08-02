import { useState, useEffect } from 'react';
import Lenis from 'lenis';

import Navbar from './components/ui/Navbar';
import Footer from './sections/Footer';
import CustomerPage from './pages/CustomerPage';
import CookPartnerPage from './pages/CookPartnerPage';

export default function App() {
  const [mode, setMode] = useState<'customer' | 'cook'>('customer');

  useEffect(() => {
    // Route determination based on pathname or hash (/cook, /partner, #cook, #partner)
    const checkRoute = () => {
      const hash = window.location.hash.toLowerCase();
      const search = window.location.search.toLowerCase();
      
      // Explicitly check hash (#cook, #partner) or search query to avoid repo name "cookdialerwebsite" matching /cook
      if (hash.includes('cook') || hash.includes('partner') || search.includes('cook')) {
        setMode('cook');
      } else {
        setMode('customer');
      }
    };

    checkRoute();
    window.addEventListener('popstate', checkRoute);
    window.addEventListener('hashchange', checkRoute);

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
      window.removeEventListener('popstate', checkRoute);
      window.removeEventListener('hashchange', checkRoute);
      lenis.destroy();
    };
  }, []);

  const handleModeChange = (newMode: 'customer' | 'cook') => {
    setMode(newMode);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative bg-[#090D16] min-h-screen text-slate-100 font-sans">
      {/* Clean Navbar without toggle button */}
      <Navbar mode={mode} onModeChange={handleModeChange} />

      {/* Main Dedicated Website Component */}
      <main>
        {mode === 'customer' ? <CustomerPage /> : <CookPartnerPage />}
      </main>

      {/* Shared Professional Footer */}
      <Footer />
    </div>
  );
}
