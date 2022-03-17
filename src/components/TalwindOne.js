import React, { useState, useRef, useEffect } from 'react';


const TalwindOne = () => {
    const activeMenu = "Home";
    const [sidebarOpen, setSidebarOpen] = useState(false)
    const [menus, setMenus] = useState(["Home", "Delivery", "Pricing", "FAQs", "Contact"])

    // flex flex-wrap-reverse gap-y-24 justify-between py-12 px-6 
    return (
        <div className="w-full min-h-screen font-san text-gray-900 bg-gradient-to-br from-transparent to-green-100">
            <nav className="flex justify-between items-center py-8 px-6 mx-auto max-w-screen-xl md:px-12 lg:px-16 xl:px-24">
                <a className="text-3xl font-bold md:text-4xl tracking-wide" href="#">
                    Organ<span className="text-bhagawa">o</span>
                </a>
                <div className="inset-0 transition-all bg-white/70 backdrop-blur-xl z-20 md:static md:bg-transparent md:flex justify-center space-y-8 md:space-y-0 md:space-x-8 flex-col md:flex-row lg:space-x-14">
                    <ul className="flex flex-col md:flex-row items-center md:space-y-0 md:space-x-6 lg:md:space-x-8">
                        {
                            menus ? menus.map((menu) => (
                                <li className={`text-lg md:text-base lg:text-lg font-medium ${activeMenu === menu ? 'text-green' : ""} group`}>
                                    <a href="#">{menu}</a>
                                    <div className="h-0.5 bg-green scale-x-0 group-hover:scale-100 transition-transform origin-left duration-300 ease-out" />
                                </li>
                            )) : ""
                        }
                    </ul>
                    <button className="flex justify-center items-center font-medium text-white bg-green h-13 px-7 rounded-md whitespace-nowrap hover:shadow-primary transition-shadow duration-300">
                        Get Started
                    </button>
                </div>
            </nav>

            <div className="py-8 px-6 mx-auto max-w-screen-xl sm:px-8 md:px-12 lg:px-16 xl:px-24">
                <div className="relative z-10 md:w-1/2 w-full">
                    <img className="absolute top-0 right-0 h-14" src="/images/34830438024_6cda160cbf_b-removebg-preview-removebg-preview.png" />
                    <span className="flex items-center px-1 text-xl text-green">
                        <span className="font-medium">100% Organic food </span>
                        <img className="px-1 h-8" src="/images/34830438024_6cda160cbf_b-removebg-preview-removebg-preview.png" />
                    </span>
                    <h1 className="pt-4 px-1 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter leading-tight whitespace-nowrap">
                        Healthy Lifestyle <br />
                        is your only <br />
                        <span className="text-green whitespace-nowrap">unfair advantage</span>
                    </h1>
                    <p class="pt-8 sm:text-lg max-w-md font-normal text-gray-600 leading-relaxed">
                        Choose healthy habits with Organo daily meal prepared by our expert nutritionist
                        and chef
                    </p>
                    <div className="pt-8 flex space-x-4 sm:space-x-6">
                        <button className="flex justify-center items-center text-white bg-green h-13 px-7 rounded-xl hover:shadow-primary">Get started</button>
                        <button className="flex justify-center items-center h-13 px-7 hover:shadow-primar border border-gray-900 rounded-xl hover:shadow-xl">Explore menu</button>
                    </div>
                    <div className="pt-20 flex">
                        <img className="w-24" src="/images/34830438024_6cda160cbf_b-removebg-preview-removebg-preview.png" />
                        <div className="pt-5 pl-4">
                            <div className="text-xl font-bold">Chef of the month</div>
                            <div>People loved his 🍳</div>
                            <div className="text-green font-bold">80+ famous dishes</div>
                        </div>
                    </div>
                </div>


                <div></div>
            </div>

        </div>
    )
}

export default TalwindOne
