"use client";
import Image from 'next/image';
import Container from '@/components/ui/Container';
import { typography } from '@/styles/typography';
import Button from '@/components/ui/Button';
import { useState } from 'react';

const PricingSection = () => {
    
    const [activePlan, setActivePlan] = useState('monthly');
    const [activePlanIndex, setActivePlanIndex] = useState(1);

    const plans = [
        {
        title: "Basic",
        description: "Get a basic styling package that includes a consultation and a personalized style guide.",
        price: "$00/month",
        features: [
            "30-minute consultation",
            "Personalized style guide",
            "1 outfit suggestion",
            "1 revision",
        ],
        },
        {
        title: "Standard",
        description: "Get a standard styling package that includes a consultation, personalized style guide, and 2 outfit suggestions.",
        price: "$000/month",
        features: [
            "30-minute consultation",
            "Personalized style guide",
            "2 outfit suggestions",
            "2 revisions",
        ],
        },
        {
        title: "Premium",
        description: "Get a premium styling package that includes a consultation, personalized style guide, and 3 outfit suggestions.",
        price: "$000/month",
        features: [
            "30-minute consultation",
            "Personalized style guide",
            "3 outfit suggestions",
            "3 revisions",
        ],
        },
    ];
    
    return (
        <section className="py-12">
        <Container marginLeft="5vw" marginRight="5vw">
            <div className="text-center mb-12">
            <h2 className={`${typography.heading.h3} mb-4`}>Choose Your Styling Plan</h2>
            <p className={`${typography.body.base} text-gray-600 max-w-3xl mx-auto`}>
            We offer flexible monthly and yearly plans to fit your needs and budget. Discover the perfect option to unlock our services and start today.
            </p>
            </div>
            <div className="flex gap-10 mb-12 justify-center">
            <Button 
                size="md" 
                variant={activePlan === 'monthly' ? 'primary' : 'secondary'}
                onClick={() => setActivePlan('monthly')}
                className='border-2 border-gray-900'
            >
                Monthly Plan
            </Button>
            <Button 
                size="md" 
                variant={activePlan === 'annual' ? 'primary' : 'secondary'}
                onClick={() => setActivePlan('annual')}
                className='border-2 border-gray-900'
            >
                Annual Plan
            </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:max-w-5xl sm:max-w-6x1 mx-auto ">
            {plans.map((plan, index) => (
                <div key={index} className={`${(activePlanIndex == index)? 'bg-gray-300': 'bg-white'}  rounded-lg overflow-hidden border-2 border-gray-900 md:max-w-md lg:max-w-lg`} onClick={() => setActivePlanIndex(index)}>
                <div className="p-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 mb-5">
                    <h4 className={`${typography.heading.h5} font-bold`}>{plan.title}</h4>
                    {plan.title === "Standard" && (
                        <div className={`${(activePlanIndex != index) ? 'bg-gray-300' : 'bg-white'} border-2 border-gray-900 rounded-full text-center p-1 max-w-[100px]`}>
                            Popular
                        </div>
                    )}
                    </div>
                    <div className="mb-7">
                    <span className={`${typography.heading.h3} text-2xl font-bold text-gray-800`}>{plan.price}</span>
                    </div>
                    <p className={`text-gray-800 mb-5 ${typography.body.small}`}>{plan.description}</p>
                    <hr className="border-gray-800 my-5" />
                    <ul className="text-gray-700 font-bold ">
                    {plan.features.map((feature, index) => (
                        <li key={index} className="flex items-center mb-2">
                        <svg className="w-4 h-4 text-gray-600 mr-2" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M9 16.17l-4.17-4.17-1.42 1.41 5.59 5.59 12-12-1.41-1.42z" />
                        </svg>
                        {feature}
                        </li>
                    ))}
                    </ul>
                    <div className="mt-5 mb-5 justify-center flex">
                        <Button size="md" className="mt-6">{(activePlanIndex != index)?"Get Started":"Get Styled Now"}</Button>
                    </div>

                </div>
                </div>
            ))}
            </div>
        </Container>
        </section>
    );
}

export default PricingSection;