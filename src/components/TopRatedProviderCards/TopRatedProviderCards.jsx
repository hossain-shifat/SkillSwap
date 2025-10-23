import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

const TopRatedProviderCards = ({ topProvider }) => {
  return (
      <div className="bg-white p-5 rounded-xl shadow-lg my-10 w-[250px]">
          <img
              src={topProvider.profile}
              alt={topProvider.name}
              className="w-full h-48 object-cover rounded-lg mb-3"
          />
          <h2 className="font-bold text-lg">{topProvider.name}</h2>
          <p className="text-sm text-gray-600">{topProvider.education}</p>
      </div>
  )
}

export default TopRatedProviderCards
