import React from 'react';
import Services1 from '../assets/service1.png';
import Services2 from '../assets/service2.png';
import Services3 from '../assets/service3.png';
import Services4 from '../assets/service4.png';
import Services5 from '../assets/service5.png';
import Services6 from '../assets/service6.png';
import Services7 from '../assets/service7.png';
import Services8 from '../assets/service8.png';

const Services = () => {
    const servicesItems = [
        {name: 'ТЕХ.ОБСЛУЖИВАНИЕ', img: Services1},
        {name: 'ДИАГНОСТИКА', img: Services2},
        {name: 'ХОДОВАЯ ЧАСТЬ', img: Services3},
        {name: 'ТРАНСМИССИЯ', img: Services4},
        {name: 'ДВИГАТЕЛЬ', img: Services5},
        {name: 'ВЫХЛОПНАЯ СИСТЕМА', img: Services6},
        {name: 'РУЛЕВОЕ УПРАВЛЕНИЕ', img: Services7},
        {name: 'ТОПЛИВНАЯ СИСТЕМА', img: Services8},
    ]
    return (
        <div id='services' className='max-w-[1220px] mx-auto px-[16px] xl:px-0 mb-[40px] font-montserrat text-white'>
            <div className='md:pl-[20px] mb-[10px]'>
                <h2 className='text-[32px] md:text-[42px] font-[600]'>Наши услуги</h2>
            <p>Снизу мы предоставили список наших услуг по разделам:</p>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-[20px] font-[600]'>
                {servicesItems.map((itm, idx) => (
                    <div key={idx}>
                        <img src={itm.img} alt={itm.name} className='w-full' />
                        <p className='px-[15px] md:px-[20px] text-[13px] md:text-[16px]'>{itm.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;