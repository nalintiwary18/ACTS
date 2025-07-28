"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Send, CheckCircle } from "lucide-react"

export default function AskQuestionsSection() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        question: "",
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)

        try {
            // Simulate API call to sheet database
            const response = await fetch("/api/submit-question", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            })

            if (response.ok) {
                setIsSubmitted(true)
                setFormData({ name: "", email: "", question: "" })
                setTimeout(() => setIsSubmitted(false), 5000)
            }
        } catch (error) {
            console.error("Error submitting question:", error)
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <section className="py-24 px-4 bg-black">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-light text-white mb-4 tracking-wide">Ask a Question</h2>
                    <div className="w-16 h-0.5 bg-white mx-auto mb-8"></div>
                    <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed font-light">
                        Have a question that wasn't covered in our FAQ? We'd love to hear from you and provide personalized
                        assistance.
                    </p>
                </div>

                <Card className="bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-2xl shadow-xl overflow-hidden">
                    <CardContent className="p-0">
                        {isSubmitted ? (
                            <div className="text-center py-16 px-8">
                                <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-6" />
                                <h3 className="text-2xl font-light text-white mb-3 tracking-wide">Thank you!</h3>
                                <p className="text-gray-300 font-light leading-relaxed">
                                    Your question has been submitted successfully. We'll get back to you soon.
                                </p>
                            </div>
                        ) : (
                            <div className="p-8">
                                <form onSubmit={handleSubmit} className="space-y-8">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div className="space-y-2">
                                            <label htmlFor="name" className="block text-sm font-light text-gray-300 tracking-wide">
                                                Full Name
                                            </label>
                                            <Input
                                                id="name"
                                                name="name"
                                                type="text"
                                                required
                                                value={formData.name}
                                                onChange={handleInputChange}
                                                className="bg-gray-800/30 border-gray-700/50 text-white placeholder-gray-500 focus:border-gray-600 focus:ring-1 focus:ring-gray-600 h-12 rounded-xl font-light"
                                                placeholder="Enter your full name"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="email" className="block text-sm font-light text-gray-300 tracking-wide">
                                                Email Address
                                            </label>
                                            <Input
                                                id="email"
                                                name="email"
                                                type="email"
                                                required
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                className="bg-gray-800/30 border-gray-700/50 text-white placeholder-gray-500 focus:border-gray-600 focus:ring-1 focus:ring-gray-600 h-12 rounded-xl font-light"
                                                placeholder="Enter your email address"
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="question" className="block text-sm font-light text-gray-300 tracking-wide">
                                            Your Question
                                        </label>
                                        <Textarea
                                            id="question"
                                            name="question"
                                            required
                                            rows={6}
                                            value={formData.question}
                                            onChange={handleInputChange}
                                            className="bg-gray-800/30 border-gray-700/50 text-white placeholder-gray-500 focus:border-gray-600 focus:ring-1 focus:ring-gray-600 resize-none rounded-xl font-light"
                                            placeholder="Please describe your question in detail..."
                                        />
                                    </div>
                                    <div className="pt-4">
                                        <Button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-full bg-gray-800 hover:bg-gray-700 text-white border border-gray-700 transition-all duration-300 py-4 text-lg font-light tracking-wide rounded-xl"
                                        >
                                            {isSubmitting ? (
                                                <div className="flex items-center justify-center">
                                                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                                                    Submitting...
                                                </div>
                                            ) : (
                                                <div className="flex items-center justify-center">
                                                    <Send className="w-5 h-5 mr-3" />
                                                    Submit Question
                                                </div>
                                            )}
                                        </Button>
                                    </div>
                                </form>
                            </div>
                        )}
                    </CardContent>
                </Card>
            </div>
        </section>
    )
}
