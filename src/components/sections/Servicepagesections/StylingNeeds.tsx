import Image from 'next/image';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import { typography } from '@/styles/typography';

interface StylingNeedsProps {
  title: string;
  description: string;
  imageUrl?: string;
  NeedsQuestion: string;
  Needs?: {
    id: string | number;
    term: string;
    text: string;
  }[];
}

const defaultNeeds = [
  { 
    id: 1, 
    term: "Expert Wardrobe Transformation",
    text: "Transform your wardrobe with personalized recommendations that match your body type and lifestyle."
  },
  { 
    id: 2, 
    term: "Authentic Style Discovery",
    text: "Discover your unique personal style that enhances your confidence and makes you feel authentically you."
  },
  { 
    id: 3, 
    term: "Wardrobe Maximization",
    text: "Learn how to make the most of your existing wardrobe and identify key pieces that will elevate your look."
  },
  { 
    id: 4, 
    term: "Smart Shopping Guidance",
    text: "Save time and money by shopping smarter with guidance from a professional who understands what works for you."
  },
  { 
    id: 5, 
    term: "Life Event Preparation",
    text: "Prepare for important life events, interviews, or changes with a wardrobe that supports your goals."
  }
];

const StylingNeeds = ({ title, description, imageUrl = "/images/styling-needs.jpg", NeedsQuestion, Needs = defaultNeeds }: StylingNeedsProps) => {
  return (
    <section className="py-12 mb-12">
      <Container marginLeft="5vw" marginRight="1vw">
        <div className="text-center mb-20">
          <h1 className={`${typography.heading.h1} text-4xl mb-6 max-w43xl mx-auto`}>{title}</h1>
          <p className={`${typography.body.B1} max-w-4xl mx-auto text-gray-600 mb-5`}>
            {description}
          </p>
          <div className="mt-8">
            <Button variant="primary" className="px-9 py-3">Book Now</Button>
          </div>
        </div>

        <div className="relative overflow-hidden mb-20">
          <div className="absolute top-0 right-0 bottom-0 w-4/5 bg-gray-200"></div>
          
          <div className="relative py-16">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-15 items-center px-4">
              <div className="bg-gray-300 rounded-lg aspect-square flex items-center justify-center relative overflow-hidden h-128">
                <Image 
                  src={imageUrl}
                  alt="Personal Styling" 
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              <div className="pr-4 pl-2 md:pr-0">
                <h2 className={`${typography.heading.h2} mb-8`}>
                  {NeedsQuestion}
                </h2>
                
                <ul className="space-y-6">
                  {Needs.map((item) => (
                    <li key={item.id} className="flex items-start">
                      <span className="text-black mr-5 mt-1 flex-shrink-0">
                        <svg width="35" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M5 12H30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M18 5L30 12L18 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      <div>
                        <span className={`${typography.body.B1} font-medium inline`}>
                          {item.term}
                        </span>
                        <span className={`${typography.body.B1} font-normal ml-1 inline`}>
                          {item.text}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default StylingNeeds;