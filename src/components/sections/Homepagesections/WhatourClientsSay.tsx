"use client";
import Container from "@/components/ui/Container";
import { typography } from "@/styles/typography";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface ClientCardProps {
    name: string;
    title: string;
    description: string;
    image: string;
}

const ClientCard = ({ name, title, description, image }: ClientCardProps) => {
    return (
        <div className="bg-gray-100 rounded-2xl p-5 shadow-lg h-full flex flex-col mx-2 mb-5">
            <p className={`${typography.body.B2} text-gray-800 text-sm leading-relaxed mb-6 flex-grow`}>
                {description}
            </p>
            <div className="flex items-center gap-3 mt-auto">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow">
                    <img src={image} alt={name} className="w-8 h-8 rounded-full object-cover"/>
                </div>
                <div>
                    <h4 className={`${typography.body.B2} font-bold`}>{name}</h4>
                    <p className={`${typography.body.B2} text-gray-500`}>{title}</p>
                </div>
            </div>
        </div>
    );
};

const NextArrow = ({ onClick }: { onClick?: () => void }) => (
    <button
        onClick={onClick}
        className="absolute top-1/2 right-[-20px] lg:right-[-30px] transform -translate-y-1/2 text-gray-900 p-2 rounded-full hover:text-gray-600 transition z-10 bg-white/80"
    >
        <FaChevronRight size={20} className="md:text-2xl" />
    </button>
);

const PrevArrow = ({ onClick }: { onClick?: () => void }) => (
    <button
        onClick={onClick}
        className="absolute top-1/2 left-[-20px] lg:left-[-30px] transform -translate-y-1/2 text-gray-900 p-2 rounded-full hover:text-gray-600 transition z-10 bg-white/80"
    >
        <FaChevronLeft size={20} className="md:text-2xl" />
    </button>
);

const clients = [
    {
        name: "Jane Doe",
        title: "CEO, Company",
        description: "Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalar consectur elementum tempus sit hac.Lorem ipsum dolor sit amet ipsum consecte tur. Lorem ipsum dolor sit amet consecte tur.",
        image: "https://cdn-icons-png.flaticon.com/128/456/456212.png",
    },
    {
        name: "John Doe",
        title: "CEO, Company",
        description: "Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalar consectur elementum tempus sit hac.Lorem ipsum dolor sit amet ipsum consecte tur. Lorem ipsum dolor sit amet consecte tur.",
        image: "https://cdn-icons-png.flaticon.com/128/456/456212.png",
    },
    {
        name: "Alice Smith",
        title: "Marketing Head",
        description: "Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalar consectur elementum tempus sit hac.Lorem ipsum dolor sit amet ipsum consecte tur. Lorem ipsum dolor sit amet consecte tur.",
        image: "https://cdn-icons-png.flaticon.com/128/456/456212.png",
    },
    {
        name: "Jane Doe",
        title: "CEO, Company",
        description: "Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalar consectur elementum tempus sit hac.Lorem ipsum dolor sit amet ipsum consecte tur. Lorem ipsum dolor sit amet consecte tur.",
        image: "https://cdn-icons-png.flaticon.com/128/456/456212.png",
    },
    {
        name: "John Doe",
        title: "CEO, Company",
        description: "Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalar consectur elementum tempus sit hac.Lorem ipsum dolor sit amet ipsum consecte tur. Lorem ipsum dolor sit amet consecte tur.",
        image: "https://cdn-icons-png.flaticon.com/128/456/456212.png",
    },
    {
        name: "Alice Smith",
        title: "Marketing Head",
        description: "Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalar consectur elementum tempus sit hac.Lorem ipsum dolor sit amet ipsum consecte tur. Lorem ipsum dolor sit amet consecte tur.",
        image: "https://cdn-icons-png.flaticon.com/128/456/456212.png",
    },
    {
        name: "Jane Doe",
        title: "CEO, Company",
        description: "Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalar consectur elementum tempus sit hac.Lorem ipsum dolor sit amet ipsum consecte tur. Lorem ipsum dolor sit amet consecte tur.",
        image: "https://cdn-icons-png.flaticon.com/128/456/456212.png",
    },
    {
        name: "John Doe",
        title: "CEO, Company",
        description: "Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalar consectur elementum tempus sit hac.Lorem ipsum dolor sit amet ipsum consecte tur. Lorem ipsum dolor sit amet consecte tur.",
        image: "https://cdn-icons-png.flaticon.com/128/456/456212.png",
    },
    {
        name: "Alice Smith",
        title: "Marketing Head",
        description: "Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalar consectur elementum tempus sit hac.Lorem ipsum dolor sit amet ipsum consecte tur. Lorem ipsum dolor sit amet consecte tur.",
        image: "https://cdn-icons-png.flaticon.com/128/456/456212.png",
    },
    {
        name: "Jane Doe",
        title: "CEO, Company",
        description: "Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalar consectur elementum tempus sit hac.Lorem ipsum dolor sit amet ipsum consecte tur. Lorem ipsum dolor sit amet consecte tur.",
        image: "https://cdn-icons-png.flaticon.com/128/456/456212.png",
    },
    {
        name: "John Doe",
        title: "CEO, Company",
        description: "Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalar consectur elementum tempus sit hac.Lorem ipsum dolor sit amet ipsum consecte tur. Lorem ipsum dolor sit amet consecte tur.",
        image: "https://cdn-icons-png.flaticon.com/128/456/456212.png",
    },
    {
        name: "Alice Smith",
        title: "Marketing Head",
        description: "Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalar consectur elementum tempus sit hac.Lorem ipsum dolor sit amet ipsum consecte tur. Lorem ipsum dolor sit amet consecte tur.",
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
            <Container marginLeft="5vw" marginRight="5vw">
                <div className="text-center">
                    <h2 className={`${typography.heading.h2} mb-4`}>What Our Clients Say</h2>
                    <p className={`${typography.body.B1} text-gray-600 max-w-2xl mx-auto`}>
                        Every look we create comes with a story—and these are some of the most heartwarming ones.
                    </p>
                </div>
                <div className="relative py-10">
                    <Slider {...settings} className="overflow-visible mb-10">
                        {clients.map((client, index) => (
                            <div key={index} className="px-2">
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