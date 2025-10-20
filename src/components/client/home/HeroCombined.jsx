import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Star, Clock, DollarSign, Search, Menu, X, ShoppingCart, User } from 'lucide-react';
import { Link } from "react-router";
import CourseCard from "./CourseCard";

function HeroCombined() {
    const [searchQuery, setSearchQuery] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    const courses = [
        {
            bgColor: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            time: "25h",
            title: "Web Development Bootcamp",
            subtitle: "Master HTML, CSS, JavaScript and React",
            price: "89",
            category: "Programming",
            rating: "4.8"
        },
        {
            bgColor: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
            time: "18h",
            title: "UI/UX Design Mastery",
            subtitle: "Create stunning user interfaces and experiences",
            price: "79",
            category: "Design",
            rating: "4.9"
        },
        {
            bgColor: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
            time: "32h",
            title: "Digital Marketing Pro",
            subtitle: "Grow your business with proven strategies",
            price: "99",
            category: "Marketing",
            rating: "4.7"
        },
        {
            bgColor: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
            time: "15h",
            title: "Personal Productivity",
            subtitle: "Achieve more in less time with proven methods",
            price: "49",
            category: "Development",
            rating: "4.6"
        }
    ];

    const handleSearch = (e) => {
        if (e) e.preventDefault();
        if (searchQuery.trim()) {
            alert(`Searching for: ${searchQuery}`);
        }
    };

    // Auto-play functionality
    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(() => {
            setCurrentIndex(prev => (prev + 1) % courses.length);
        }, 4000);

        return () => clearInterval(interval);
    }, [isAutoPlaying, courses.length]);

    const goToPrevious = () => {
        setCurrentIndex(prev => prev === 0 ? courses.length - 1 : prev - 1);
        setIsAutoPlaying(false);
    };

    const goToNext = () => {
        setCurrentIndex(prev => (prev + 1) % courses.length);
        setIsAutoPlaying(false);
    };

    const goToSlide = (index) => {
        setCurrentIndex(index);
        setIsAutoPlaying(false);
    };

    return (
        <div className="relative min-h-[500px] overflow-hidden bg-gradient-to-br from-blue-400 via-blue-700 to-indigo-800 rounded-3xl ">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%229C92AC%22 fill-opacity=%220.1%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%2230%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
            
            {/* Decorative Blobs */}
            <div className="absolute -right-20 -top-20 w-96 h-96 bg-gradient-to-br from-yellow-400/20 to-pink-500/20 rounded-full blur-3xl"></div>
            <div className="absolute -left-32 -bottom-32 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-500/20 rounded-full blur-3xl"></div>
            
            {/* Floating Elements */}
            <div className="absolute top-20 right-1/4 w-4 h-4 bg-yellow-300/60 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
            <div className="absolute top-40 right-1/3 w-6 h-6 bg-pink-300/60 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
            <div className="absolute bottom-32 left-1/4 w-5 h-5 bg-blue-300/60 rounded-full animate-bounce" style={{ animationDelay: '2s' }}></div>
            
            {/* Main Content */}
            <div className="relative z-10 container mx-auto px-6 py-12">
                <div className="flex flex-col lg:flex-row items-center gap-12 min-h-[500px]">
                    
                    {/* Left Content */}
                    <div className="flex-1 max-w-[600px] text-center lg:text-left p-7">
                        <h1 className="text-white font-bold text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
                            Learn any skill, <span className="text-yellow-300 relative">
                                anywhere
                                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-yellow-300/40 rounded-full"></div>
                            </span>
                        </h1>
                        <p className="text-purple-100 text-lg md:text-xl mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0">
                            Discover thousands of online courses from experts. Transform your career with new skills today.
                        </p>

                        {/* Search Bar */}
                        <div className="mb-8 flex items-center bg-white/95 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl max-w-md mx-auto lg:mx-0">
                            <input
                                className="flex-grow px-6 py-4 text-gray-700 text-sm outline-none bg-transparent"
                                placeholder="What do you want to learn today?"
                                type="search"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                onKeyPress={(e) => e.key === 'Enter' && handleSearch(e)}
                            />
                            <button 
                                className="px-6 py-4 text-purple-600 hover:text-purple-700 transition-colors" 
                                onClick={handleSearch}
                            >
                                <Search size={20} />
                            </button>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <button className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-semibold px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200">
                                Start Learning now
                            </button>
                            <button className="bg-white/20 backdrop-blur-sm text-white font-semibold px-8 py-4 rounded-2xl hover:bg-white/30 transition-all duration-200 border border-white/20">
                                Browse Courses
                            </button>
                        </div>
                    </div>

                    {/* Right Content - Course Showcase */}
                    <div className="flex-1 max-w-[700px] w-full">
                        <div className="relative">
                            {/* Course Cards Grid for Desktop */}
                            <div className="hidden md:grid grid-cols-4 gap-4 mb-8">
                                {courses.map((course, index) => (
                                    <div 
                                        key={index}
                                        className={`transform transition-all duration-500 ${
                                            index === currentIndex ? 'scale-105 z-10' : 'scale-95 opacity-80'
                                        }`}
                                    >
                                        <CourseCard 
                                            {...course} 
                                            isHighlighted={index === currentIndex}
                                        />
                                    </div>
                                ))}
                            </div>

                            {/* Mobile Slider */}
                            <div className="md:hidden relative overflow-hidden rounded-2xl">
                                <div 
                                    className="flex transition-transform duration-500 ease-out"
                                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                                >
                                    {courses.map((course, index) => (
                                        <div key={index} className="min-w-full flex justify-center">
                                            <CourseCard {...course} />
                                        </div>
                                    ))}
                                </div>

                                {/* Navigation arrows for mobile */}
                                <button 
                                    onClick={goToPrevious}
                                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 transition-all duration-200 text-white"
                                >
                                    <ChevronLeft size={16} />
                                </button>
                                
                                <button 
                                    onClick={goToNext}
                                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 transition-all duration-200 text-white"
                                >
                                    <ChevronRight size={16} />
                                </button>
                            </div>

                            {/* Dots indicator */}
                            <div className="flex justify-center mt-6 gap-2">
                                {courses.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => goToSlide(index)}
                                        className={`w-3 h-3 rounded-full transition-all duration-200 ${
                                            index === currentIndex 
                                                ? 'bg-yellow-400 scale-125' 
                                                : 'bg-white/40 hover:bg-white/60'
                                        }`}
                                        onMouseEnter={() => setIsAutoPlaying(false)}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeroCombined ;