import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Star, Clock, DollarSign, Search, Menu, X, ShoppingCart, User } from 'lucide-react';
import { Link } from "react-router";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="relative z-50 flex items-center justify-between mb-8 px-4 md:px-8 py-4 rounded-3xl bg-white/90 backdrop-blur-sm shadow-[0_8px_25px_rgba(0,0,0,0.08)]">
      {/* Logo */}
      <div className="flex items-center space-x-3">
        <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-500 rounded-xl flex items-center justify-center" />
        <span className="font-bold text-xl text-gray-800">
          Study Fortress
        </span>
      </div>

      {/* Menu desktop */}
      <nav className="hidden lg:flex items-center space-x-8 text-sm text-gray-600 font-medium">
        <a className="hover:text-purple-600 transition-colors duration-200 cursor-pointer" href="#">
          Courses
        </a>
        <a className="hover:text-purple-600 transition-colors duration-200 cursor-pointer" href="#">
          Categories
        </a>
        <a className="hover:text-purple-600 transition-colors duration-200 cursor-pointer" href="#">
          My Learning
        </a>
        <button className="bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-full px-6 py-2 text-sm font-semibold hover:shadow-lg transition-all duration-200">
          Become Instructor
        </button>
        {/* Nút Login */}
        <Link
          to="/login"
          className="border border-purple-600 text-purple-600 rounded-full px-6 py-2 text-sm font-semibold hover:bg-purple-600 hover:text-white transition-all duration-200"
        >
          Login
        </Link>
      </nav>

      {/* Icon bên phải */}
      <div className="hidden lg:flex items-center space-x-4">
        <button className="p-2 text-gray-600 hover:text-purple-600 transition-colors">
          <Search size={20} />
        </button>
        <button className="p-2 text-gray-600 hover:text-purple-600 transition-colors relative">
          <ShoppingCart size={20} />
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
            2
          </span>
        </button>
        <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full cursor-pointer" />
      </div>

      {/* Mobile menu toggle */}
      <button
        className="lg:hidden p-2"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white rounded-2xl shadow-xl mt-2 p-6 lg:hidden">
          <nav className="flex flex-col space-y-4 text-sm text-gray-600 font-medium">
            <a className="hover:text-purple-600 transition-colors duration-200 py-2" href="#">
              Courses
            </a>
            <a className="hover:text-purple-600 transition-colors duration-200 py-2" href="#">
              Categories
            </a>
            <a className="hover:text-purple-600 transition-colors duration-200 py-2" href="#">
              My Learning
            </a>
            <button className="bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-full px-6 py-3 text-sm font-semibold mt-4">
              Become Instructor
            </button>
            {/* Login Mobile */}
            <Link
              to="/login"
              className="border border-purple-600 text-purple-600 rounded-full px-6 py-3 text-sm font-semibold mt-2 text-center hover:bg-purple-600 hover:text-white transition-all duration-200"
            >
              Login
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

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

function Testimonials() {
    const testimonials = [
        {
            name: "Sarah Johnson",
            role: "Software Developer",
            text: "LearnHub transformed my career! The courses are incredibly detailed and the instructors are world-class. I went from beginner to landing my dream job in just 6 months.",
            rating: 5
        },
        {
            name: "Michael Chen",
            role: "Marketing Manager",
            text: "The digital marketing course exceeded all my expectations. The practical projects and real-world examples helped me implement strategies that increased our company's ROI by 150%.",
            rating: 5
        },
        {
            name: "Emily Rodriguez",
            role: "UX Designer",
            text: "As someone switching careers, LearnHub provided the perfect learning path. The community support and mentor feedback were invaluable. Highly recommend to anyone looking to upskill!",
            rating: 5
        }
    ];

    return (
        <section className="mt-16 px-4 md:px-8 max-w-[1200px] mx-auto">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">What Our Students Say</h2>
                <p className="text-gray-600 max-w-2xl mx-auto text-lg">Join thousands of successful learners who have transformed their careers with our courses.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                    <TestimonialCard key={index} {...testimonial} />
                ))}
            </div>
        </section>
    );
}

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

function HomePage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-purple-50/50 to-blue-50/30">
            <div className="max-w-[1440px] mx-auto">
                <Header />

                {/* Hero Section */}
                <section className="px-4 md:px-8 mb-16">
                    <HeroCombined/>
                </section>

                {/* Stats Section */}
                <StatsSection />

                {/* Popular Categories */}
                <PopularCategories />

                {/* Featured Courses */}
                <TopCourses />

                {/* Testimonials */}
                <Testimonials />

                {/* Newsletter */}
                <Newsletter />

                {/* Footer */}
                <Footer />
            </div>
        </div>
    );
}

export default HomePage;