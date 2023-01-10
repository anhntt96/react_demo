import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

import "./testimotional.css";
import Data from "./Data";
const Testimotional = () => {
    return (
        <section className="testimotional container section">
            <h2 className="section__title">My clients say</h2>
            <span className="section__subtitle">Testimotional</span>

            <Swiper
                className="testimotional__container"
                loop={true}
                grabCursor={true}
                spaceBetween={24}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    576: {
                        slidesPerView: 2,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 48,
                    },
                }}
                modules={[Pagination]}
            >
                {Data.map(({ id, image, title, description }) => {
                    return (
                        <SwiperSlide className="testimotional__card" key={id}>
                            <img
                                src={image}
                                alt=""
                                className="testimotional__img"
                            />
                            <h3 className="testimotional__name">{title}</h3>
                            <p className="testimotional__description">
                                {description}
                            </p>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </section>
    );
};

export default Testimotional;
