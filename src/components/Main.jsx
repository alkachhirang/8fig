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
                <div className="container mx-auto sm:px-3 px-[25px] xl:max-w-[750px] lg:pt-[46px] lg:pb-[50px] py-[50px]">
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
