/* eslint-disable react/no-unescaped-entities */
"use client";
import Container from "@/components/ui/Container";
import { typography } from "@/styles/typography";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Image from "next/image";

interface ClientCardProps {
    name: string;
    title: string;
    description: string;
    image: string;
}

const ClientCard = ({ name, title, description, image }: ClientCardProps) => {
    return (
        <div className="bg-gray-100 rounded-2xl p-5 mx-auto shadow-lg w-full sm:w-[300px]">
            <p className="text-gray-800 text-sm leading-relaxed mb-6">
                {description}
            </p>
            <div className="flex items-center gap-3 mt-5">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow">
                    <Image
                        src={image}
                        alt={name}
                        width={48}
                        height={48}
                        className="rounded-full object-cover"
                    />
                </div>
                <div>
                    <h4 className="font-semibold text-black text-sm">{name}</h4>
                    <p className="text-gray-500 text-xs">{title}</p>
                </div>
            </div>
        </div>
    );
};

const NextArrow = ({ onClick }: { onClick?: () => void }) => (
    <button
        onClick={onClick}
        className="absolute top-1/2 right-[-60px] transform -translate-y-1/2 text-gray-900 p-2 rounded-full hover:text-gray-600 transition"
    >
        <FaChevronRight size={30} />
    </button>
);

const PrevArrow = ({ onClick }: { onClick?: () => void }) => (
    <button
        onClick={onClick}
        className="absolute top-1/2 left-[-60px] transform -translate-y-1/2 text-gray-900 p-2 rounded-full hover:text-gray-600 transition"
    >
        <FaChevronLeft size={30} />
    </button>
);

const clients = [
    {
        name: "Jane Doe",
        title: "CEO, Company",
        description: "Lorem ipsum dolor sit amet consectetur adipiscing elit semper dalar consectetur elementum tempus sit hac. Lorem ipsum dolor sit amet ipsum consectetur. Lorem ipsum dolor sit amet consectetur.",
        image: "https://cdn-icons-png.flaticon.com/128/456/456212.png",
    },
    {
        name: "John Doe",
        title: "CEO, Company",
        description: "Lorem ipsum dolor sit amet consectetur adipiscing elit semper dalar consectetur elementum tempus sit hac. Lorem ipsum dolor sit amet ipsum consectetur. Lorem ipsum dolor sit amet consectetur.",
        image: "https://cdn-icons-png.flaticon.com/128/456/456212.png",
    },
    {
        name: "Alice Smith",
        title: "Marketing Head",
        description: "Lorem ipsum dolor sit amet consectetur adipiscing elit semper dalar consectetur elementum tempus sit hac. Lorem ipsum dolor sit amet ipsum consectetur. Lorem ipsum dolor sit amet consectetur.",
        image: "https://cdn-icons-png.flaticon.com/128/456/456212.png",
    },
    {
        name: "Jane Doe",
        title: "CEO, Company",
        description: "Lorem ipsum dolor sit amet consectetur adipiscing elit semper dalar consectetur elementum tempus sit hac. Lorem ipsum dolor sit amet ipsum consectetur. Lorem ipsum dolor sit amet consectetur.",
        image: "https://cdn-icons-png.flaticon.com/128/456/456212.png",
    },
    {
        name: "John Doe",
        title: "CEO, Company",
        description: "Lorem ipsum dolor sit amet consectetur adipiscing elit semper dalar consectetur elementum tempus sit hac. Lorem ipsum dolor sit amet ipsum consectetur. Lorem ipsum dolor sit amet consectetur.",
        image: "https://cdn-icons-png.flaticon.com/128/456/456212.png",
    },
    {
        name: "Alice Smith",
        title: "Marketing Head",
        description: "Lorem ipsum dolor sit amet consectetur adipiscing elit semper dalar consectetur elementum tempus sit hac. Lorem ipsum dolor sit amet ipsum consectetur. Lorem ipsum dolor sit amet consectetur.",
        image: "https://cdn-icons-png.flaticon.com/128/456/456212.png",
    },
    {
        name: "Jane Doe",
        title: "CEO, Company",
        description: "Lorem ipsum dolor sit amet consectetur adipiscing elit semper dalar consectetur elementum tempus sit hac. Lorem ipsum dolor sit amet ipsum consectetur. Lorem ipsum dolor sit amet consectetur.",
        image: "https://cdn-icons-png.flaticon.com/128/456/456212.png",
    },
    {
        name: "John Doe",
        title: "CEO, Company",
        description: "Lorem ipsum dolor sit amet consectetur adipiscing elit semper dalar consectetur elementum tempus sit hac. Lorem ipsum dolor sit amet ipsum consectetur. Lorem ipsum dolor sit amet consectetur.",
        image: "https://cdn-icons-png.flaticon.com/128/456/456212.png",
    },
    {
        name: "Alice Smith",
        title: "Marketing Head",
        description: "Lorem ipsum dolor sit amet consectetur adipiscing elit semper dalar consectetur elementum tempus sit hac. Lorem ipsum dolor sit amet ipsum consectetur. Lorem ipsum dolor sit amet consectetur.",
        image: "https://cdn-icons-png.flaticon.com/128/456/456212.png",
    },
    {
        name: "Jane Doe",
        title: "CEO, Company",
        description: "Lorem ipsum dolor sit amet consectetur adipiscing elit semper dalar consectetur elementum tempus sit hac. Lorem ipsum dolor sit amet ipsum consectetur. Lorem ipsum dolor sit amet consectetur.",
        image: "https://cdn-icons-png.flaticon.com/128/456/456212.png",
    },
    {
        name: "John Doe",
        title: "CEO, Company",
        description: "Lorem ipsum dolor sit amet consectetur adipiscing elit semper dalar consectetur elementum tempus sit hac. Lorem ipsum dolor sit amet ipsum consectetur. Lorem ipsum dolor sit amet consectetur.",
        image: "https://cdn-icons-png.flaticon.com/128/456/456212.png",
    },
    {
        name: "Alice Smith",
        title: "Marketing Head",
        description: "Lorem ipsum dolor sit amet consectetur adipiscing elit semper dalar consectetur elementum tempus sit hac. Lorem ipsum dolor sit amet ipsum consectetur. Lorem ipsum dolor sit amet consectetur.",
        image: "https://cdn-icons-png.flaticon.com/128/456/456212.png",
    },
];

const WhatourClientsSay = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 3000,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    dots: true,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                },
            },
        ],
    };

    return (
        <section className="py-12 relative overflow-visible">
            <Container marginLeft="60px" marginRight="60px">
                <div className="text-center">
                    <h2 className={`${typography.heading.h3} mb-4`}>What Our Clients Say</h2>
                    <p className={`${typography.body.base} text-gray-600 max-w-3xl mx-auto`}>
                        Discover how our services have made a difference. These testimonials highlight the satisfaction and positive outcomes we've achieved.
                    </p>
                </div>
                <div className="relative py-8">
                    <Slider {...settings} className="overflow-visible mb-6">
                        {clients.map((client, index) => (
                            <div key={index} className="px-1 py-8 relative overflow-visible">
                                <ClientCard {...client} />
                            </div>
                        ))}
                    </Slider>
                </div>
            </Container>
        </section>
    );
};

export default WhatourClientsSay;
