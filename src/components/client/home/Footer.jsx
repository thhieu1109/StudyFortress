import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Star, Clock, DollarSign, Search, Menu, X, ShoppingCart, User } from 'lucide-react';
import { Link } from "react-router";

function Footer() {
    const footerSections = [
        {
            title: "Company",
            links: ["About Us", "Careers", "Press", "Contact"]
        },
        {
            title: "Courses",
            links: ["Programming", "Design", "Marketing", "Business"]
        },
        {
            title: "Support",
            links: ["Help Center", "Community", "Live Chat", "Status"]
        },
        {
            title: "Legal",
            links: ["Privacy Policy", "Terms of Service", "Cookie Policy", "GDPR"]
        }
    ];

    return (
        <footer className="mt-20 px-4 md:px-8 max-w-[1200px] mx-auto">
            <div className="border-t border-gray-200 pt-12 pb-8">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-12">
                    <div className="col-span-2">
                        <div className="flex items-center space-x-3 mb-6">
                            <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-500 rounded-xl flex items-center justify-center">
                                <span className="text-white font-bold text-xl">L</span>
                            </div>
                            <span className="font-bold text-2xl text-gray-800">LearnHub</span>
                        </div>
                        <p className="text-gray-600 text-sm mb-6 max-w-md leading-relaxed">
                            Empowering millions of learners worldwide with high-quality, affordable education from industry experts. Transform your future today.
                        </p>
                        <div className="flex space-x-4">
                            <button className="w-10 h-10 bg-gray-100 hover:bg-purple-100 rounded-lg flex items-center justify-center transition-colors">
                                <span className="text-lg">📘</span>
                            </button>
                            <button className="w-10 h-10 bg-gray-100 hover:bg-purple-100 rounded-lg flex items-center justify-center transition-colors">
                                <span className="text-lg">🐦</span>
                            </button>
                            <button className="w-10 h-10 bg-gray-100 hover:bg-purple-100 rounded-lg flex items-center justify-center transition-colors">
                                <span className="text-lg">📷</span>
                            </button>
                            <button className="w-10 h-10 bg-gray-100 hover:bg-purple-100 rounded-lg flex items-center justify-center transition-colors">
                                <span className="text-lg">💼</span>
                            </button>
                        </div>
                    </div>

                    {footerSections.map((section, index) => (
                        <div key={index}>
                            <h3 className="font-semibold text-gray-800 mb-4 text-lg">{section.title}</h3>
                            <ul className="space-y-3">
                                {section.links.map((link, linkIndex) => (
                                    <li key={linkIndex}>
                                        <a href="#" className="text-sm text-gray-600 hover:text-purple-600 transition-colors cursor-pointer">
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-sm text-gray-600 mb-4 md:mb-0">
                        © 2024 LearnHub. All rights reserved. Made with ❤️ for learners worldwide.
                    </p>
                    <div className="flex items-center space-x-6 text-sm text-gray-600">
                        <button className="hover:text-purple-600 transition-colors flex items-center gap-1">
                            <span>🌍</span> English
                        </button>
                        <button className="hover:text-purple-600 transition-colors flex items-center gap-1">
                            <span>💵</span> USD
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;