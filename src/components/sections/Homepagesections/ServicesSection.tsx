import Image from 'next/image';
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
    <div className="bg-gray-100 p-2 rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-102 flex flex-col h-full min-h-[480px] max-h-[480px]">
      <div className="bg-gray-200 aspect-[16/9] relative m-3">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
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
      <div className="px-5 pb-5 flex flex-col flex-grow">
        <h4 className={`${typography.heading.h4} mb-3 line-clamp-2 h-20`}>{title}</h4>
        <p className={`text-gray-700 mb-4 flex-grow line-clamp-3 ${typography.body.B2}`}>{description}</p>
        <div className="mt-auto">
          <Link 
            href={link} 
            className={`${typography.text.single2} inline-flex items-center text-gray-900 font-medium hover:underline`}
          >
            <strong>Learn more</strong> <HiArrowNarrowRight className="ml-1" />
          </Link>
        </div>
      </div>
    </div>
  );
};

const ServicesSection = () => {
  const services = [
    {
      title: "Personalized Styling Consultation",
      description: "Transform your wardrobe with expert styling tailored to your personality and lifestyle.",
      link: "/services/PersonalizedStylingConsultation",
    },
    {
      title: "Photoshoot Styling & Management ",
      description: "Bring your vision to life with professional styling and seamless photoshoot management.",
      link: "/services/PhotoshootStyling&Management",
    },
    {
      title: "Wedding Styling & Photoshoot",
      description: "Create unforgettable memories with bespoke wedding styling and stunning photoshoot packages.",
      link: "/services/WeddingStyling&Photoshoot",
    },
    {
      title: "Makeup & Styling Trainings",
      description: "Master the art of makeup and styling with expert-led training sessions designed for all skill levels.",
      link: "/services/Makeup&StylingTraining",
    },
    {
      title: "Soft Skills & Etiquette Coaching",
      description: "Elevate your personal & professional interactions with tailored soft skills and etiquette coaching.",
      link: "/services/SoftSkills&EtiquetteCoaching",
    },
    {
      title: "Corporate Styling, Makeup, Photoshoot & Soft Skills",
      description: "Elevate your presence with styling, makeup, and coaching tailored to align with your career goals.",
      link: "/services/CorporateStyling,Makeup,Photoshoot&SoftSkills",
    },
  ];

  return (
    <section className="min-h-[80vh] py-16">
      <Container marginLeft="5vw" marginRight="5vw">
        <div className="text-center mb-15">
          <h2 className={`${typography.heading.h2} mb-4`}>Our Styling Services</h2>
          <p className={`${typography.body.B1} max-w-4xl mx-auto text-gray-700`}>
          You’re not made to blend in—and neither are our looks. Our styling services are crafted to help you turn heads for all the right reasons. From wedding glam to everyday confidence, we bring out the boldest, most brilliant version of you—one outfit at a time.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 mb-8 mx-auto">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ServicesSection;