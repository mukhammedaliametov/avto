import React, { useState } from "react";
import Logo from "../assets/icon.svg";
import { IoMenu } from "react-icons/io5";
import telegramIcon from "../assets/telegram_icon.svg";
import whatsappIcon from "../assets/whatsapp_icon.svg";
import { IoMdClose } from "react-icons/io";

const Header = () => {
  const [nav, setNav] = useState();
  const handleClick = () => setNav(!nav);
  const navItems = [
    { name: "Услуги", link: "#" },
    { name: "Преимущества", link: "#" },
    { name: "Наши работы", link: "#" },
    { name: "Контакты", link: "#" },
  ];
  return (
    <div className="bg-[#333333] sticky top-0 w-full z-999">
      <div className="max-w-[1220px] mx-auto px-[16px] xl:px-0 flex items-center justify-between py-[20px]">
        <a href="#">
          <img
            src={Logo}
            alt="logo"
            className="w-[40%] md:w-[60%] lg:w-[80%]"
          />
        </a>
        <nav className="hidden md:flex font-[600] text-white font-montserrat items-center gap-[30px] lg:gap-[40px]">
          {navItems.map((itm, idx) => {
            return (
              <a
                key={idx}
                href={itm.link}
                className="hover:text-primary-red duration-300 text-[14px] lg:text-[16px]"
              >
                {itm.name}
              </a>
            );
          })}
        </nav>
        <div className="hidden md:flex items-center gap-[20px] lg:gap-[30px]">
          <a
            href="tel: +7 (999) 999-09-90"
            className="text-[15px] lg:text-[18px] font-semibold lg:font-bold font-montserrat text-white border-b border-primary-red pb-[6px] mt-[12px] hover:text-primary-red duration-300"
          >
            +7 (999) 999-09-90
          </a>
          <div className="flex item-center gap-[20px]">
            <img
              src={whatsappIcon}
              alt="whatsapp"
              className="w-[20px] lg:w-[30px] cursor-pointer"
            />
            <img
              src={telegramIcon}
              alt="telegram"
              className="w-[20px] lg:w-[32px] cursor-pointer"
            />
          </div>
        </div>
        <div
          onClick={handleClick}
          className="block md:hidden text-primary-red text-[28px]"
        >
          {nav ? <IoMdClose /> : <IoMenu />}
        </div>
        <nav
          className={`fixed flex flex-col text-center gap-[20px] text-white bg-[#333333] font-montserrat left-0 w-full pt-[30px] h-screen -z-10 transition-all duration-500 ${
            nav ? "top-[70px]" : "-top-full"
          }`}
        >
          {navItems.map((itm, idx) => {
            return (
              <a
                key={idx}
                href={itm.link}
                className="hover:text-primary-red duration-300 text-[16px]"
              >
                {itm.name}
              </a>
            );
          })}
          <div className="flex flex-col items-center gap-[20px] lg:gap-[30px]">
            <a
              href="tel: +7 (999) 999-09-90"
              className="text-[18px] font-bold font-montserrat text-white border-b border-primary-red pb-[6px] mt-[12px] hover:text-primary-red duration-300"
            >
              +7 (999) 999-09-90
            </a>
            <div className="flex item-center gap-[20px]">
              <img
                src={whatsappIcon}
                alt="whatsapp"
                className="w-[26px] cursor-pointer"
              />
              <img
                src={telegramIcon}
                alt="telegram"
                className="w-[26px] cursor-pointer"
              />
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
