import Link from 'next/link';
import Container from '@/components/ui/Container';
import { typography } from '@/styles/typography';
import { HiArrowNarrowRight } from 'react-icons/hi';

interface ServiceCardProps {
  title: string;
  description: string;
  imageUrl?: string;
  link: string;
}

const ServiceCard = ({ title, description, imageUrl, link }: ServiceCardProps) => {
  return (
    <div className="bg-gray-100 rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
      <div className="bg-gray-200 aspect-[16/9] relative m-3">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover ml-2 mr-2"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center p-4 m-2 mb-5">
            <svg viewBox="0 0 24 24" width="48" height="48" className="text-gray-800">
              <circle cx="12" cy="8" r="2" fill="currentColor" />
              <path d="M5 21l4.5-9L14 16l4-10" stroke="currentColor" strokeWidth="2" fill="none" />
              <polygon points="5,21 19,21 12,14" fill="currentColor" />
            </svg>
          </div>
        )}
      </div>
      <div className="p-5">
        <h4 className={`${typography.heading.h6} mb-5`}>{title}</h4>
        <p className={`text-gray-700 mb-5 ${typography.body.small}`}>{description}</p>
        <Link href={link} className="inline-flex items-center text-gray-900 font-medium hover:underline">
          Learn more <HiArrowNarrowRight className="ml-1" />
        </Link>
      </div>
    </div>
  );
};

const ServicesSection = () => {
  const services = [
    {
      title: "Personal Styling",
      description: "Tailored fashion guidance for individuals.",
      link: "/services/personal",
    },
    {
      title: "Wedding & Occassion Styling",
      description: "Styling solutions for weddings and special events.",
      link: "/services/wedding",
    },
    {
      title: "Corporate & Commercial Styling",
      description: "Styling for professionals, brands, and media.",
      link: "/services/corporate",
    },
    {
      title: "Photoshoot",
      description: "Bespoke sessions capturing your special moments with loved ones, or your personal photoshoot.",
      link: "/services/photoshoot",
    },
    {
      title: "Makeup & Hair",
      description: "Customized hair and makeup design, tailored to enhance your individual style or event aesthetic.",
      link: "/services/makeup-hair",
    },
  ];

  return (
<section className="min-h-[80vh] py-16">
  <Container marginLeft="5vw" marginRight="5vw" className="mx-clamp(6px, 2vw, 120px);">
    <div className="text-center mb-15">
      <h2 className={`${typography.heading.h3} mb-4`}>Our Styling Services</h2>
      <p className="max-w-4xl mx-auto text-gray-700">
        Discover personalized styling designed to elevate your personal brand and boost your confidence. We provide 
        tailored solutions, transforming your look to authentically reflect your unique style and aspirations.
      </p>
    </div>
    
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 mb-8 max-w-5xl mx-auto">
      {services.slice(0, 3).map((service, index) => (
        <ServiceCard key={index} {...service} />
      ))}
    </div>
    
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 mb-8 max-w-2xl mx-auto">
      {services.slice(3, 5).map((service, index) => (
        <ServiceCard key={index + 3} {...service} />
      ))}
    </div>
  </Container>
</section>
  );
};

export default ServicesSection;
