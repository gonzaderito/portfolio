"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import { serviceData } from '@/data';

const SliderServices = () => {
    return (
        <Swiper
            breakpoints={{
                320: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                },
                1024: {
                    slidesPerView: 2,
                    spaceBetween: 40,
                },
            }}
            pagination={{
                clickable: true,
                
            }}
            modules={[Pagination]}
            className="w-full relative "
        >
            {serviceData.map((item, index) => (
                <SwiperSlide key={index}>
                    <div className="flex flex-col justify-between px-6 py-8 h-[300px] w-[225px] rounded-lg cursor-pointer bg-[rgba(65,47,123,0.15)] group hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300 hover:border-secondary border-2">
                        <div className="mb-4 text-4xl text-secondary">{item.icon}</div>
                        <div>
                            <h3 className="mb-4 text-lg">{item.title}</h3>
                            <p className="text-sm">{item.description}</p>
                        </div>
                    </div>
                </SwiperSlide>
            ))}

            {/* Estilo adicional para bajar la paginación */}
            <style jsx global>{`
                .swiper-pagination {
                    bottom: -50px; /* Ajusta la distancia desde el slider */
                }
            `}</style>
        </Swiper>
    );
};

export default SliderServices;
