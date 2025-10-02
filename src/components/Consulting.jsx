import React from "react";
import ConsultionBg from "../assets/consulting_bg.png";

const Consulting = () => {
  return (
    <div className="px-[16px] xl:px-0">
      <div
        style={{
          background:
            "linear-gradient(90deg, #1A1A1A 0%, rgba(0, 0, 0, 0) 97.32%)",
        }}
        className="relative max-w-[1220px] h-full md:h-[314px] overflow-hidden mx-auto rounded-[10px] border border-primary-red my-[80px] p-[30px] font-montserrat text-white flex flex-col md:justify-between"
      >
        <div className="text-center z-10">
            <h3 className="text-[20px] md:text-[26px] font-[600] text-[#FFB72B]">
          Чтобы узнать точную стоимость работ,{" "}
          <p className="text-white">запишитесь на бесплатную консультацию</p>
        </h3>
        <form className="flex flex-col md:flex-row items-center gap-[20px] pt-[80px]">
          <input
            type="name"
            placeholder="Ваше имя"
            className="text-black bg-white py-[13px] px-[30px] rounded-[10px] outline-0 w-full md:w-auto"
            required
          />
          <input
            type="number"
            placeholder="+7 (999) 999-99-99"
            className="text-black bg-white py-[13px] px-[30px] rounded-[10px] outline-0 w-full md:w-auto"
            required
          />
          <input
            type="submit"
            style={{
              background: "linear-gradient(180deg, #FF0000 0%, #C70000 100%)",
            }}
            className="font-[400] py-[13px] px-[60px] rounded-[10px] cursor-pointer z-2 w-full md:w-auto"
            value={"ЗАПИСАТЬСЯ"}
          />
        </form>
        <p className="mt-[10px]">
          Оставляя заявку, вы даете согласие на обработку персональных данных
        </p>
        <img
          src={ConsultionBg}
          alt="bg"
          className="absolute bottom-0 md:top-0 right-0 -z-20"
        />
        </div>
      </div>
    </div>
  );
};

export default Consulting;
