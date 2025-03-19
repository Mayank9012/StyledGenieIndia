import Image from 'next/image';
import Container from '@/components/ui/Container';
import { typography } from '@/styles/typography';

const HowItWorksSection = () => {
  const steps = [
    {
      title: "Step 1: Book a Consultation",
      description: "Schedule a 30-minute consultation with one of our stylists to discuss your needs and preferences.",
      imageUrl: "",
    },
    {
      title: "Step 2: Personalized Styling",
      description: "Receive a personalized styling package tailored to your needs and preferences.",
      imageUrl: "",
    },
    {
      title: "Step 3: Get Styled",
      description: "Get styled by our expert stylists and transform your wardrobe or look.",
      imageUrl: "",
    },
  ];

  return (
    <section className="py-12">
      <Container marginLeft="5vw" marginRight="5vw">
        <div className="text-center mb-12">
          <h2 className={`${typography.heading.h3} mb-4`}>How It Works: Discover in 3 Simple Steps</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-13">
          {steps.map((step, index) => (
            <div key={index} className="rounded-lg overflow-hidden">
                    <div className="bg-gray-200 aspect-[16/9] relative m-3 rounded-full">
                      {step.imageUrl ? (
                        <Image
                          src={step.imageUrl}
                          alt={step.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className="object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center p-4 m-2 mb-5">
                          <svg viewBox="0 0 24 24" width="28" height="28" className="text-gray-800">
                            <circle cx="12" cy="8" r="2" fill="currentColor" />
                            <path d="M5 21l4.5-9L14 16l4-10" stroke="currentColor" strokeWidth="2" fill="none" />
                            <polygon points="5,21 19,21 12,14" fill="currentColor" />
                          </svg>
                        </div>
                      )}
                    </div>
              <div className="p-5 text-center">
                <h4 className={`${typography.heading.h6} mb-5`}>{step.title}</h4>
                <p className={`text-gray-700 mb-5 ${typography.body.small}`}>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default HowItWorksSection;