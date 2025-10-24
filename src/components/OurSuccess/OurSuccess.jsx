import React from 'react'
import { motion } from 'framer-motion'

const OurSuccess = () => {
    return (
        <div>
            <div className="my-15 text-center">
                <h1 className="text-2xl font-bold">Our Success</h1>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 my-10 gap-5 max-w-[1200px] mx-auto *:text-center">
                <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.1 }} whileHover={{ scale: 1.05, y: -5, boxShadow: "0px 10px 20px rgba(0,0,0,0.1)" }}>
                    <div className="flex flex-col justify-center items-center border border-gray-100 shadow-sm rounded-xl p-5 md:p-7 lg:p-10 mx-10 md:mx-5 lg:mx-2">
                        <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl">250+</h1>
                        <p className="text-[#334155]">Courses by our best mentors</p>
                    </div>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.1 }} whileHover={{ scale: 1.05, y: -5, boxShadow: "0px 10px 20px rgba(0,0,0,0.1)" }}>
                    <div className="flex flex-col justify-center items-center border border-gray-100 shadow-sm rounded-xl p-5 md:p-7 lg:p-10 mx-10 md:mx-5 lg:mx-2">
                        <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl">1000+</h1>
                        <p className="text-[#334155]">Job Placement</p>
                    </div>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.1 }} whileHover={{ scale: 1.05, y: -5, boxShadow: "0px 10px 20px rgba(0,0,0,0.1)" }}>
                    <div className="flex flex-col justify-center items-center border border-gray-100 shadow-sm rounded-xl p-5 md:p-7 lg:p-10 mx-10 md:mx-5 lg:mx-2">
                        <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl">2500+</h1>
                        <p className="text-[#334155]">Reviews</p>
                    </div>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.1 }} whileHover={{ scale: 1.05, y: -5, boxShadow: "0px 10px 20px rgba(0,0,0,0.1)" }}>
                    <div className="flex flex-col justify-center items-center border border-gray-100 shadow-sm rounded-xl p-5 md:p-7 lg:p-10 mx-10 md:mx-5 lg:mx-2">
                        <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl">500+</h1>
                        <p>Active Mentor</p>
                    </div>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.1 }} whileHover={{ scale: 1.05, y: -5, boxShadow: "0px 10px 20px rgba(0,0,0,0.1)" }}>
                    <div className="flex flex-col justify-center items-center border border-gray-100 shadow-sm rounded-xl p-5 md:p-7 lg:p-10 mx-10 md:mx-5 lg:mx-2">
                        <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl">24/7</h1>
                        <p className="text-[#334155]">Support Session</p>
                    </div>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.1 }} whileHover={{ scale: 1.05, y: -5, boxShadow: "0px 10px 20px rgba(0,0,0,0.1)" }}>
                    <div className="flex flex-col justify-center items-center border border-gray-100 shadow-sm rounded-xl p-5 md:p-7 lg:p-10 mx-10 md:mx-5 lg:mx-2">
                        <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl">150+</h1>
                        <p className="text-[#334155]">Partner Companies</p>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default OurSuccess
