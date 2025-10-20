import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Star, Clock, DollarSign, Search, Menu, X, ShoppingCart, User } from 'lucide-react';
import { Link } from "react-router";

function StatsSection() {
    const stats = [
        { number: "50K+", label: "Active Students", icon: "👥", color: "from-blue-500 to-cyan-500" },
        { number: "1,200+", label: "Expert Instructors", icon: "👨‍🏫", color: "from-purple-500 to-pink-500" },
        { number: "5,000+", label: "Online Courses", icon: "📚", color: "from-green-500 to-emerald-500" },
        { number: "98%", label: "Success Rate", icon: "🏆", color: "from-yellow-500 to-orange-500" }
    ];

    return (
        <section className="mt-16 px-4 md:px-8 max-w-[1200px] mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                    <div key={index} className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
                        <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300`}>
                            {stat.icon}
                        </div>
                        <div className="text-2xl font-bold text-gray-800 mb-1">{stat.number}</div>
                        <div className="text-sm text-gray-600">{stat.label}</div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default StatsSection ;