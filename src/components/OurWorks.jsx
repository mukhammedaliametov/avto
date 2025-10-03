import React from "react";
import Works from "../assets/works.png";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

const OurWorks = () => {
  const worksItems = [
    {
      img: Works,
      name: "Название работы",
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna",
    },
    {
      img: Works,
      name: "Название работы",
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna",
    },
    {
      img: Works,
      name: "Название работы",
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna",
    },
  ];
  return (
    <div className="max-w-[1220px] mx-auto px-[16px] xl:px-0 font-montserrat pt-[60px] text-white">
      <h2 className="text-[22px] md:text-[36px] font-[600] pb-[30px]">
        Наши работы
      </h2>
      <div className="flex flex-col md:flex-row items-top gap-[20px]">
        {worksItems.map((itm, idx) => {
          return (
            <div key={idx} >
                <div className="relative rounded-b-[10px]">
              <img
                src={itm.img}
                alt={itm.name}
                className="w-full mb-[20px]"
              />
              <p className="absolute bottom-0 w-full h-[40px] flex items-center px-[20px] text-primary-red font-[700]" style={{background: '#1A1A1ABF', backdropFilter: 'blur(10px)'}}>{itm.name}</p>
                </div>
              <p className="text-[14px] md:text-[16px] text-justify md:text-left">
                {itm.info}
              </p>
            </div>
          );
        })}
      </div>
      <div className="flex justify-center my-[40px] items-center gap-[10px]">
        <div className="p-[10px] text-[24px] text-primary-red border border-primary-red rounded-full cursor-pointer">
        <FaAngleLeft />
        </div>
        <div className="p-[10px] text-[24px] text-primary-red border border-primary-red rounded-full cursor-pointer">
        <FaAngleRight />
        </div>
      </div>
    </div>
  );
};

export default OurWorks;
