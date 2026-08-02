import React from 'react';
import Hero from '../sections/Hero';
import HowItWorks from '../sections/HowItWorks';
import Features from '../sections/Features';
import ForCustomers from '../sections/ForCustomers';
import Trust from '../sections/Trust';
import Download from '../sections/Download';
import FinalCTA from '../sections/FinalCTA';

const CustomerPage: React.FC = () => {
  return (
    <div className="bg-[#FFFFFF] min-h-screen">
      <Hero />
      <HowItWorks />
      <Features />
      <ForCustomers />
      <Trust />
      <Download />
      <FinalCTA />
    </div>
  );
};

export default CustomerPage;
