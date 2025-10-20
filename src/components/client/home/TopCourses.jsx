import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Star, Clock, DollarSign, Search, Menu, X, ShoppingCart, User } from 'lucide-react';
import { Link } from "react-router";
import TopCourseCard from "./TopCourseCard";

function TopCourses() {
    const courses = [
        {
            title: "Complete Web Development Bootcamp 2024",
            instructor: "Dr. Angela Yu",
            rating: "4.8",
            students: "12,430",
            price: "89.99",
            originalPrice: "199.99",
            isHot: true
        },
        {
            title: "Machine Learning A-Z: Python & R in Data Science",
            instructor: "Kirill Eremenko",
            rating: "4.7",
            students: "8,920",
            price: "74.99",
            originalPrice: "149.99"
        },
        {
            title: "The Complete Digital Marketing Course",
            instructor: "Rob Percival",
            rating: "4.6",
            students: "15,680",
            price: "69.99",
            originalPrice: "129.99",
            isHot: true
        },
        {
            title: "iOS App Development with Swift",
            instructor: "Angela Yu",
            rating: "4.9",
            students: "6,540",
            price: "94.99",
            originalPrice: "179.99"
        },
        {
            title: "Complete Graphic Design Course",
            instructor: "Lindsay Marsh",
            rating: "4.5",
            students: "9,320",
            price: "79.99",
            originalPrice: "159.99"
        },
        {
            title: "Python Programming Masterclass",
            instructor: "Tim Buchalka",
            rating: "4.8",
            students: "11,250",
            price: "84.99",
            originalPrice: "169.99"
        }
    ];

    return (
        <section className="mt-16 px-4 md:px-8 max-w-[1200px] mx-auto">
            <div className="flex justify-between items-center mb-12">
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">Featured Courses</h2>
                    <p className="text-gray-600 text-lg">Hand-picked courses by our experts</p>
                </div>
                <button className="text-purple-600 font-semibold hover:text-purple-700 transition-colors flex items-center gap-2 group">
                    View All
                    <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
                </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {courses.map((course, index) => (
                    <TopCourseCard key={index} {...course} />
                ))}
            </div>
        </section>
    );
}

export default TopCourses;