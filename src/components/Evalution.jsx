import React from 'react';
import img1 from '../assets/images/web.p/revenue_img.webp';
import img2 from '../assets/images/web.p/manufacturing-img.webp';
import img3 from '../assets/images/web.p/cash_flow.webp';
import cardimg from '../assets/images/web.p/revene-img2.webp';
import cashimg from '../assets/images/web.p/cash-flow2.webp';

import { Onesvg, Threesvg, Twosvg } from './Iconimg';

const Evalution = () => {
  return (
    <div className='bg-[#efece6] py-[50px] sm:py-[70px] md:py-[120px]'>
      <div className='container mx-auto px-3 xl:max-w-[1132px] xl:pb-[50px]'>
        <div className='flex flex-row items-center flex-wrap justify-between'>
          <div className='lg:w-[44%] w-full'>
            <div className='relative'>
              <img src={img1} alt="img1" className='w-full rounded-[40px] ' />
              <img src={cardimg} alt="cardimg" className='rounded-[20px] absolute lg:left-[5%] xl:left-[-22%] xl:bottom-[19%] lg:bottom-[-22%] max-w-[218px] w-full lg:block hidden ' />
            </div>
          </div>
          <div className='lg:w-[48%] w-full pt-[30px] sm:pt-[40px] lg:pt-0 '>
            <Onesvg />
            <h3 className='ff_abril_bold text-[#0E1122] font-semibold text-[30px] sm:text-[34px] md:text-[39.42px] leading-[116%] mb-[4px] lg:max-w-[364px] mt-[14px]'>Get an AI evaluation of your supply <span className='lg:block'>chain needs</span></h3>
            <p className='lg:max-w-[333px] mb-[20px] text-[16px] sm:text-[22px] font-medium text-[##0E1122] '>By analyzing your sales velocity and growth potential.</p>
            <div className='flex lg:justify-start i tems-center'>
              <button className='font-medium text-[16px] text-center text-nowrap px-[20px] py-[6px] rounded-[24px] text-[#fff] bg-[#4C57FF] hover:bg-[#fff] hover:text-[#4C57FF] transition-all ease-linear duration-300  '>Apply now</button>
            </div>
          </div>
        </div>
        <div className='flex lg:flex-row items-center flex-col-reverse flex-wrap justify-between pt-[50px] sm:pt-[80px] lg:pt-[180px]'>
          <div className='lg:w-[48%] w-full pt-[30px] sm:pt-[40px] lg:pt-0'>
            <div className='lg:pl-[48px]'>
              <Twosvg />
              <h3 className='ff_abril_bold text-[#0E1122] font-semibold text-[30px] sm:text-[34px] md:text-[39.42px] leading-[120%] mb-[4px] mt-[14px]'>Get funded</h3>
              <p className='lg:max-w-[367px] mb-[20px] text-[16px] sm:text-[22px] font-medium text-[##0E1122] '>Never run out of cash, receive funding injections right when you need them.</p>
              <div className='flex lg:justify-start i tems-center'>
                <button className='font-medium text-[16px] text-center text-nowrap px-[20px] py-[6px] rounded-[24px] text-[#fff] bg-[#4C57FF] hover:bg-[#fff] hover:text-[#4C57FF] transition-all ease-linear duration-300  '>Apply now</button>
              </div>
            </div>
          </div>
          <div className='lg:w-[48%] w-full'>
            <img src={img2} alt="img2" className='w-full' />
          </div>
        </div>
        <div className='flex flex-row flex-wrap items-center justify-between pt-[50px] sm:pt-[80px] lg:pt-[164px]'>
          <div className='lg:w-[44%] w-full'>
            <div className='relative'>
              <img src={img3} alt="img1" className='w-full rounded-[40px] ' />
              <img src={cashimg} alt="cardimg" className='rounded-[32px] absolute lg:left-[3%] xl:left-[-13%] xl:bottom-[62%] lg:bottom-[75%] max-w-[218px] w-full lg:block hidden ' />
            </div>
          </div>
          <div className='lg:w-[48%] w-full pt-[30px] sm:pt-[40px] lg:pt-0 '>
         <Threesvg/>
            <h3 className='ff_abril_bold text-[#0E1122] font-semibold text-[30px] sm:text-[34px] md:text-[39.42px] leading-[116%] mb-[4px] lg:max-w-[310px] mt-[14px]'>Experience cash flow freedom</h3>
            <p className='lg:max-w-[367px] mb-[20px] text-[16px] sm:text-[22px] font-medium text-[##0E1122] '>Use the AI to continuously analyze and fund your business.</p>
            <div className='flex lg:justify-start i tems-center'>
              <button className='font-medium text-[16px] text-center text-nowrap px-[20px] py-[6px] rounded-[24px] text-[#fff] bg-[#4C57FF] hover:bg-[#fff] hover:text-[#4C57FF] transition-all ease-linear duration-300  '>Apply now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Evalution
