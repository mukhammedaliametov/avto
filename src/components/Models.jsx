import React from "react";
import Model1 from "../assets/model1.png";
import Model2 from "../assets/model2.png";
import Model3 from "../assets/model3.png";
import Model4 from "../assets/model4.png";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

const Models = () => {
  const modelItems = [
    { img: Model1, name: "GTC4LUSSO", year: "2016-2020" },
    { img: Model2, name: "PUROSANGUE", year: "2022" },
    { img: Model3, name: "F8", year: "2019" },
    { img: Model4, name: "812", year: "2017" },
  ];
  return (
      <div className="max-w-[1220px] mx-auto px-[16px] xl:px-0 font-montserrat pt-[60px] text-white">
        <h2 className="text-[22px] md:text-[36px] font-[800] pb-[30px]">
          Список моделей
        </h2>
        <div className="flex flex-row items-top justify-between overflow-x-scroll xl:overflow-x-visible gap-[20px]">
          {modelItems.map((itm, idx) => {
            return (
              <div key={idx} className="flex-shrink-0 w-[285px] border border-primary-red rounded-[20px] flex items-center pr-[20px]">
                <img
                  src={itm.img}
                  alt={itm.name}
                  className=""
                />
                <div className="flex flex-col justify-between ml-[10px]">
                    <p className="text-primary-red font-[600]">
                  {itm.name}
                </p>
                <p>
                  {itm.year}
                </p>
                </div>
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

export default Models;
