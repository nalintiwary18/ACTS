"use client"

import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

const sponsors = [
    {
        name: "TechCorp Solutions",
        description: "Leading technology solutions provider specializing in enterprise software development.",
        image: "/placeholder.svg?height=200&width=300&text=TechCorp",
    },
    {
        name: "Global Innovations Inc",
        description: "International consulting firm focused on digital transformation and innovation strategies.",
        image: "/placeholder.svg?height=200&width=300&text=Global+Innovations",
    },
    {
        name: "Future Systems Ltd",
        description: "Cutting-edge systems integration company with expertise in cloud computing solutions.",
        image: "/placeholder.svg?height=200&width=300&text=Future+Systems",
    },
    {
        name: "Digital Dynamics",
        description: "Creative digital agency specializing in brand development and marketing automation.",
        image: "/placeholder.svg?height=200&width=300&text=Digital+Dynamics",
    },
    {
        name: "Innovation Partners",
        description: "Strategic partnership firm connecting startups with established industry leaders.",
        image: "/placeholder.svg?height=200&width=300&text=Innovation+Partners",
    },
    {
        name: "NextGen Technologies",
        description: "Advanced technology research and development company focused on AI and machine learning.",
        image: "/placeholder.svg?height=200&width=300&text=NextGen+Tech",
    },
    {
        name: "Smart Solutions Group",
        description: "Comprehensive business solutions provider with focus on process optimization.",
        image: "/placeholder.svg?height=200&width=300&text=Smart+Solutions",
    },
    {
        name: "Quantum Enterprises",
        description: "Forward-thinking enterprise solutions company specializing in quantum computing applications.",
        image: "/placeholder.svg?height=200&width=300&text=Quantum+Enterprises",
    },
]

export default function SponsorsSection() {
    const duplicatedSponsors = [...sponsors, ...sponsors]

    return (
        <section className="py-24 px-4 bg-black overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-light text-white mb-4 tracking-wide">Our Partners & Sponsors</h2>
                    <div className="w-16 h-0.5 bg-white mx-auto mb-8"></div>
                    <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed font-light">
                        We're proud to collaborate with industry-leading organizations that share our vision and values.
                    </p>
                </div>

                <div className="relative">
                    <div className="flex animate-scroll space-x-8">
                        {duplicatedSponsors.map((sponsor, index) => (
                            <Card
                                key={index}
                                className="flex-shrink-0 w-80 bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-2xl shadow-xl hover:bg-gray-900/70 transition-all duration-300 group"
                            >
                                <CardContent className="p-0">
                                    <div className="relative w-full h-48 overflow-hidden rounded-t-2xl">
                                        <Image
                                            src={sponsor.image || "/placeholder.svg"}
                                            alt={sponsor.name}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-xl font-medium text-white mb-3 tracking-wide">{sponsor.name}</h3>
                                        <p className="text-gray-400 text-sm leading-relaxed font-light">{sponsor.description}</p>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>

            <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 15s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
        </section>
    )
}
