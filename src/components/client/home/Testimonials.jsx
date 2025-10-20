import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Star, Clock, DollarSign, Search, Menu, X, ShoppingCart, User } from 'lucide-react';
import { Link } from "react-router";
import TestimonialCard from "./TestimonialCard";

function Testimonials() {
    const testimonials = [
        {
            name: "Sarah Johnson",
            role: "Software Developer",
            text: "LearnHub transformed my career! The courses are incredibly detailed and the instructors are world-class. I went from beginner to landing my dream job in just 6 months.",
            rating: 5
        },
        {
            name: "Michael Chen",
            role: "Marketing Manager",
            text: "The digital marketing course exceeded all my expectations. The practical projects and real-world examples helped me implement strategies that increased our company's ROI by 150%.",
            rating: 5
        },
        {
            name: "Emily Rodriguez",
            role: "UX Designer",
            text: "As someone switching careers, LearnHub provided the perfect learning path. The community support and mentor feedback were invaluable. Highly recommend to anyone looking to upskill!",
            rating: 5
        }
    ];

    return (
        <section className="mt-16 px-4 md:px-8 max-w-[1200px] mx-auto">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">What Our Students Say</h2>
                <p className="text-gray-600 max-w-2xl mx-auto text-lg">Join thousands of successful learners who have transformed their careers with our courses.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                    <TestimonialCard key={index} {...testimonial} />
                ))}
            </div>
        </section>
    );
}

export default Testimonials;