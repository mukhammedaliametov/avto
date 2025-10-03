import React from "react";
import Icon1 from "../assets/choose1.svg";
import Icon2 from "../assets/choose2.svg";
import Icon3 from "../assets/choose3.svg";

const ChooseUs = () => {
  const choooseItems = [
    {
      img: Icon1,
      name: "Заголовок преимущества",
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna ",
    },
    {
      img: Icon2,
      name: "Заголовок преимущества",
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna ",
    },
    {
      img: Icon3,
      name: "Заголовок преимущества",
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna ",
    },
  ];
  return (
    <div className="max-w-[1220px] mx-auto px-[16px] xl:px-0 font-montserrat pt-[60px] text-white">
      <h2 className='text-[22px] md:text-[36px] font-[600] pb-[30px]'>Почему стоит выбрать нас</h2>
      <div className="flex flex-col md:flex-row items-top gap-[20px]">
        {choooseItems.map((itm, idx) => {
          return(
            <div key={idx}>
              <img src={itm.img} alt={itm.name} className="w-[50px] md:w-[70px]" />
              <h4 className="my-[10px] text-[20px] font-[700]">{itm.name}</h4>
              <p className="text-[14px] md:text-[16px] text-justify md:text-left">{itm.info}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ChooseUs;
