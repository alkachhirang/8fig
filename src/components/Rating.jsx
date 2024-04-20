import React from 'react';
import ratingimg from '../assets/images/png/rating-img.png';
import trustimg from '../assets/images/png/trustoilot-img.png';

const Rating = () => {
    return (
        <div className='bg-[#0E1122]'>
            <div className='container sm:px-3 px-[25px] mx-auto'>
                <div className='flex flex-row flex-wrap justify-between items-center py-[50px] sm:py-[65px] md:py-[89.63px]'>
                    <div className='xl:w-[20%] lg:w-[23%] sm:w-[49%] w-[46%] max-xs:w-full' data-aos="zoom-in">
                        <div className='max-sm:flex flex-col justify-center items-center'>
                            <img src={ratingimg} alt="ratingimg" className=' max-w-[83px] w-full max-lg:ml-[60px] lg:mx-auto' />
                            <p className='ff_abril_bold text-[#fff] font-semibold text-[35px] sm:text-[50px] text-start lg:text-center mt-[10px] leading-[137%]'>‘A’ Rating </p>
                        </div>
                    </div>
                    <div className='lg:w-[22%] sm:w-[49%] w-[46%] max-xs:w-full max-xs:pt-[40px]' data-aos="zoom-in">
                        <div className='max-sm:flex flex-col justify-center items-center'>
                            <h4 className='font-normal text-[#fff] text-[16px] sm:text-[19px] text-start lg:text-center leading-[158%]'>Average store growth</h4>
                            <p className='ff_abril_bold text-[#fff] text-[35px] sm:text-[50px] text-start lg:text-center mt-[10px] leading-[139%]'>400%</p>
                        </div>
                    </div>
                    <div className='lg:w-[22%] sm:w-[49%] w-[46%] max-xs:w-full pt-[40px] lg:pt-0 max-sm:flex flex-col justify-center items-center' data-aos="zoom-in">
                        <div className='flex flex-col lg:items-end sm:items-center mr-[45px]'>
                            <img src={trustimg} alt="trustimg" className='max-w-[140px] w-full h-full max-h-[34px]' />
                        </div>
                        <p className='ff_abril_bold text-[#fff] text-[35px] sm:text-[50px] text-start lg:text-center mt-[10px] leading-[139%]'>Excellent</p>
                    </div>
                    <div className='lg:w-[22%] sm:w-[49%] w-[46%] max-xs:w-full pt-[40px] lg:pt-0 ' data-aos="zoom-in">
                        <div className='max-sm:flex flex-col justify-center items-center'>
                            <h4 className='font-normal text-[#fff] text-[19px] text-start lg:text-center leading-[158%]'>Funding given</h4>
                            <p className='ff_abril_bold text-[#fff] text-[35px] sm:text-[50px] text-start lg:text-center mt-[10px] leading-[139%]'>$450M+</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Rating;
