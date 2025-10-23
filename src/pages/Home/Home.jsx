import React from 'react'
import Carousel from '../../components/Banner/Carousel'
import OurSuccess from '../../components/OurSuccess/OurSuccess'
import Popular from '../../components/Popular/Popular'
import TopRatedProviders from '../../components/TopRatedProviders/TopRatedProviders'

const Home = () => {
  return (
    <div>
        <Carousel/>
        <OurSuccess/>
        <Popular/>
        <TopRatedProviders/>
    </div>
  )
}

export default Home
