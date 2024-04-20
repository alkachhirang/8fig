import React from 'react';
import { footerlink } from './Mapdata';
import { Navlogo } from './Iconimg';

const Footer = () => {
    return (
        <div className="bg-[#0E1122] sm:pt-[56px] sm:pb-[63.34px] py-[50px]">
            <div className="container mx-auto xl:max-w-[1359px] px-3">
                <div className="flex flex-row items-center flex-wrap justify-between">
                    <div className="lg:w-3/12 w-full">
                        <div className="flex max-lg:flex-col lg:gap-[77.64px] gap-4">
                            <a href=''>
                               <Navlogo/>
                            </a>
                            <p className="text-[#76767F] text-[14px] font-medium tracking-[8%]">
                                {" "}
                                8fig, 1717 W 6th St, Austin, Texas
                            </p>
                        </div>
                    </div>
                    <div className="lg:w-7/12 w-full">
                        <div className="flex flex-row flex-wrap justify-between items-center max-lg:flex-col-reverse">
                            <div className="lg:w-5/12 w-full sm:pt-8 pt-4 lg:pt-0">
                                <p className="lg:text-center text-[#76767F] text-[14px] font-medium tracking-[8%]">
                                    © {new Date().getFullYear()} 8fig - All Rights Reserved
                                </p>
                            </div>
                            <div className="lg:w-3/12 w-full flex gap-[36px] items-baseline lg:justify-end sm:pt-8 pt-4 lg:pt-0">
                                {footerlink.map((icon, index) => {
                                    return (
                                        <div key={index}>
                                            <a href={icon.link} aria-label={icon.label} target='blank'>
                                                {icon.footersvg}
                                            </a>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Footer;