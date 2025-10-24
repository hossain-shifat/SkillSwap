import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router'
import { Facebook, Github, Linkedin, Twitter } from 'lucide-react'

const Footer = () => {
    return (
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.4 }}>
            <footer>
                <div className="py-10 bg-[#0A142F] text-white">
                    <div className="flex flex-col space-y-5 md:space-y-0 md:flex-row justify-between items-center mx-10 lg:mx-20">
                        <div className="flex flex-col gap-2 text-center">
                            <div className="flex mb-5">
                                <Link to='/' className="flex gap-2 justify-center items-center select-none cursor-pointer">
                                    <img className="w-[25px] h-[25px]" src='/logo.png' alt="" />
                                    <h1 className="text-xl font-semibold">SkillSwap</h1>
                                </Link>
                            </div>
                            <div className="*:cursor-pointer *:hover:underline flex flex-col gap-5">
                                <h1>+880 99415165</h1>
                                <p>support@skillswap.com</p>
                            </div>
                        </div>
                        <div className="text-center">
                            <div className="font-bold text-xl mb-5">
                                <h1>Quick Link</h1>
                            </div>
                            <div className="flex gap-15">
                                <div className="flex flex-col gap-5 *:hover:underline cursor-pointer">
                                    <h2>Product</h2>
                                    <h2>Information</h2>
                                </div>
                                <div className="flex flex-col gap-5 *:hover:underline cursor-pointer">
                                    <h2>Company</h2>
                                    <h2>Terms & Condition</h2>
                                </div>
                            </div>
                        </div>
                        <div className="text-center md:-mt-10">
                            <div className="font-bold text-xl mb-5">
                                <h1>Social</h1>
                            </div>
                            <div className="flex gap-2 *:cursor-pointer">
                                <Link to='https://www.facebook.com/hossainshifat.info/'><Facebook /></Link>
                                <Link to='https://www.linkedin.com/'><Linkedin /></Link>
                                <Link to='https://x.com/hossainshifat0'><Twitter /></Link>
                                <Link to='https://github.com/hossain-shifat'><Github /></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center text-white bg-[#0A142F] pb-4">
                    <p>Copyright © {new Date().getFullYear()} -All right reserved <br className="sm:hidden"/> by SkillSwap</p>
                </div>
            </footer>
        </motion.div>
    )
}

export default Footer
