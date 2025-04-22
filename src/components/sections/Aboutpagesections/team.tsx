import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { typography } from '@/styles/typography';
import Container from '@/components/ui/Container';

interface TeamMember {
  id: number;
  name: string;
  title: string;
  bio: string;
  image: string;
  linkedIn: string;
}

const TeamSection: React.FC = () => {
  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: "Avani Mutgi",
      title: "Co-Founder & Graphic Designer",
      bio: "Lorem ipsum dolor sit amet consectetur. Ut cursus convallis lorem felis purus tortor consequat lacus. Lacus habitant bibendum mattis platea.",
      image: "/team/avani.png",
      linkedIn: "https://linkedin.com/in/username2"
    },
    {
      id: 2,
      name: "Preety Pareek",
      title: "Co-Founder & Head of Fashion Styling",
      bio: "Lorem ipsum dolor sit amet consectetur. Ut cursus convallis lorem felis purus tortor consequat lacus. Lacus habitant bibendum mattis platea.",
      image: "/team/preety.png",
      linkedIn: "https://linkedin.com/in/username3"
    },
    {
      id: 3,
      name: "Akash Mutgi",
      title: "Business Consultant",
      bio: "Lorem ipsum dolor sit amet consectetur. Ut cursus convallis lorem felis purus tortor consequat lacus. Lacus habitant bibendum mattis platea.",
      image: "/team/akash.png",
      linkedIn: "https://linkedin.com/in/username1"
    },
    {
      id: 4,
      name: "Ishwari Hakari",
      title: "Head of UI/UX & Social Media",
      bio: "Lorem ipsum dolor sit amet consectetur. Ut cursus convallis lorem felis purus tortor consequat lacus. Lacus habitant bibendum mattis platea.",
      image: "/team/ishwari.png",
      linkedIn: "https://linkedin.com/in/username4"
    },
    {
      id: 5,
      name: "Mayank Tanwar",
      title: "Software Engineer",
      bio: "Lorem ipsum dolor sit amet consectetur. Ut cursus convallis lorem felis purus tortor consequat lacus. Lacus habitant bibendum mattis platea.",
      image: "/team/mayank.png",
      linkedIn: "https://linkedin.com/in/username6"
    },
    {
      id: 6,
      name: "Aditi Chauhan",
      title: "Intern Fashion Stylist",
      bio: "Lorem ipsum dolor sit amet consectetur. Ut cursus convallis lorem felis purus tortor consequat lacus. Lacus habitant bibendum mattis platea.",
      image: "/team/aditi.png",
      linkedIn: "https://linkedin.com/in/username5"
    },
    
  ];

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
    <Container marginLeft="5vw" marginRight="5vw">
      <h2 className={`${typography.heading.h2} text-3xl md:text-4xl font-bold text-center mb-16`}>
        Meet the Team That Makes The<br className="hidden md:block" /> Magic Happen
      </h2>
      
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {teamMembers.map((member) => (
          <div 
            key={member.id} 
            className="bg-gray-50 rounded-lg overflow-hidden shadow-sm h-full "
          >
            <div className="aspect-[4/2.5] relative bg-gray-200">
              <Image 
                src={member.image} 
                alt={member.name}
                layout="fill"
                objectFit="cover"
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg=="
              />
            </div>
            
            <div className="p-4 bg-gray-50 flex flex-col h-full">
              <p className={`${typography.body.B1}font-bold text-xl mb-2`}><strong>{member.name}</strong></p>
              <p className={`${typography.body.B2 }text-gray-600 mb-5`}>{member.title}</p>
              
              <p className={`${typography.body.B3}text-gray-700 mb-1`}>{member.bio}</p>
              <div className="flex justify-end">
                <Link href={member.linkedIn} target="_blank" rel="noopener noreferrer">
                  <div className="bg-gray-200 w-15 h-15 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors relative -right-6 top-6">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 0 24 24" 
                      fill="currentColor" 
                      className="w-6 h-6"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-0.966 0-1.75-0.79-1.75-1.764s0.784-1.764 1.75-1.764 1.75 0.79 1.75 1.764-0.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
    </section>
  );
};

export default TeamSection;