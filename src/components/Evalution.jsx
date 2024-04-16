import React from 'react';
import img1 from '../assets/images/png/revenue_img.png';
import img2 from '../assets/images/png/manufacturing-img.png';
import img3 from '../assets/images/png/cash-flow-img.png';
import { Onesvg, Twosvg } from './Iconimg';

const Evalution = () => {
  return (
    <div className='bg-[#efece6] pt-[50px] sm:pt-[70px] md:pt-[120px]'>
      <div className='container mx-auto px-3'>
        <div className='flex flex-row flex-wrap justify-between'>
          <div className='lg:w-[44%] w-[90%]'>
            <img src={img1} alt="img1" className='w-full rounded-[40px] ' />
          </div>
          <div className='lg:w-[48%] w-full'>
            <Onesvg />
            <h3 className='ff_abril_bold text-[#0E1122] font-semibold text-[30px] sm:text-[34px] md:text-[39.42px] leading-[120%] mb-[4px] lg:max-w-[364px] mt-[14px]'>Get an AI evaluation of your supply chain needs</h3>
            <p className='lg:max-w-[333px] mb-[20px] text-[16px] sm:text-[22px] font-medium text-[##0E1122] '>By analyzing your sales velocity and growth potential.</p>
            <div className='flex lg:justify-start i tems-center'>
              <button className='font-medium text-[16px] text-center text-nowrap px-[20px] py-[6px] rounded-[24px] text-[#fff] bg-[#4C57FF] hover:bg-[#fff] hover:text-[#4C57FF] transition-all ease-linear duration-300  '>Apply now</button>
            </div>
          </div>
        </div>
        <div className='flex flex-row flex-wrap justify-between pt-[180px]'>
          <div className='lg:w-[48%] w-full'>
            <div className='lg:pl-[48px]'>
              <Twosvg />
              <h3 className='ff_abril_bold text-[#0E1122] font-semibold text-[30px] sm:text-[34px] md:text-[39.42px] leading-[120%] mb-[4px] mt-[14px]'>Get funded</h3>
              <p className='lg:max-w-[367px] mb-[20px] text-[16px] sm:text-[22px] font-medium text-[##0E1122] '>Never run out of cash, receive funding injections right when you need them.</p>
              <div className='flex lg:justify-start i tems-center'>
                <button className='font-medium text-[16px] text-center text-nowrap px-[20px] py-[6px] rounded-[24px] text-[#fff] bg-[#4C57FF] hover:bg-[#fff] hover:text-[#4C57FF] transition-all ease-linear duration-300  '>Apply now</button>
              </div>
            </div>
          </div>
          <div className='lg:w-[48%] w-[90%]'>
            <img src={img2} alt="img2" className='w-full' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Evalution
