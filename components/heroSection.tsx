'use client'
import React from "react";


export default function HeroSection(){
    return(
        <div className="relative h-screen overflow-hidden bg-black">
                <div className=" flex px-7 py-7 items-center gap-10">
                    <h1 className="text-5xl font-extrabold text-white ">ACTS</h1>
                    <nav className=" py-2 border border-gray-400 bg-gray-700 rounded-lg text-white">
                        <a href="#" className="px-5 py-2 text-white text-lg">Home</a>
                        <a href="#" className="px-5 py-2 text-white">About</a>
                        <a href="#" className="px-5 py-2 text-white">Teams</a>
                        <a href="#" className="px-5 py-2 text-white">Join Us</a>
                        <a href="#" className="px-5 py-2 text-white">Events</a>
                        <a href="#" className="px-5 py-2 text-white">Contacts</a>
                    </nav>
                </div>
                <div className="py-24 px-32 items-center justify-start w-screen h-screen">
                    <h2 className="text-white text-4xl font-bold">ASSOCIATION OF</h2>
                    <h2 className="text-white text-4xl font-bold">COMPUTING TECHNOLOGY</h2>
                    <h2 className="text-white text-4xl font-bold">AND SCIENCE</h2>
                </div>

        </div>
    )
}

{/*<img src={SVG_FILES[1]} alt="logo" className="absolute bottom-0 right-0 h-72 w-72 translate-x-1/18 translate-y-1/4" />
                <img src={SVG_FILES[2]} alt="logo" className="absolute top-0 right-0 h-80 w-96 translate-x-1/8 -translate-y" />
                <img src={SVG_FILES[0]} alt="logo" className="absolute bottom-0 left-0 h-96 w-96" /> */}
//const  SVG_FILES = ['/shape-a.svg', '/shape-b.svg', '/shape-c.svg']