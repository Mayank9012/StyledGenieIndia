import Image from 'next/image';
import Container from '@/components/ui/Container';
import { typography } from '@/styles/typography';

interface ImageCardProps {
    imageUrl1: string;
    imageUrl2: string;
}

const ImageCard = ({ imageUrl1, imageUrl2 }: ImageCardProps) => {
    return (
        <div className="group h-full w-full [perspective:1000px]">
            <div className="relative w-full h-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateX(180deg)]">
                <div className="absolute inset-0 [backface-visibility:hidden]">
                    <img 
                    src={imageUrl1}
                    alt="Captured Moment"
                    className="w-full h-full object-cover rounded-lg"
                    />
                </div>
                <div className="absolute inset-0 [transform:rotateX(180deg)] [backface-visibility:hidden]">
                    <img
                    src={imageUrl2}
                    alt="Captured Moment"
                    className="w-full h-full object-cover rounded-lg"
                    />
                </div>
            </div>
        </div>
    );
}

const CapturedMoments = () => {
    const images = [
        {
            imageUrl1: "https://www.codewithfaraz.com/tools/placeholder?size=600x400&bgColor=d3d3d3&textColor=000000&format=jpg&text=Image_1\n",
            imageUrl2: "https://www.codewithfaraz.com/tools/placeholder?size=600x400&bgColor=b2beb5&textColor=000000&format=jpg&text=Image_1_Flip\n",
        },
        {
            imageUrl1: "https://www.codewithfaraz.com/tools/placeholder?size=600x400&bgColor=d3d3d3&textColor=000000&format=jpg&text=Image_2\n",
            imageUrl2: "https://www.codewithfaraz.com/tools/placeholder?size=600x400&bgColor=b2beb5&textColor=000000&format=jpg&text=Image_2_Flip\n",
        },
        {
            imageUrl1: "https://www.codewithfaraz.com/tools/placeholder?size=600x400&bgColor=d3d3d3&textColor=000000&format=jpg&text=Image_3\n",
            imageUrl2: "https://www.codewithfaraz.com/tools/placeholder?size=600x400&bgColor=b2beb5&textColor=000000&format=jpg&text=Image_3_Flip\n",
        },
        {
            imageUrl1: "https://www.codewithfaraz.com/tools/placeholder?size=600x400&bgColor=d3d3d3&textColor=000000&format=jpg&text=Image_4\n",
            imageUrl2: "https://www.codewithfaraz.com/tools/placeholder?size=600x400&bgColor=b2beb5&textColor=000000&format=jpg&text=Image_4_Flip\n",
        },
        {
            imageUrl1: "https://www.codewithfaraz.com/tools/placeholder?size=600x400&bgColor=d3d3d3&textColor=000000&format=jpg&text=Image_5\n",
            imageUrl2: "https://www.codewithfaraz.com/tools/placeholder?size=600x400&bgColor=b2beb5&textColor=000000&format=jpg&text=Image_5_Flip\n",
        },
        {
            imageUrl1: "https://www.codewithfaraz.com/tools/placeholder?size=600x400&bgColor=d3d3d3&textColor=000000&format=jpg&text=Image_6\n",
            imageUrl2: "https://www.codewithfaraz.com/tools/placeholder?size=600x400&bgColor=b2beb5&textColor=000000&format=jpg&text=Image_6_Flip\n",
        }
    ];

    return (
        <div className="py-16">
            <Container marginLeft="5vw" marginRight="5vw">
                <div className="text-center mb-16">
                    <h1 className={`${typography.heading.h2} mb-6`}>Our Work in Frames</h1>
                    <p className= {`${typography.body.B1} text-gray-600 mb-8 max-w-2xl mx-auto`}>
                    Each snapshot holds a story—From behind-the-scenes magic to picture-perfect results, here’s a glimpse into our styling journey.
                    </p>
                </div>
                <h3 className={`${typography.heading.h3} md:text-2xl italic font-medium text-center mb-8`}>
                            Coming Soon!
                          </h3>
                {/*}
                <div className="flex space-x-5 h-[600px]">
                    <div className="flex flex-col w-1/3 space-y-5">
                        <div className="h-[50%]">
                            <ImageCard 
                                imageUrl1={images[0].imageUrl1} 
                                imageUrl2={images[0].imageUrl2} 
                            />
                        </div>
                        <div className="h-[50%]">
                            <ImageCard 
                                imageUrl1={images[1].imageUrl1} 
                                imageUrl2={images[1].imageUrl2} 
                            />
                        </div>
                    </div>

                    <div className="flex flex-col w-1/3 space-y-5">
                        <div className="h-[65%]">
                            <ImageCard 
                                imageUrl1={images[2].imageUrl1} 
                                imageUrl2={images[2].imageUrl2} 
                            />
                        </div>
                        <div className="h-[35%]">
                            <ImageCard 
                                imageUrl1={images[3].imageUrl1} 
                                imageUrl2={images[3].imageUrl2} 
                            />
                        </div>
                    </div>

                    <div className="flex flex-col w-1/3 space-y-5">
                        <div className="h-[35%]">
                            <ImageCard 
                                imageUrl1={images[4].imageUrl1} 
                                imageUrl2={images[4].imageUrl2} 
                            />
                        </div>
                        <div className="h-[65%]">
                            <ImageCard 
                                imageUrl1={images[5].imageUrl1} 
                                imageUrl2={images[5].imageUrl2} 
                            />
                        </div>
                    </div>
                </div>*/}
            </Container>
        </div>
    );  
}

export default CapturedMoments;