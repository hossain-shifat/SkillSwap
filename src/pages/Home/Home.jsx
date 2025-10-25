import React from 'react'

import OurSuccess from '../../components/OurSuccess/OurSuccess'
import Popular from '../../components/Popular/Popular'
import TopRatedProviders from '../../components/TopRatedProviders/TopRatedProviders'
import HowItWorks from '../../components/HowItWorks/HowItWorks'
import Carousel from '../../components/Banner/Carousel'
import { motion } from 'framer-motion'
import AppDownload from '../../components/AppDownload/AppDownload'

const Home = () => {
    return (
        <div>
            <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.4 }}>
                <Carousel />
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.4 }}>
                <Popular />
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.4 }}>
                <TopRatedProviders />
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.4 }}>
                <HowItWorks />
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.4 }}>
                <OurSuccess />
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.4 }}>
                <AppDownload />
            </motion.div>
        </div>
    )
}

export default Home
