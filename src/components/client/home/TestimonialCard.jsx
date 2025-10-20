import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Star, Clock, DollarSign, Search, Menu, X, ShoppingCart, User } from 'lucide-react';
import { Link } from "react-router";

function TestimonialCard({ name, role, text, rating }) {
    return (
        <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500"></div>
            <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} className="text-yellow-400 fill-current" />
                ))}
            </div>
            <p className="text-gray-600 mb-6 italic leading-relaxed text-lg">"{text}"</p>
            <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mr-4 flex items-center justify-center text-white font-bold">
                    {name.charAt(0)}
                </div>
                <div>
                    <div className="font-semibold text-gray-800">{name}</div>
                    <div className="text-sm text-gray-600">{role}</div>
                </div>
            </div>
        </div>
    );
}

export default TestimonialCard;