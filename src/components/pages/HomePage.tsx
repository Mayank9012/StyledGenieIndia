import HeroSection from '@/components/sections/Homepagesections/HeroSection';
import ServicesSection from '@/components/sections/Homepagesections/ServicesSection';
import HowItWorksSection from '@/components/sections/Homepagesections/HowItWorksSection';
import PricingSection from '@/components/sections/Homepagesections/PricingSection';
import WhatourClientsSay from '../sections/Homepagesections/WhatourClientsSay';
import CapturedMoments from '../sections/Homepagesections/CapturedMoments';
import LocationsMessage from '../sections/Homepagesections/LocationsMessage';
import Chatbot from '../sections/Chatbot';

export default function HomePage() {
  return (
    <>
      <Chatbot />
      <HeroSection />
      <ServicesSection />
      <LocationsMessage />
      <HowItWorksSection />
      {/*<PricingSection />*/}
      <CapturedMoments />
      <WhatourClientsSay />
    </>
  );
}