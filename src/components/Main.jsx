// import React from 'react';
// import Slider from "react-slick";
// import sliderimg1 from '../assets/images/png/slider-img1.png';
// import sliderimg2 from '../assets/images/png/Amazon.png';
// import sliderimg3 from '../assets/images/png/shopify.png';
// import sliderimg4 from '../assets/images/png/Ebay.png';
// import sliderimg5 from '../assets/images/png/slider-img5.png';

// const Main = () => {
//     var settings = {
//         dots: false,
//         infinite: true,
//         arrows: false,
//         speed: 500,
//         slidesToShow: 5,
//         slidesToScroll: 1,
//         responsive: [
//             {
//                 breakpoint: 900,
//                 settings: {
//                     slidesToShow: 4,
//                     slidesToScroll: 2,
//                     initialSlide: 2
//                 }
//             },
//             {
//                 breakpoint: 600,
//                 settings: {
//                     slidesToShow: 2.5,
//                     slidesToScroll: 1
//                 }
//             },
//         ]
//     };
//     return (
//         <div className='bg-[#0E1122] pt-[46px] pb-[54px] '>
//             <div className='container mx-auto px-3 xl:max-w-[750px]'>
//                 <Slider {...settings}>
//                     <a href='' className='mr-[10px]'>
//                         <img src={sliderimg1} alt="sliderimg1" className='w-full max-w-[129px] max-h-[22px] h-full text-center' />
//                     </a>
//                     <a>
//                         <img src={sliderimg2} alt="sliderimg2" className='w-full max-w-[56px] max-h-[20.36px] h-full mx-auto mt-[10px]' />
//                     </a>
//                     <a>
//                         <img src={sliderimg3} alt="sliderimg3" className='w-full max-w-[85px] max-h-[24px] h-full' />
//                     </a>
//                     <a>
//                         <img src={sliderimg4} alt="sliderimg4" className='w-full max-w-[60px] max-h-[24px] h-full' />
//                     </a>
//                     <a>
//                         <img src={sliderimg5} alt="sliderimg5" className='w-full max-w-[101px] max-h-[23px] h-full' />
//                     </a>
//                 </Slider>
//             </div>
//         </div>
//     )
// }

// export default Main



import React from "react";
import Slider from "react-slick";
import { slidedata } from "./Mapdata";

const Trusted = () => {
    var settings = {
        arrows: false,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "0px",
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 990,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 770,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 473,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <>
            <div className="bg-[#0E1122]">
                <div className="container mx-auto xl:max-w-[750px] lg:pt-[46px] lg:pb-[54px] py-[50px]">
                        <div className="">
                            <Slider {...settings}>
                                {slidedata.map((slides, e) => {
                                    return (
                                        <div key={e} className="px-6">
                                            <a
                                                href={''}
                                                className="flex items-center justify-center "
                                            >
                                                <img src={slides.Image} alt="sliderimg" className={`${slides.width}`} />
                                            </a>
                                        </div>
                                    );
                                })}
                            </Slider>
                        </div>
                </div>
            </div>
        </>
    );
};

export default Trusted;
