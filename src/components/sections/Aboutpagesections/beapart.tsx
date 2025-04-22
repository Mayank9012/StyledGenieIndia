import React from 'react';
import Link from 'next/link';
import { typography } from '@/styles/typography';
import Container from '@/components/ui/Container';

const ApplyBanner: React.FC = () => {
  return (
    <section className="py-12 px-4 bg-gray-100">
    <Container marginLeft="5vw" marginRight="5vw">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-around items-center">
        <h2 className={` ${typography.heading.h2} text-3xl md:text-4xl font-bold mb-6 md:mb-0 text-center md:text-left`}>
          Be Part Of Our Dynamic &<br className="hidden md:block" /> Creative Team
        </h2>
        
        <Link href="/careers/apply">
          <button className="bg-gray-800 hover:bg-gray-700 text-white py-3 px-8 rounded-md transition-colors font-medium text-lg">
            Apply Now
          </button>
        </Link>
      </div>
      </Container>
    </section>
  );
};

export default ApplyBanner;