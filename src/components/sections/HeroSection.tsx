import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';
import { typography } from '@/styles/typography';

const HeroSection = () => {
  return (
    <section className="min-h-[80vh] flex items-center border-t border-blue-100">
      <Container marginLeft="5vw" marginRight="5vw">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-8">
          <div>
            <h1 className={`${typography.heading.h1} mb-6`}>
              Your Style
            </h1>
            <p className={`${typography.body.large} text-gray-600 mb-8 `}>
              Transform your wardrobe or your look with a personalized styling experience designed just for you.
            </p>
            <Button size="md">Get Styled Now</Button>
          </div>
          <div className="bg-gray-200 rounded-lg h-64 md:h-80 lg:h-96 flex items-center justify-center">
            <div className="text-center">
              <div className="inline-block">
                <svg className="w-16 h-16 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.5 6c-1.4 0-2.5 1.1-2.5 2.5 0 .3 0 .6.2.9l-2.3 2.3c-.5-.3-1.1-.4-1.7-.4s-1.2.1-1.7.4L9.2 9.4c.1-.3.2-.6.2-.9 0-1.4-1.1-2.5-2.5-2.5S4.5 7.1 4.5 8.5c0 .3 0 .6.2.9l-2.3 2.3c-.3-.1-.6-.2-.9-.2C.1 11.5-1 12.6-1 14s1.1 2.5 2.5 2.5 2.5-1.1 2.5-2.5c0-.3 0-.6-.2-.9l2.3-2.3c.5.3 1.1.4 1.7.4s1.2-.1 1.7-.4l2.3 2.3c-.1.3-.2.6-.2.9 0 1.4 1.1 2.5 2.5 2.5s2.5-1.1 2.5-2.5c0-.3 0-.6-.2-.9l2.3-2.3c.3.1.6.2.9.2 1.4 0 2.5-1.1 2.5-2.5s-1.1-2.5-2.5-2.5z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
