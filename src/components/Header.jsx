import React from 'react';
import { Navlogo } from './Iconimg';
import headerimg from '../assets/images/web.p/header-img.webp';

const Header = () => {
    return (
        <div className='bg-BgHero bg-cover lg:bg-bgsize bg-repeat lg:bg-center min_height min-h-screen pb-[50px] xl:pb-[165px]'>
            <div className='p-[24px] max-w-[100px]'>
                <a href=''>
                    <Navlogo />
                </a>
            </div>
            <div className='container xl:max-w-[1164px] mx-auto px-3'>
                <div className='flex flex-row flex-wrap justify-between pt-[50px] sm:pt-[70px] lg:pt-[150px] xl:pt-[200px] sm:pb-[50px]'>
                    <div className='lg:w-[40%] w-fll flex items-end lg:pt-[70px]'>
                        <div>
                            <h2 className='ff_abril_medium font-bold text-[40px] sm:text-[60px] xl:text-[62.12px] leading-[106%] text-[#fff] mb-[10x] lg:mb-[24px] text-center lg:text-start'>Get AI funding for your store</h2>
                            <p className='font-medium text-[16px] sm:text-[22px] leading-[137%] text-[#fff] mb-[24px] lg:max-w-[408px] lg:text-start text-center'>AI technology that predicts, plans, and protects your cash flow.</p>
                            <div className='flex lg:justify-start justify-center items-center'>
                                <button className='font-medium text-[16px] text-center text-nowrap px-[44px] py-[10px] rounded-[24px] text-[#fff] bg-[#4C57FF] hover:bg-[#fff] hover:text-[#4C57FF] transition-all ease-linear duration-300  '>Get funded</button>
                            </div>
                        </div>
                    </div>
                    <div className='lg:w-[40%] w-full flex lg:justify-end justify-center translate_x_45 pt-[40px] lg:pt-0'>
                        <img src={headerimg} alt="headerimg" className='w-full max-w-[365px]' />
                    </div>
                </div>

            </div>


        </div>
    )
}

export default Header;
