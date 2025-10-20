import React, { useState, useMemo } from 'react';

import { Clock, Users, BookOpen, ChevronLeft, ChevronRight } from 'lucide-react';
import { useCourses } from '../../contexts/CourseProvider';

function CoursePage() {
    const courses = useCourses();
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [priceFilter, setPriceFilter] = useState('all');
    const coursesPerPage = 9;

    // Lọc các khóa học đã public
    const publishedCourses = useMemo(() => {
        return courses.filter(course => course.isPublished === true);
    }, [courses]);

    // Lọc theo category và giá
    const filteredCourses = useMemo(() => {
        let filtered = [...publishedCourses];

        if (selectedCategory !== 'all') {
            filtered = filtered.filter(course => course.category_id === selectedCategory);
        }

        if (priceFilter === 'free') {
            filtered = filtered.filter(course => parseFloat(course.price) === 0);
        } else if (priceFilter === 'paid') {
            filtered = filtered.filter(course => parseFloat(course.price) > 0);
        }

        return filtered;
    }, [publishedCourses, selectedCategory, priceFilter]);

    // Lấy danh sách categories duy nhất
    const categories = useMemo(() => {
        const categoryIds = [...new Set(publishedCourses.map(course => course.category_id))];
        return categoryIds;
    }, [publishedCourses]);

    // Tính toán phân trang
    const indexOfLastCourse = currentPage * coursesPerPage;
    const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
    const currentCourses = filteredCourses.slice(indexOfFirstCourse, indexOfLastCourse);
    const totalPages = Math.ceil(filteredCourses.length / coursesPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const formatPrice = (price) => {
        const numPrice = parseFloat(price);
        return numPrice === 0 ? 'Free' : `$${numPrice.toFixed(2)}`;
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-purple-600 to-indigo-700 text-white py-16 px-4">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-5xl font-bold mb-4">Explore Our Courses</h1>
                    <p className="text-xl text-purple-100">Discover {publishedCourses.length} amazing courses to boost your skills</p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-12">
                {/* Filters */}
                <div className="bg-white rounded-2xl shadow-md p-6 mb-8">
                    <div className="flex flex-wrap gap-4 items-center">
                        <div className="flex-1 min-w-[200px]">
                            <label className="block text-sm font-semibold text-gray-700 mb-2">Category</label>
                            <select 
                                value={selectedCategory}
                                onChange={(e) => {
                                    setSelectedCategory(e.target.value);
                                    setCurrentPage(1);
                                }}
                                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                            >
                                <option value="all">All Categories</option>
                                {categories.map(catId => (
                                    <option key={catId} value={catId}>Category {catId.slice(0, 8)}...</option>
                                ))}
                            </select>
                        </div>

                        <div className="flex-1 min-w-[200px]">
                            <label className="block text-sm font-semibold text-gray-700 mb-2">Price</label>
                            <select 
                                value={priceFilter}
                                onChange={(e) => {
                                    setPriceFilter(e.target.value);
                                    setCurrentPage(1);
                                }}
                                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                            >
                                <option value="all">All Prices</option>
                                <option value="free">Free</option>
                                <option value="paid">Paid</option>
                            </select>
                        </div>

                        <div className="flex-1 min-w-[200px] flex items-end">
                            <div className="bg-purple-50 px-4 py-2.5 rounded-lg w-full">
                                <p className="text-sm text-gray-600">Showing</p>
                                <p className="text-lg font-bold text-purple-700">{filteredCourses.length} courses</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Courses Grid */}
                {currentCourses.length === 0 ? (
                    <div className="text-center py-16">
                        <BookOpen className="w-24 h-24 mx-auto text-gray-300 mb-4" />
                        <h3 className="text-2xl font-semibold text-gray-600 mb-2">No courses found</h3>
                        <p className="text-gray-500">Try adjusting your filters</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {currentCourses.map((course) => (
                            <div 
                                key={course.id} 
                                className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
                            >
                                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-purple-100 to-indigo-100">
                                    <img 
                                        src={course.imgUrl} 
                                        alt={course.title}
                                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                                        onError={(e) => {
                                            e.target.src = 'https://via.placeholder.com/400x300?text=Course+Image';
                                        }}
                                    />
                                    <div className="absolute top-4 right-4">
                                        <span className={`px-4 py-1.5 rounded-full text-sm font-semibold shadow-lg ${
                                            parseFloat(course.price) === 0 
                                                ? 'bg-green-500 text-white' 
                                                : 'bg-white text-purple-700'
                                        }`}>
                                            {formatPrice(course.price)}
                                        </span>
                                    </div>
                                </div>

                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2 hover:text-purple-600 transition-colors">
                                        {course.title}
                                    </h3>
                                    
                                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                                        {course.description}
                                    </p>

                                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                                        <div className="flex items-center text-gray-500 text-sm">
                                            <Clock className="w-4 h-4 mr-1" />
                                            <span>12 hours</span>
                                        </div>
                                        <div className="flex items-center text-gray-500 text-sm">
                                            <Users className="w-4 h-4 mr-1" />
                                            <span>2.5k students</span>
                                        </div>
                                    </div>

                                    <button className="w-full mt-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 shadow-md hover:shadow-lg">
                                        Enroll Now
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* Pagination */}
                {totalPages > 1 && (
                    <div className="mt-12 flex justify-center items-center gap-2">
                        <button
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                            className="p-2 rounded-lg border border-gray-300 hover:bg-purple-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </button>

                        <div className="flex gap-2">
                            {[...Array(totalPages)].map((_, index) => {
                                const pageNumber = index + 1;
                                
                                if (
                                    pageNumber === 1 ||
                                    pageNumber === totalPages ||
                                    (pageNumber >= currentPage - 1 && pageNumber <= currentPage + 1)
                                ) {
                                    return (
                                        <button
                                            key={pageNumber}
                                            onClick={() => handlePageChange(pageNumber)}
                                            className={`w-10 h-10 rounded-lg font-semibold transition-all ${
                                                currentPage === pageNumber
                                                    ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg'
                                                    : 'bg-white border border-gray-300 text-gray-700 hover:bg-purple-50'
                                            }`}
                                        >
                                            {pageNumber}
                                        </button>
                                    );
                                } else if (
                                    pageNumber === currentPage - 2 ||
                                    pageNumber === currentPage + 2
                                ) {
                                    return <span key={pageNumber} className="w-10 h-10 flex items-center justify-center">...</span>;
                                }
                                return null;
                            })}
                        </div>

                        <button
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={currentPage === totalPages}
                            className="p-2 rounded-lg border border-gray-300 hover:bg-purple-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                        >
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default CoursePage;