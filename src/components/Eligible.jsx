import React from 'react';
import { Annual, Location, Monthly, Operation } from './Iconimg';

const Eligible = () => {
    return (
        <div className='sm:py-[60px] py-[50px]'>
            <div className='container mx-auto sm:px-3 px-[25px]'>
                <div className='flex flex-col items-center justify-center'>
                    <h4 className='font-medium text-[#76767F] text-[14px] traxking-[8%] uppercase text-center mb-[20px]'>make the cut</h4>
                    <p className='ff_abril_bold font-semibold text-[39.42px] text-[#0E1122] lg:max-w-[438px] leading-[150%] text-center mb-[20px]'>Who’s eligible for getting our AI funding?</p>
                    <button className='font-medium text-[16px] text-center text-nowrap px-[19px] py-[5px] border-solid border-[1px] border-transparent hover:border-[#4C57FF] rounded-[24px] text-[#fff] bg-[#4C57FF] hover:bg-[#fff] hover:text-[#4C57FF] transition-all ease-linear duration-300  '>Apply now</button>
                </div>
                <div className='flex flex-row flex-wrap justify-between pt-[30px] sm:pt-[40px] md:pt-[65px]'>
                    <div className='lg:w-[23%] sm:w-[49%] w-full pt-[24px] md:pt-0'>
                        <div className='px-[22px] py-[40px] cursor-pointer hover:shadow-[0px_-5px_10px_0px_rgba(0,0,0,0.2)] transition-all ease-linear duration-300 '>
                            <Location />
                            <p className='text-[16px] font-semibold tracking-[8%] text-[#0E1122] my-[10px] leading-[138%] uppercase'>Location</p>
                            <p className='font-normal text-[18px] text-[#0E1122]   '>The business must be based in the US or Canada, excluding Quebec.</p>
                        </div>
                    </div>
                    <div className='lg:w-[23%] sm:w-[49%] w-full pt-[24px] md:pt-0'>
                        <div className='px-[22px] py-[40px] cursor-pointer hover:shadow-[0px_-5px_10px_0px_rgba(0,0,0,0.2)] transition-all ease-linear duration-300 '>
                            <Operation />
                            <p className='text-[16px] font-semibold tracking-[8%] text-[#0E1122] mt-[10px] mb-[10px] leading-[138%] uppercase'>Operation period</p>
                            <p className='font-normal text-[18px] text-[#0E1122]'>The store’s operational period should be at least 6 months.</p>
                        </div>
                    </div>
                    <div className='lg:w-[23%] sm:w-[49%] w-full pt-[24px] md:pt-[40px] lg:pt-0'>
                        <div className='px-[22px] py-[40px] cursor-pointer hover:shadow-[0px_-5px_10px_0px_rgba(0,0,0,0.2)] transition-all ease-linear duration-300 '>
                            <Annual />
                            <p className='text-[16px] font-semibold tracking-[8%] text-[#0E1122] mt-[10px] mb-[10px] leading-[138%] uppercase'>Annual Revenue</p>
                            <p className='font-normal text-[18px] text-[#0E1122]'>Annual revenue must exceed $100,000.</p>
                        </div>
                    </div>
                    <div className='lg:w-[23%] sm:w-[49%] w-full pt-[24px] md:pt-[40px] lg:pt-0'>
                        <div className='px-[22px] py-[40px] cursor-pointer hover:shadow-[0px_-5px_10px_0px_rgba(0,0,0,0.2)] transition-all ease-linear duration-300 '>
                            <Monthly />
                            <p className='text-[16px] font-semibold tracking-[8%] text-[#0E1122] mt-[10px] mb-[10px] leading-[138%] uppercase'>Annual Revenue</p>
                            <p className='font-normal text-[18px] text-[#0E1122]'>Annual revenue must exceed $100,000.</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Eligible;
