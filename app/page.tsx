
'use client'
import React from 'react'
import AppSequence from "@/components/AppSequence";
import { useRouter } from 'next/navigation'
import Squares from '@/components/Squares';
import Link from "next/link"
import VisualsPage from "@/components/HighLights"
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useEffect, useState } from "react"
import FAQSection from "@/components/FAQ";
import LeadershipSection from "@/components/team";
import AskQuestionsSection from "@/components/askQuestion";
import SponsorsSection from "@/components/sponserSection";


const chairMembers = [
    {
        name: "Sarah Johnson",
        position: "Chairperson",
        image: "/placeholder.svg?height=400&width=300",
    },
    {
        name: "Michael Chen",
        position: "Vice Chair",
        image: "/placeholder.svg?height=400&width=300",
    },
    {
        name: "Emily Rodriguez",
        position: "Secretary",
        image: "/placeholder.svg?height=400&width=300",
    },
    {
        name: "David Thompson",
        position: "Treasurer",
        image: "/placeholder.svg?height=400&width=300",
    },
    {
        name: "Lisa Park",
        position: "Events Chair",
        image: "/placeholder.svg?height=400&width=300",
    },
    {
        name: "James Wilson",
        position: "Communications Chair",
        image: "/placeholder.svg?height=400&width=300",
    },
    {
        name: "Amanda Foster",
        position: "Membership Chair",
        image: "/placeholder.svg?height=400&width=300",
    },
]
    export default function Page() {
        const [isVisible, setIsVisible] = useState(false)

        useEffect(() => {
            const timer = setTimeout(() => setIsVisible(true), 100)
            return () => clearTimeout(timer)
        }, [])

        const topRow = chairMembers.slice(0, 3)
        const bottomRow = chairMembers.slice(3, 7)
        const ref = useRef(null);
        const isInView = useInView(ref, {once: false});
        const router = useRouter()

        return (
            <div className="min-h-screen">

                {/*Hero section(animation abhi pura nhi hai logo to heroSection wala to dekh lena)*/}
                <section className="z-20">
                    <AppSequence/>
                </section>

                <section className="relative flex h-screen  items-center overflow-hidden bg-black">
                    {/* Background */}
                    <Squares
                        speed={0.25}
                        squareSize={40}
                        direction='diagonal'
                        borderColor='#575757'
                        hoverFillColor='black'/>
                    <motion.div
                        ref={ref}
                        initial={{x: -100, y: -100}}
                        animate={
                            isInView
                                ? {x: 0, y: 0, opacity: 1}
                                : {x: -100, y: -100, opacity: 1}
                        }
                        transition={{duration: 1, delay: 0.5}}
                        className="absolute top-0 right-20 w-52 h-52"
                    >
                        <img src="/creationOfAdam1.png" alt="creation of adam"/>
                    </motion.div>

                    <motion.div
                        ref={ref}
                        initial={{x: 100, y: 100}}
                        animate={
                            isInView
                                ? {x: 0, y: 0, opacity: 1}
                                : {x: 100, y: 100, opacity: 1}
                        }
                        transition={{duration: 1, delay: 0.5}}
                        className="absolute top-12 right-0 w-24 h-24"
                    >
                        <img src="/CreationOfAdam2.png" alt="creation of adam"/>
                    </motion.div>
                    <motion.div

                        ref={ref}
                        initial={{x: "-100%", opacity: 1}}
                        animate={
                            isInView
                                ? {x: 0, opacity: 1}
                                : {x: "-100%", opacity: 0}
                        }
                        transition={{duration: 1, ease: "easeOut"}}

                        className="absolute bottom-1 left-0 w-28 h-auto">
                        <img src="/fullSnackDeveloper.png" alt="creation of adam"/>
                    </motion.div>

                    {/* Foreground content */}
                    <div className="absolute z-20 py-20 flex flex-col items-center text-white">


                        <h1 className="text-7xl font-bold ">ABOUT ACTS</h1>
                        <img
                            src="/EveryOne.png"
                            alt="everyone"
                            className="mt-10 h-64 w-max"
                        />
                        <div className="flex flex-col items-center justify-center">
                            <p className="mt-10 text-xl font-medium flex-wrap h-auto w-auto px-24 justify-center">
                                ACTS USAR is a vibrant technical chapter at the University School of Automation and
                                Robotics,
                                GGSIPU (East Delhi Campus). It fosters a collaborative community focused on learning,
                                innovation, and mentorship.
                                The chapter organizes events in AI, ML, Automation, and Robotics, along with hands-on
                                workshops, hackathons,
                                and career development sessions like resume building and interview prep. Guided by Dr.
                                Neeta Singh and Dr. Amar Arora,
                                and driven by a dedicated student team, ACTS Usar empowers students to grow technically
                                and professionally.
                            </p>
                        </div>


                    </div>
                </section>

                {/*Highlights*/}
                <section>
                    <VisualsPage/>
                </section>

                <section>
                    <LeadershipSection/>
                </section>
                <section>
                    <SponsorsSection/>
                </section>
                <section>
                    <FAQSection/>
                </section>
                <section>
                    <AskQuestionsSection/>
                </section>

                <footer className="border-t border-gray-800 px-6 py-12 md:px-12 bg-black">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                        <div>
                            <img src="/logo.png" alt="logo" className="h-12 w-auto border-gray-700 border rounded"/>
                        </div>

                        {/* Product Column */}
                        <div>
                            <h3 className="text-lg font-semibold mb-4 text-gray-300">Product</h3>
                            <ul className="space-y-2">
                                <li>
                                    <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                                        Features
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                                        Pricing
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                                        Updates
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Support Column */}
                        <div>
                            <h3 className="text-lg font-semibold mb-4 text-gray-300">Support</h3>
                            <ul className="space-y-2">
                                <li>
                                    <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                                        Help Center
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                                        Contact
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                                        Community
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Company Column */}
                        <div>
                            <h3 className="text-lg font-semibold mb-4 text-gray-300">Company</h3>
                            <ul className="space-y-2">
                                <li>
                                    <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                                        About
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                                        Privacy
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Copyright */}
                    <div className="text-center mt-12 pt-8 border-t border-gray-800">
                        <p className="text-gray-500 text-sm">© 2025 ACTS. All rights reserved.</p>
                    </div>
                </footer>


            </div>

        )
    }

