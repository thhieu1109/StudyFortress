import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Star, Clock, DollarSign, Search, Menu, X, ShoppingCart, User } from 'lucide-react';
import { Link } from "react-router";

function Newsletter() {
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email.trim()) {
            alert(`Thank you for subscribing with ${email}!`);
            setEmail("");
        }
    };

    return (
        <section className="mt-16 px-4 md:px-8 max-w-[1200px] mx-auto">
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%23ffffff%22 fill-opacity=%220.1%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%2230%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
                <div className="absolute -right-16 -top-16 w-32 h-32 bg-yellow-400/20 rounded-full blur-2xl"></div>
                <div className="absolute -left-20 -bottom-20 w-40 h-40 bg-pink-400/20 rounded-full blur-2xl"></div>

                <div className="relative flex flex-col lg:flex-row items-center justify-between">
                    <div className="mb-8 lg:mb-0 lg:mr-8 text-center lg:text-left">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Updated!</h2>
                        <p className="text-lg text-purple-100 max-w-md">Get the latest courses, exclusive offers, and learning tips delivered to your inbox.</p>
                    </div>

                    <div className="flex w-full max-w-md">
                        <input
                            className="flex-grow rounded-l-2xl px-6 py-4 text-gray-800 outline-none text-sm bg-white/95 backdrop-blur-sm"
                            placeholder="Enter your email address"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            onKeyPress={(e) => e.key === 'Enter' && handleSubmit(e)}
                        />
                        <button
                            className="bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-semibold px-8 py-4 rounded-r-2xl transition-colors"
                            onClick={handleSubmit}
                        >
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Newsletter;