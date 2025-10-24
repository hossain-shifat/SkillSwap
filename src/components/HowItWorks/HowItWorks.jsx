import { FileText, GraduationCap, Search, Trophy } from 'lucide-react'
import React from 'react'
import { motion } from 'framer-motion'

const HowItWorks = () => {
    return (
        <div>
            <div className="my-15 text-center">
                <h1 className="text-2xl font-bold">How It Work</h1>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 my-10 gap-5 max-w-[1200px] mx-auto text-center *:gap-3">
                <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.1 }} whileHover={{ scale: 1.05, y: -5, boxShadow: "0px 10px 20px rgba(0,0,0,0.1)" }}>
                    <div className="flex flex-col justify-center gap-2 items-center border border-gray-100 shadow-sm rounded-xl p-5 md:p-7 lg:p-10 mx-10 md:mx-5 lg:mx-2">
                        <span><Search size={35} stroke='deepskyblue' /></span>
                        <h1 className="font-bold text-xl md:text-2xl lg:text-2xl">Browse Courses</h1>
                        <p className="text-[#334155]">Explore our library of courses.</p>
                    </div>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.1 }} whileHover={{ scale: 1.05, y: -5, boxShadow: "0px 10px 20px rgba(0,0,0,0.1)" }}>
                    <div className="flex flex-col justify-center gap-2 items-center border border-gray-100 shadow-sm rounded-xl p-5 md:p-7 lg:p-10 mx-10 md:mx-5 lg:mx-2">
                        <span><FileText size={35} stroke='orange' /></span>
                        <h1 className="font-bold text-xl md:text-2xl lg:text-2xl">Enroll</h1>
                        <p className="text-[#334155]">Pick the course and enroll instantly.</p>
                    </div>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.1 }} whileHover={{ scale: 1.05, y: -5, boxShadow: "0px 10px 20px rgba(0,0,0,0.1)" }}>
                    <div className="flex flex-col justify-center gap-2 items-center border border-gray-100 shadow-sm rounded-xl p-5 md:p-7 lg:p-10 mx-10 md:mx-5 lg:mx-2">
                        <span><GraduationCap size={35} /></span>
                        <h1 className="font-bold text-xl md:text-2xl lg:text-2xl">Learn</h1>
                        <p className="text-[#334155]">Start learning with video tutorials.</p>
                    </div>
                </motion.div>
                <motion.div className="lg:col-span-full lg:mx-auto" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.1 }} whileHover={{ scale: 1.05, y: -5, boxShadow: "0px 10px 20px rgba(0,0,0,0.1)" }}>
                    <div className="flex flex-col justify-center gap-2 items-center border border-gray-100 shadow-sm rounded-xl p-5 md:p-7 lg:p-10 mx-10 md:mx-5 lg:col-span-full lg:mx-auto">
                        <span><Trophy size={35} stroke='orange' /></span>
                        <h1 className="font-bold text-xl md:text-2xl lg:text-2xl">Get Certified</h1>
                        <p className="text-[#334155]">Complete the course and earn your certificate.</p>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default HowItWorks
