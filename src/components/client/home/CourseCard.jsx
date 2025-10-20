import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Star, Clock, DollarSign, Search, Menu, X, ShoppingCart, User } from 'lucide-react';
import { Link } from "react-router";

function CourseCard({ bgColor, time, title, subtitle, price, category, rating, isHighlighted = false }) {
    return (
        <div
            className={`rounded-2xl w-[160px] h-[240px] relative flex flex-col justify-between p-4 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 cursor-pointer ${
                isHighlighted ? 'ring-2 ring-yellow-400 ring-offset-2' : ''
            }`}
            style={{ background: bgColor }}
        >
            <div className="absolute top-3 right-3 bg-black/20 backdrop-blur-sm rounded-lg px-2 py-1 text-xs font-medium">
                {time}
            </div>

            <div className="pt-8">
                <div className="text-xs font-medium mb-2 opacity-80">{category}</div>
                <h3 className="text-sm font-bold mb-2 leading-tight">{title}</h3>
                <p className="text-xs opacity-90 line-clamp-2">{subtitle}</p>
            </div>

            <div>
                <div className="flex items-center mb-3">
                    <Star size={16} className="text-yellow-300 mr-1 fill-current" />
                    <span className="text-sm font-bold">{rating}</span>
                </div>
                <div className="text-lg font-bold mb-3">${price}</div>
                <button className="w-full bg-white/20 backdrop-blur-sm text-white rounded-xl py-2 text-xs font-semibold hover:bg-white/30 transition-all">
                    Enroll Now
                </button>
            </div>
        </div>
    );
}

export default CourseCard;