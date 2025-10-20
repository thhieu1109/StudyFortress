import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Star, Clock, DollarSign, Search, Menu, X, ShoppingCart, User } from 'lucide-react';
import { Link } from "react-router";

function PopularCategoryCard({ bgColor, icon, title, courseCount }) {
    return (
        <div className="group cursor-pointer">
            <div
                className="rounded-2xl p-8 flex flex-col items-center text-white transform group-hover:scale-105 transition-all duration-300 shadow-lg group-hover:shadow-xl relative overflow-hidden"
                style={{ background: bgColor }}
            >
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                    <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{icon}</div>
                    <h3 className="font-bold text-lg mb-2">{title}</h3>
                    <p className="text-sm opacity-90">{courseCount} courses</p>
                </div>
            </div>
        </div>
    );
}

export default PopularCategoryCard;