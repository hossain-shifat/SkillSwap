import React, { useEffect, useState } from 'react'
import TopRatedProviderCards from '../TopRatedProviderCards/TopRatedProviderCards'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from "swiper/modules";

const TopRatedProviders = () => {

    const [topProviders, setTopProviders] = useState([])

    useEffect(() => {
        fetch('/teachers.json')
            .then(res => res.json())
            .then(data => setTopProviders(data))
            .catch(error => console.error('Error loading teacher data:', error))
    }, [])

    const breakPoints = {
        sm: { slidesPerView: 2 },
        md: { slidesPerView: 3 },
        lg: { slidesPerView: 4 },
    };

    return (
        <div>
            <div className="my-10">
                <h1 className="font-bold text-2xl text-center">Top Rated Providers</h1>
            </div>
            <div className="max-w-[1200px] mx-auto">
                <Swiper modules={[Autoplay]} spaceBetween={20} slidesPerView={1.5} loop={true} autoplay={{ delay: 1, disableOnInteraction: false, pauseOnMouseEnter: true, }} speed={2000} breakpoints={{ 640: breakPoints.sm, 768: breakPoints.md, 1024: breakPoints.lg, }}>
                    {topProviders.map(provider => (
                        <SwiperSlide key={provider.id}>
                            <TopRatedProviderCards topProvider={provider} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}

export default TopRatedProviders
