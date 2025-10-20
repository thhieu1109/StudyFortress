import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Star, Clock, DollarSign, Search, Menu, X, ShoppingCart, User } from 'lucide-react';
import { Link } from "react-router";
import PopularCategoryCard from "./PopularCategoryCard";

function PopularCategories() {
    const categories = [
        {
            bgColor: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            icon: "💻",
            title: "Programming",
            courseCount: "1,250"
        },
        {
            bgColor: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
            icon: "🎨",
            title: "Design",
            courseCount: "890"
        },
        {
            bgColor: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
            icon: "📈",
            title: "Marketing",
            courseCount: "650"
        },
        {
            bgColor: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
            icon: "🚀",
            title: "Business",
            courseCount: "420"
        }
    ];

    return (
        <section className="mt-16 px-4 md:px-8 max-w-[1200px] mx-auto">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Popular Categories</h2>
                <p className="text-gray-600 max-w-2xl mx-auto text-lg">Explore our most popular course categories and find the perfect learning path for your goals.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {categories.map((category, index) => (
                    <PopularCategoryCard key={index} {...category} />
                ))}
            </div>
        </section>
    );
}

export default PopularCategories ;