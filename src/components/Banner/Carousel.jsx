import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { assets } from "../../assets/assets";

const Carousel = () => {
    return (
        <div className="w-full max-w-[1200px] mx-auto px-4">
            <Swiper modules={[Autoplay]} spaceBetween={0} slidesPerView={1} loop={true} autoplay={{ delay: 3000 }}>
                <SwiperSlide>
                    <img src={assets.banner1} alt="Banner 1" className="w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] object-cover rounded-xl" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={assets.banner2} alt="Banner 2" className="w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] object-cover rounded-xl" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Carousel;
