import React from "react";
import ItalyFlag from "../assets/italy_flag.png";
import KingIcon from "../assets/king.png";
import FerrariImage from "../assets/hero_img.png";
import FerrariLogo from "../assets/ferrari_logo.png";

const Hero = () => {
  return (
    <div
      style={{
        background: "linear-gradient(180deg, #333333 0%, #1A1A1A 100%)",
      }}
    >
      <div className="max-w-[1220px] mx-auto px-[16px] xl:px-0 pt-[60px] font-montserrat text-white pb-[40px] md:pb-[180px]">
        <h2 className="text-[32px] md:text-[42px] font-[800]">
          Превосходство в обслуживании
        </h2>
        <p className="text-[16px] md:text-[30px] font-[600]">
          Ваша машина в надежных руках!
        </p>
        <div className="flex flex-col-reverse md:flex-row items-center mt-[20px]">
          <div className="flex flex-col items-center md:items-start justify-center md:justify-start gap-[20px] mt-[130px] md:mt-0">
            <button
              style={{
                background: "linear-gradient(180deg, #FF0000 0%, #C70000 100%)",
              }}
              className="font-[400] py-[13px] px-[30px] rounded-[10px] cursor-pointer mb-[20px]"
            >
              ОСТАВИТЬ ЗАЯВКУ
            </button>
            <div className="relative ml-[20px] flex items-center w-full md:w-[235px] h-[52px] border border-amber-400 rounded-[10px] gap-[12px] pl-[34px] pr-[20px] text-[14px]">
              <img
                src={ItalyFlag}
                alt="italy_flag"
                className="w-[50px] absolute -left-[25px]"
              />
              <p>
                Специально <br /> обученные механики
              </p>
            </div>
            <div className="relative ml-[20px] flex items-center w-full md:w-[235px] h-[52px] border border-amber-400 rounded-[10px] gap-[12px] pl-[34px] pr-[20px] text-[14px]">
              <img
                src={KingIcon}
                alt="italy_flag"
                className="w-[50px] absolute -left-[25px]"
              />
              <p>Только премиум качество</p>
            </div>
          </div>
          <div className="relative w-full mx-auto md:w-[1120px] md:ml-[120px] ">
            <h1 className="text-[40px] md:text-[60px] lg:text-[80px] font-[800] ml-[30px] md:ml-0">
              F812 SUPER
            </h1>
            <img
              src={FerrariImage}
              alt="ferrari_img"
              className="absolute mt-[-35px] md:mt-[-50px] lg:mt-[-80px] md:left-[-40px] z-20"
            />
            <div className="w-[30px] lg:w-[120px] h-[30px] lg:h-[120px] -z-10 hero-shadow ml-[120px] md:ml-[200px] lg:ml-[320px]"></div>
          </div>
        </div>
        <div className="absolute top-[50%] right-0 w-[160px] md:w-[210px]">
          <img src={FerrariLogo} alt="logo" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
