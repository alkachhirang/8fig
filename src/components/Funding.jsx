import React from 'react';
import fundingimg from '../assets/images/png/funding-img.png';

const Funding = () => {
    return (
        <div className='py-[45px]'>
            <div className='container mx-auto sm:px-3 px-[25px] '>
                <div className='flex flex-row flex-wrap lg:justify-between  items-center'>
                    <div className='lg:w-[40%] w-full' data-aos="fade-right">
                        <h2 className='ff_abril_bold font-semibold text-[30px] sm:text-[39.42px] leading-[150%] mb-[20px] lg:text-start text-center'>  Become an 8 figure <span className='lg:block'>seller with AI funding</span></h2>
                        <div className='flex justify-center lg:justify-start'>
                            <button className='font-medium text-[16px] text-center text-nowrap px-[19px] py-[5px] border-solid border-[1px] border-transparent hover:border-[#4C57FF] rounded-[24px] text-[#fff] bg-[#4C57FF] hover:bg-[#fff] hover:text-[#4C57FF] transition-all ease-linear duration-300  '>Apply now</button>
                        </div>
                    </div>
                    <div className='lg:w-[49%] w-full flex justify-end pt-[40px] lg:pt-0' data-aos="fade-left">
                        <img src={fundingimg} alt="fundingimg" className='rounded-[40px] lg:max-w-[440px] w-full' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Funding;
