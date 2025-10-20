// --- InstructorPage.jsx ---
import React, { useState } from "react";
import { Plus, BookOpen, TrendingUp, Users, Star } from "lucide-react";
import InstructorHeader from "./InstructorHeader";
import InstructorModal from "../../../components/client/instructor/InstructorModal";
import CourseManage from "../../../components/client/instructor/CourseManage";
import { useCourses } from "../../../contexts/CourseProvider";

const InstructorPage = () => {
  const [activeModal, setActiveModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const courses = useCourses() ?? []; // ✅ luôn có mảng rỗng

  const openCourseModal = () => setActiveModal(true);
  const closeCourseModal = () => setActiveModal(false);

  // Filter logic
  const filteredCourses = courses.filter((course) => {
    const matchSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchStatus = statusFilter ? course.status === statusFilter : true;
    return matchSearch && matchStatus;
  });

  // Calculate stats
  const publishedCourses = courses.filter(c => c.isPublished).length;
  const totalStudents = courses.reduce((sum, course) => sum + (course.students || 0), 0);
  const averageRating = courses.length > 0 
    ? (courses.reduce((sum, course) => sum + (course.rating || 0), 0) / courses.length).toFixed(1)
    : 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white/20">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
              <div>
                <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2 p-5">
                  Trang giảng viên
                </h1>
                <p className="text-gray-600 text-lg">
                  Quản lý và theo dõi hiệu suất các khóa học của bạn
                </p>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 w-full lg:w-auto">
                <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl p-4 text-white text-center min-w-[120px]">
                  <BookOpen className="w-6 h-6 mx-auto mb-2" />
                  <div className="text-2xl font-bold">{courses.length}</div>
                  <div className="text-sm opacity-90">Tổng khóa học</div>
                </div>
                <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl p-4 text-white text-center min-w-[120px]">
                  <Users className="w-6 h-6 mx-auto mb-2" />
                  <div className="text-2xl font-bold">{totalStudents}</div>
                  <div className="text-sm opacity-90">Học viên</div>
                </div>
                <div className="bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl p-4 text-white text-center min-w-[120px]">
                  <Star className="w-6 h-6 mx-auto mb-2" />
                  <div className="text-2xl font-bold">{averageRating}</div>
                  <div className="text-sm opacity-90">Đánh giá TB</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-3 h-8 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
            <h2 className="text-2xl font-bold text-gray-800">Khóa học của tôi</h2>
            <div className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold">
              {filteredCourses.length} khóa học
            </div>
          </div>

          <button
            onClick={openCourseModal}
            className="group flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-2xl font-semibold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            <Plus className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
            Tạo khóa học mới
          </button>
        </div>

        {/* Course Management */}
        <CourseManage
          courses={courses}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          statusFilter={statusFilter}
          setStatusFilter={setStatusFilter}
          filteredCourses={filteredCourses}
          openModal={openCourseModal}
        />
      </div>

      {/* Modal */}
      <InstructorModal
        openCourseModal={activeModal}
        closeCourseModal={closeCourseModal}
      />

      {/* Background Elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-32 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-32 w-96 h-96 bg-gradient-to-tr from-indigo-400/20 to-cyan-400/20 rounded-full blur-3xl"></div>
      </div>
    </div>
  );
};

export default InstructorPage;