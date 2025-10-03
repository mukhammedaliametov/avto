import React from "react";

const Map = () => {
  return (
    <div className="mt-[60px] md:mt-[100px] mb-[20px] h-[250px] md:h-[500px]">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d103384.1253137236!2d37.445662423689754!3d55.715392897742134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x46b54afc73d4b0c9%3A0x3d44d6cc5757cf4c!2sMosku%2C%20Errusia!3m2!1d55.756872099999995!2d37.6150527!5e1!3m2!1seu!2s!4v1759456706323!5m2!1seu!2s"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Map;
