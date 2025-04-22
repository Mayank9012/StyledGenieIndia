import Image from 'next/image';
import Container from '@/components/ui/Container';
import { typography } from '@/styles/typography';

const HowItWorksSection = () => {
  const steps = [
    {
      title: "Step 1: Select a Service",
      description: "Choose from our wide range of services that suit your personal style.",
      imageUrl: "",
    },
    {
      title: "Step 2: Fill Out Style Form",
      description: "Tell us about your fashion taste, preferences & goals – it only takes a minute!",
      imageUrl: "",
    },
    {
      title: "Step 3: Book Your Service",
      description: "Once you book, our team will get in touch with you for a personalized consultation.",
      imageUrl: "",
    },
  ];

  return (
    <section className="py-12">
      <Container marginLeft="5vw" marginRight="5vw">
        <div className="text-center mb-12">
          <h2 className={`${typography.heading.h2} mb-4`}>How It Works: Discover in 3 Simple Steps</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {steps.map((step, index) => (
            <div key={index} className="rounded-lg overflow-hidden">
                    <div className="bg-gray-200 relative m-3 rounded-full w-[200px] h-[200px] sm: w-[100px] sm: h-[100px] justify-center items-center flex mx-auto">
                      {step.imageUrl ? (
                        <Image
                          src={step.imageUrl}
                          alt={step.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className="object-cover"

                        />
                      ) : (
                        <div className="flex items-center justify-center p-4 m-2 mb-5 rounded-full bg-gray-300">
                          <svg viewBox="0 0 24 24" width="28" height="28" className="text-gray-800">
                          <circle cx="12" cy="8" r="2" fill="currentColor" />
                          <path d="M5 21l4.5-9L14 16l4-10" stroke="currentColor" strokeWidth="2" fill="none" />
                          <polygon points="5,21 19,21 12,14" fill="currentColor" />
                          </svg>
                        </div>
                      )}
                    </div>
              <div className="p-2 text-center">
                <h3 className={`${typography.heading.h3} mb-5`}>{step.title}</h3>
                <p className={`flex items-center text-gray-700 mb-5 ${typography.body.B2} max-w-3xl mx-auto`}>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default HowItWorksSection;