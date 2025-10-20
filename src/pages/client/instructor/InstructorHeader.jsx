import { Bell, Plus } from 'lucide-react';
import React from 'react';

function InstructorHeader({openCourseModal}) {
    return (
        <div>
            <div className="bg-white/95 backdrop-blur-xl rounded-3xl p-8 mb-8 shadow-xl">
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
                    <div className="flex items-center gap-4">
                        <div className="w-14 h-14 bg-gradient-to-r from-pink-500 to-orange-400 rounded-2xl flex items-center justify-center text-white text-xl font-bold">
                            TH
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-gray-800 mb-1">Xin chào, Thầy Hưng!</h2>
                            <p className="text-gray-600">Hôm nay bạn muốn dạy điều gì đặc biệt?</p>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <button
                            onClick={openCourseModal}
                            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold flex items-center gap-2 hover:transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                        >
                            <Plus className="w-5 h-5" />
                            Tạo khóa học mới
                        </button>
                        <button className="bg-white/20 backdrop-blur text-white px-6 py-3 rounded-xl font-semibold flex items-center gap-2 border-2 border-white/30 hover:bg-white/30 transition-all duration-300">
                            <Bell className="w-5 h-5" />
                            Thông báo
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InstructorHeader;