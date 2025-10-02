import React from "react";
import Logo from "../assets/footer_logo.png";
import FooterIcon from "../assets/footer_icon.svg";

const Footer = () => {
  return (
    <div
      style={{
        background:
          "linear-gradient(180deg, rgba(26, 26, 26, 0) 0%, #333333 100%)",
      }}
      className="py-[20px]"
    >
      <div className="max-w-[1220px] mx-auto px-[16px] xl:px-0 font-montserrat text-white">
        <div className="flex flex-col gap-[20px] md:flex-row items-start md:items-center justify-between font-[600]">
          <img src={Logo} alt="logo" className="w-[135px] xl:w-[185px] mb-[20px]" />
          <div className="flex flex-col md:flex-row gap-[40px]">
            <a href="#">Услуги</a>
            <a href="#">Преимущества</a>
            <a href="#">Наши работы</a>
            <a href="#">Контакты</a>
          </div>
          <div className="flex items-center gap-[10px] mt-[10px] md:mt-0">
            <img src={FooterIcon} alt="footer_icon" />
            <p>Наверх</p>
          </div>
        </div>
        <div className="flex flex-col-reverse md:flex-row items-start md:items-end justify-between pt-[50px]">
          <div>
            <p className="mb-[10px]">© 2023 Company name</p>
            <p>Все права защищены</p>
          </div>
          <p>Политика конфиденциальности</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
