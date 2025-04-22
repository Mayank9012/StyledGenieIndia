import React from 'react';
import Image from 'next/image';
import Tara from '@/images/Tara.svg';
import Container from '@/components/ui/Container';
import { typography } from '@/styles/typography';
const AboutSection: React.FC = () => {
  return (
    <section className="py-12">
    <div className="w-full h-64 md:h-80 lg:h-126 relative -mt-12 mb-12">
      <Image 
        src="https://www.codewithfaraz.com/tools/placeholder?size=600x400&bgColor=d3d3d3&textColor=000000&format=jpg&text=A\n"
        alt="Styltara Studio Banner" 
        layout="fill"
        objectFit="cover"
        priority
        className='relative inset-0 object-cover'
      />
    </div>
    <Container marginLeft="5vw" marginRight="5vw">
     
      <h2 className={`${typography.heading.h2} text-3xl md:text-4xl font-bold mb-8`}>About Us</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        <div>
          <div className={`${typography.body.B2} font-bold text-xl mb-2`}><strong>Styltara Studio –</strong> Style That Makes You Shine</div>
          <p className={`${typography.body.B2} mb-4 `}>
            Imagine standing in front of your wardrobe, staring at a sea of
            clothes but feeling like you have nothing to wear. Sound familiar?
            You're not alone. Fashion is everywhere, but styling? That's an art—
            and not everyone has mastered it.
          </p>
          
          <p className={`${typography.body.B2} mb-4 `}>
            Enter Styltara Studio, where we turn fashion confusion into effortless
            elegance. Born from the creative minds of Preety Pareek, a
            passionate fashion stylist with an eye for detail, and Avani Mutgi, a
            designer who brings bold ideas to life, Styltara is not just a styling
            studio—it's a transformation hub.
          </p>
          
          <p className={`${typography.body.B2} mb-4 `}>
            Whether it's curating the perfect wedding look, creating
            commercially stunning visuals, personal styling, and countless other
            services we offer, we believe that fashion should do more than just
            fit—it should speak. Our philosophy is simple: every individual is a
            star, and we're here to make them shine.
          </p>
        </div>
        
        <div className="flex items-center justify-center">
          <div className="bg-gray-200 rounded-lg w-[70%] h-full max-w-md aspect-square flex items-center justify-center">
            <div className="w-20 h-24 relative">
              <Image 
                src="https://www.codewithfaraz.com/tools/placeholder?size=600x400&bgColor=d3d3d3&textColor=000000&format=jpg&text=AboutUs\n" 
                alt="Styltara Studio" 
                layout="fill"
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="flex justify-center">
          <div className="w-48 h-48 md:w-64 md:h-64 relative">
            <Image 
              src={Tara} 
              alt="Styltara Logo" 
              layout="fill"
              className="object-contain"
            />
          </div>
        </div>
        
        <div>
        <p className={`${typography.body.B2} mb-6 `}>
            <span className="font-bold">The name 'Tara' means star,</span> and that's exactly what we
            want for every client—to step out feeling radiant,
            confident, and unstoppable. We don't just style outfits; we
            tell stories through fashion, crafting looks that celebrate
            individuality.
          </p>
          
          <p className={`${typography.body.B2} mb-6 `}>
            So, whether you're dressing for the spotlight or simply
            want to elevate your everyday wardrobe, Styltara Studio is
            where your journey to effortless style begins. Because the
            right styling doesn't just change how you look—it changes
            how you feel.
          </p>
          
          <h4 className={`${typography.heading.h4} md:text-2xl italic font-medium`}>
            Let's style, shine, and make every moment a fashion statement.
          </h4>
        </div>
      </div>
    </Container>
    </section>
  );
};

export default AboutSection;