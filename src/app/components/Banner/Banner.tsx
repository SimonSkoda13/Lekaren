import React from 'react';
import Image from "next/image";
import Button from "@/app/components/Button";

interface BannerProps {
    image: string;
    title: string;
    description: any;
    button: string;
    address: any;
    openingHours: any;
    badge: string;
}

function Banner(props: BannerProps) {
    const {image, title, description, button, address, openingHours, badge} = props;
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 cntn md:my-16 my-7 md:gap-11 gap-6">
            <div className="flex flex-col col-span-1">
                <div className="text-white text-xs bg-primary.500 rounded-full self-start px-2 my-3 md:my-4">
                    {badge}
                </div>
                <div className="text-2xl md:text-3xl font-bold leading-[3.4rem]">
                    {title}
                </div>
                <div className="text-sm my-3 md:my-4 md:mb-9 text-gray-500">
                    {description}
                </div>
                <Button text={button} color="primary.500"/>

            </div>
            <div>
                <div className="bg-repeat dots w-[6rem] h-[3.2rem] relative z-0 ml-auto right-[-1.7rem] top-6"/>
                <div className="flex flex-col col-span-1 relative h-[90vw] md:h-[35vw] z-10">
                    <Image src={image} alt={"image banner"} fill objectFit='cover' className="rounded-xl"/>
                </div>
                <div className="relative z-20 flex flex-row gap-5 top-[-2.8rem]">
                    <div className="relative z-20 bg-white rounded-xl p-4 flex flex-col gap-2 ml-auto">
                        <h1 className="text-xs font-extrabold">Adresa</h1>
                        <span className="text-2xs">{address}</span>
                    </div>
                    <div className="relative z-20 bg-white rounded-xl p-4 flex flex-col gap-2 mr-3">
                        <h1 className="text-xs font-extrabold">Otváracie hodiny</h1>
                        <span className="text-2xs">{openingHours}</span>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Banner;