import React from "react";
import Location from "../assets/location.svg";
import PhoneCall from "../assets/phone_icon.svg";
import Gmail from "../assets/gmail.svg";
import telegramIcon from "../assets/telegram_icon.svg";
import whatsappIcon from "../assets/whatsapp_icon.svg";

const Contact = () => {
  return (
    <div className="max-w-[1220px] mx-auto px-[16px] xl:px-0 flex flex-col md:flex-row items-center justify-between font-montserrat text-white">
      <div className="flex flex-col gap-[10px]">
        <h2 className="text-[22px] md:text-[36px] font-[800]">Контакты</h2>
        <div className="flex flex-col gap-[30px]">
          <div className="flex items-center gap-[10px]">
            <img src={Location} alt="location_icon" className="w-[28px]" />
            <div className="flex flex-col justify-between">
              <p className="font-[600]">Наш адрес:</p>
              <p>Москва, улица Пушкина, дом 1, корпус 2</p>
            </div>
          </div>
          <div className="flex items-center gap-[10px]">
            <img src={PhoneCall} alt="phone_call" className="w-[30px]" />
            <div className="flex flex-col justify-between">
              <p className="font-[600]">Номер телефона:</p>
              <a href="tel: +7 (999) 999-09-90">+7 (999) 999-09-90</a>
            </div>
          </div>
          <div className="flex items-center gap-[10px]">
            <img src={Gmail} alt="phone_call" className="w-[32px]" />
            <div className="flex flex-col justify-between">
              <p className="font-[600]">Наш E-mail</p>
              <a href="mailto: example.email@gmail.com">
                example.email@gmail.com
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-[22px] font-[700] mb-[10px]">Мы в социальных сетях</h4>
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
        </div>
      </div>
      <div className="flex flex-col justify-center text-left w-full md:w-[490px] p-[20px] bg-[#1A1A1A] shadow-xl shadow-primary-red rounded-[20px] border-2 border-primary-red mt-[30px] md:mt-0">
        <h4 className="text-center text-[32px] font-semibold">Оставьте заявку</h4>
        <p className="text-center mb-[20px]">Заполните форму и мы Вам перезвоним!</p>
        <input type="text" placeholder="Ваше имя" className="py-[15px] px-[30px] bg-white rounded-[10px] text-black mb-[15px] outline-none" />
        <select className="py-[15px] px-[30px] bg-white rounded-[10px] text-black mb-[15px] outline-none">
          <option value hidden>
            Выберите интересующую услугу
          </option>
        </select>
        <input type="number" placeholder="+7 (999) 999-99-99" className="py-[15px] px-[30px] bg-white rounded-[10px] text-black mb-[15px] outline-none" />
        <button style={{
              background: "linear-gradient(180deg, #FF0000 0%, #C70000 100%)",
            }}
            className="font-[400] py-[13px] px-[60px] rounded-[10px] cursor-pointer z-2 w-full md:w-auto mb-[20px]">ОТПРАВИТЬ</button>
        <p className="text-center">
          Оставляя заявку, вы даете согласие на <br /> обработку персональных
          данных
        </p>
      </div>
    </div>
  );
};

export default Contact;
