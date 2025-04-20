import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import CardServicio from "./CardServicio.js";
import "./CarrouselCards.css";

const CarrouselCards = () => {
  const servicios = [
    {
      titulo: "Servicio 1",
      descripcion: "Descripción del servicio 1",
      imagen: "https://via.placeholder.com/300x200",
    },
    {
      titulo: "Servicio 2",
      descripcion: "Descripción del servicio 2",
      imagen: "https://via.placeholder.com/300x200",
    },
    {
      titulo: "Servicio 3",
      descripcion: "Descripción del servicio 3",
      imagen: "https://via.placeholder.com/300x200",
    },
    {
      titulo: "Servicio 4",
      descripcion: "Descripción del servicio 4",
      imagen: "https://via.placeholder.com/300x200",
    },
  ];

  return (
    <div className="container">
      <div className="swiperContainer">
        <Swiper
          modules={[Pagination, Autoplay]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          spaceBetween={40}
          slidesPerView={2}
          pagination={{ el: ".pagination", clickable: true }}
          breakpoints={{
            "@0.00": {
              slidesPerView: 1,
              spaceBetween: 25,
            },
            "@0.50": {
              slidesPerView: 1.25,
              spaceBetween: 25,
            },
            "@1.00": {
              slidesPerView: 2,
              spaceBetween: 25,
            },
            "@1.25": {
              slidesPerView: 2.5,
              spaceBetween: 20,
            },
            "@1.50": {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            "@1.75": {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
        >
          {servicios.map((servicio, index) => (
            <SwiperSlide key={index}>
              <CardServicio
                titulo={servicio.titulo}
                descripcion={servicio.descripcion}
                imagen={servicio.imagen}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="pagination" />
      </div>
    </div>
  );
};
export default CarrouselCards;
