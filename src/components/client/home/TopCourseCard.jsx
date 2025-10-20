import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Star, Clock, DollarSign, Search, Menu, X, ShoppingCart, User } from 'lucide-react';
import { Link } from "react-router";

function TopCourseCard({ image, title, instructor, rating, students, price, originalPrice, isHot = false }) {
    return (
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group">
            <div className="relative">
                <div className="w-full h-48 bg-gradient-to-br from-purple-400 via-blue-500 to-cyan-500 relative overflow-hidden">
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
                    <div className="absolute inset-0 flex items-center justify-center text-white text-6xl opacity-20 group-hover:opacity-30 transition-opacity duration-300">
                        📚
                    </div>
                </div>
                {isHot && (
                    <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold animate-pulse">
                        Hot
                    </div>
                )}
            </div>
            <div className="p-6">
                <h3 className="font-bold text-lg mb-2 text-gray-800 line-clamp-2 group-hover:text-purple-600 transition-colors duration-300">{title}</h3>
                <p className="text-sm text-gray-600 mb-3">by {instructor}</p>
                <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400 mr-2">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} size={16} className="fill-current" />
                        ))}
                    </div>
                    <span className="text-sm font-medium text-gray-700">{rating}</span>
                    <span className="text-sm text-gray-500 ml-1">({students})</span>
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <span className="text-xl font-bold text-gray-800">${price}</span>
                        {originalPrice && (
                            <span className="text-sm text-gray-500 line-through ml-2">${originalPrice}</span>
                        )}
                    </div>
                    <button className="bg-purple-600 text-white px-4 py-2 rounded-xl text-sm font-semibold hover:bg-purple-700 transition-colors transform hover:scale-105 duration-200">
                        Enroll
                    </button>
                </div>
            </div>
        </div>
    );
}

export default TopCourseCard;