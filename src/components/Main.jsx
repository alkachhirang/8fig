import React from 'react';
import Slider from "react-slick";
import sliderimg1 from '../assets/images/png/slider-img1.png';
import sliderimg2 from '../assets/images/png/Amazon.png';
import sliderimg3 from '../assets/images/png/shopify.png';
import sliderimg4 from '../assets/images/png/Ebay.png';
import sliderimg5 from '../assets/images/png/slider-img5.png';

const Main = () => {
    var settings = {
        dots: false,
        infinite: true,
        arrows: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2.5,
                    slidesToScroll: 1
                }
            },
        ]
    };
    return (
        <div className='bg-[#0E1122] pt-[46px] pb-[54px] '>
            <div className='container mx-auto px-3 xl:max-w-[750px]'>
                <Slider {...settings}>
                    <a href='' className='mr-[10px]'>
                        <img src={sliderimg1} alt="sliderimg1" className='w-full max-w-[129px] max-h-[22px] h-full text-center' />
                    </a>
                    <a>
                        <img src={sliderimg2} alt="sliderimg2" className='w-full max-w-[56px] max-h-[20.36px] h-full mx-auto mt-[10px]' />
                    </a>
                    <a>
                        <img src={sliderimg3} alt="sliderimg3" className='w-full max-w-[85px] max-h-[24px] h-full' />
                    </a>
                    <a>
                        <img src={sliderimg4} alt="sliderimg4" className='w-full max-w-[60px] max-h-[24px] h-full' />
                    </a>
                    <a>
                        <img src={sliderimg5} alt="sliderimg5" className='w-full max-w-[101px] max-h-[23px] h-full' />
                    </a>
                </Slider>
            </div>
        </div>
    )
}

export default Main
