import React from 'react';
import benifitimg1 from '../assets/images/png/benefit-img1.png';
import benifitimg2 from '../assets/images/png/benefit-img2.png';
import benifitimg3 from '../assets/images/png/benefit-img3.png';
import benifitimg4 from '../assets/images/png/benefit-img4.png';

const ChooseUs = () => {
    return (
        <div className='bg-[#0E1122]'>
            <div className='container mx-auto px-3'>
                <div className='pt-[50px]  sm:pt-[70px] md:pb-[26px]'>
                    <h4 className='text-[#95959D] font-medium text-[14px] tracking-[8%] text-center mb-[20px]'>why choose 8Fig? </h4>
                    <p className='ff_abril_bold font-semibold text-[39.42px] text-center text-[#FFFFFF]'>The benefits</p>
                </div>
                <div className='flex flex-row flex-wrap xl:pt-[92.18px] py-[65px] xl:pb-[132px] xl:justify-between'>
                    <div className='xl:w-[25%] md:w-[48%] w-full flex justify-center'>
                        <div>
                            <p className='md:max-w-[188px] uppercase text-[#FFFFFF] font-medium text-[14px] tracking-[8%] text-center mb-[25px] xl:mb-[42px] leading-[159%]  '>quick and easy approval process</p>
                            <img src={benifitimg1} alt="benifitimg1" className='w-full max-w-[166px] mx-auto ' />
                        </div>
                    </div>
                    <div className='xl:w-[25%] md:w-[48%] w-full flex justify-center pt-[50px] md:pt-0'>
                        <div>
                            <p className='md:max-w-[188px] uppercase text-[#FFFFFF] font-medium text-[14px] tracking-[8%] text-center mb-[25px] xl:mb-[42px] leading-[159%]  '>Flexibility to change your plan on the go</p>
                            <img src={benifitimg2} alt="benifitimg2" className='w-full max-w-[166px]  mx-auto' />
                        </div>
                    </div>
                    <div className='xl:w-[25%] md:w-[48%] w-full flex justify-center pt-[50px] xl:pt-0'>
                        <div>
                            <p className='md:max-w-[188px] uppercase text-[#FFFFFF] font-medium text-[14px] tracking-[8%] text-center mb-[25px] xl:mb-[42px] leading-[159%]  '>Freedom to use your funding as you choose</p>
                            <img src={benifitimg3} alt="benifitimg3" className='w-full max-w-[166px]  mx-auto' />
                        </div>
                    </div>
                    <div className='xl:w-[25%] md:w-[48%] w-full flex justify-center pt-[50px] xl:pt-0'>
                        <div className=''>
                            <p className='md:max-w-[170px] uppercase text-[#FFFFFF] font-medium text-[14px] tracking-[8%] text-center mb-[25px] xl:mb-[42px] leading-[240%]  '>Fixed cost of capital
                                No hidden fees, equity-free</p>
                            <img src={benifitimg4} alt="benifitimg4" className='w-full max-w-[166px]  mx-auto' />
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default ChooseUs
