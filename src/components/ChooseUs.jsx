import React from 'react';
import benifitimg1 from '../assets/images/web.p/benefit-img1.webp';
import benifitimg2 from '../assets/images/web.p/benefit-img2.webp';
import benifitimg3 from '../assets/images/web.p/benefit-img3.webp';
import benifitimg4 from '../assets/images/web.p/benefit-img4.webp';

const ChooseUs = () => {
    return (
        <div className='bg-[#0E1122]'>
            <div className='container mx-auto px-3'>
                <div className='pt-[50px]  sm:pt-[60px] md:pb-[26px]'>
                    <h4 className='text-[#95959D] font-medium text-[14px] tracking-[8%] text-center mb-[20px]'>why choose 8Fig? </h4>
                    <p className='ff_abril_bold font-semibold text-[39.42px] text-center text-[#FFFFFF]'>The benefits</p>
                </div>
                <div className='flex flex-row flex-wrap xl:pt-[80px] py-[65px] xl:pb-[110px] xl:justify-between'>
                    <div className='xl:w-[25%] md:w-[48%] w-full flex justify-center'>
                        <div>
                            <p className='md:max-w-[188px] uppercase text-[#FFFFFF] font-medium text-[14px] tracking-[8%] text-center mb-[25px] xl:mb-[42px] leading-[159%]  '>quick and easy approval process</p>
                            <img src={benifitimg1} alt="benifitimg1" className='w-full max-w-[166px] mx-auto ' />
                        </div>
                    </div>
                    <div className='xl:w-[25%] md:w-[48%] w-full flex justify-center pt-[50px] md:pt-0'>
                        <div>
                            <p className='md:max-w-[188px] uppercase text-[#FFFFFF] font-medium text-[14px] tracking-[8%] text-center mb-[25px] xl:mb-[33px] leading-[159%]  '>Flexibility to change your plan on the go</p>
                            <img src={benifitimg2} alt="benifitimg2" className='w-full max-w-[205px]  mx-auto' />
                        </div>
                    </div>
                    <div className='xl:w-[25%] md:w-[48%] w-full flex justify-center pt-[50px] xl:pt-0'>
                        <div>
                            <p className='md:max-w-[188px] uppercase text-[#FFFFFF] font-medium text-[14px] tracking-[8%] text-center mb-[25px] xl:mb-[48px] leading-[159%]  '>Freedom to use your funding as you choose</p>
                            <img src={benifitimg3} alt="benifitimg3" className='w-full max-w-[288px]  mx-auto' />
                        </div>
                    </div>
                    <div className='xl:w-[25%] md:w-[48%] w-full flex justify-center pt-[50px] xl:pt-0'>
                        <div className=''>
                            <p className='md:max-w-[170px] uppercase text-[#FFFFFF] font-medium text-[14px] tracking-[8%] text-center mb-[25px] xl:mb-[20px] leading-[240%]  '>Fixed cost of capital
                                No hidden fees, equity-free</p>
                            <img src={benifitimg4} alt="benifitimg4" className='w-full max-w-[95px]  mx-auto' />
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default ChooseUs
