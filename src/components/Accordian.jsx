import React, { useState } from "react";
import { Plusicon, Subracticon } from './Iconimg';

const Accordian = () => {
    const [openAccordion, setOpenAccordion] = useState(null);
    const toggleAccordion = (index) => {
        setOpenAccordion(openAccordion === index ? null : index);
    };

    const accordionData = [
        {
            title: "Who is eligible for a Growth Plan?",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis officiis vero ducimus aperiam blanditiis odio quos facilis aliquid iusto dolorum tempore iste ipsam, illo amet?",
        },
        {
            title: "How much funding can I qualify for?",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis officiis vero ducimus aperiam blanditiis odio quos facilis aliquid iusto dolorum tempore iste ipsam, illo amet?"
        },
        {
            title: "What is the cost of the Growth Plan?										",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis officiis vero ducimus aperiam blanditiis odio quos facilis aliquid iusto dolorum tempore iste ipsam, illo amet?"
        },
        {
            title: "Does 8fig charge money for its services?",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis officiis vero ducimus aperiam blanditiis odio quos facilis aliquid iusto dolorum tempore iste ipsam, illo amet?"
        },
    ];
    return (
        <div className='bg-[#EFECE6] lg:py-[60px] py-[50px]'>
            <div className='container mx-auto sm:px-3 px-[25px]'>
                <h4 className='font-medium text-[14px] tracking-[8%] text-center mb-[8px] lg:mb-[20px] leading-[158%]' data-aos="fade-down">still have questions?</h4>
                <p className='font-semibold text-[30px] sm:text-[39.42px] ff_abril_bold text-[#0E1122] text-center' data-aos="fade-down">Learn more with FAQ</p>

                <div className="accordion lg:pt-[60px] sm:pt-[40px] pt-[30px]" data-aos="zoom-in-up">
                    {accordionData.map((item, index) => (
                        <div className="accordion-item" key={index} >
                            <div className="flex justify-between items-center accordion-title"
                                onClick={() => toggleAccordion(index)}>
                                <div className="font-medium text-[14px] sm:text-[18px] leading-[134%]"
                                >
                                    {item.title}
                                </div>
                                {openAccordion === index ? <Subracticon /> : <Plusicon />}
                            </div>
                            <div
                                className={`accordion-content ${openAccordion === index ? "open" : ""
                                    } font-medium text-[14px] sm:text-[16px] text-[#0E1122] max-w-[800px]`}>
                                {item.content}
                            </div>

                        </div>
                    ))
                    }
                </div >
            </div>
        </div>
    )
}
export default Accordian;