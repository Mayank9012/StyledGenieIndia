"use client";
import Container from '@/components/ui/Container';
import { typography } from '@/styles/typography';
import Button from '@/components/ui/Button';

interface PackageItem {
  id: number;
  image: string;
  title: string;
  description: string[];
  benefit: string;
}

interface PackageCardsProps {
  packages: PackageItem[];
  bookingFee?: string;
  bookingNote?: string;
  empty?: boolean; 
}

const PackageCards = ({ 
  packages = [],
  bookingFee = "Rs. 299/-", 
  bookingNote = "*This is only a booking fee and will be adjusted in the final service charge. Please note, the booking fee is non-refundable. Once you book, you will receive the full pricing details for your selected service. ",
  empty = true 
}: PackageCardsProps) => {
  const safePackages = packages || [];
  
  const getGridClass = () => {
    const count = safePackages.length;
    if (count === 1) return "grid-cols-1";
    if (count === 2) return "grid-cols-1 md:grid-cols-2";
    if (count === 3) return "grid-cols-1 md:grid-cols-3";
    if (count === 4) return "grid-cols-1 md:grid-cols-2 lg:grid-cols-4";
    return "grid-cols-1 md:grid-cols-2 lg:grid-cols-3";
  };
  
  const getGridStyle = () => {
    const count = safePackages.length;
    if (count === 2) {
      return {
        className: "gap-10 md:gap-10 md:space-x-2 md:flex md:justify-center",
        style: { maxWidth: '950px', margin: '0 auto' }
      };
    }
    return {
      className: "gap-10",
      style: {}
    };
  };
  
  const getMaxWidthClass = () => {
    const count = safePackages.length;
    if (count === 2) return "max-w-[481px]";
    return "max-w-[379px]"; 
  };

  const gridStyle = getGridStyle();

  if (safePackages.length === 0) {
    return (
      <section className="py-10">
        <Container marginLeft="5vw" marginRight="5vw">
          <p className="text-center">No packages available.</p>
        </Container>
      </section>
    );
  }

  return (
    <section className="py-10">
      <Container marginLeft="5vw" marginRight="5vw">
        <div 
          className={`mb-12 grid ${getGridClass()} ${gridStyle.className} justify-items-center mx-auto`}
          style={gridStyle.style}
        >
          {safePackages.map((card) => (
            <div 
              key={card.id} 
              className={`flex flex-col bg-gray-200 p-7 rounded-3xl shadow-lg ${getMaxWidthClass()} w-full ${empty ? 'h-fit' : ''}`}
            >
              <h2 className={`${typography.heading.h2} mb-5 bg-gray-300 -mx-7 px-5 mt-[-28px] mb-5 py-5 rounded-t-3xl`}>{card.title}</h2>
              <ul className="list-disc list-outside pl-9 mb-3">
              {card.description.map((item, index) => {
                const parts = item.split(':');
                
                if (parts.length > 1) {
                const term = parts[0];
                const definition = parts.slice(1).join(':');
                
                return (
                  <li key={index} className={`${typography.body.B2} mb-1`}>
                  <span className="font-medium">
                    {term}:
                  </span>
                  <span className="font-normal">
                    {definition}
                  </span>
                  </li>
                );
                } else {
                return (
                  <li key={index} className={`${typography.body.B2} mb-1 `}>
                  {item}
                  </li>
                );
                }
              })}
              </ul>
              <div className={empty ? 'mt-auto' : ''}>
              <p className={typography.body.B2}>
                <strong>{card.benefit}</strong> 
              </p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center ">
          <Button variant="primary" className="mt-20">Book Now</Button>
        </div>
        <div className="text-center mt-10">
          <div className={`font-inter text-[28px] font-weight-700 font-bold mb-5`}>Booking Price: {bookingFee}</div>
          <p className={`mb-7 max-w-3xl text-[18px] mx-auto`}>
            {bookingNote}
          </p>
        </div>
      </Container>
    </section>
  );
}   

export default PackageCards;