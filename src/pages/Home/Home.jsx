import React from 'react'

import OurSuccess from '../../components/OurSuccess/OurSuccess'
import Popular from '../../components/Popular/Popular'
import TopRatedProviders from '../../components/TopRatedProviders/TopRatedProviders'
import HowItWorks from '../../components/HowItWorks/HowItWorks'
import Carousel from '../../components/Banner/Carousel'

const Home = () => {
  return (
    <div>
        <Carousel/>
        <OurSuccess/>
        <Popular/>
        <TopRatedProviders/>
        <HowItWorks/>
    </div>
  )
}

export default Home
