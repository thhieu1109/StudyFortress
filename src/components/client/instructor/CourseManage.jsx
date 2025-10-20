// --- CourseManage.jsx ---
import { BookOpen, Clock, Edit3, Eye, Star, Trash2, Users, Search, Filter, TrendingUp, Award } from 'lucide-react';
import React from 'react';

function CourseManage({
  courses,
  searchTerm,
  setSearchTerm,
  statusFilter,
  setStatusFilter,
  filteredCourses,
  openModal,
}) {
  if (!courses || courses.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl p-12">
        <div className="bg-white/80 backdrop-blur-sm rounded-full p-6 mb-6 shadow-lg">
          <BookOpen className="w-16 h-16 text-blue-500" />
        </div>
        <h3 className="text-2xl font-bold text-gray-800 mb-2">Chưa có khóa học nào</h3>
        <p className="text-gray-500 text-center max-w-md">
          Hãy tạo khóa học đầu tiên của bạn để bắt đầu hành trình chia sẻ kiến thức!
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Header Section với gradient background */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-3xl p-8 text-white shadow-2xl">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
          <div>
            <h3 className="text-3xl font-bold mb-2 flex items-center gap-3">
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-2">
                <BookOpen className="w-8 h-8" />
              </div>
              Quản lý khóa học
            </h3>
            <p className="text-blue-100 text-lg">
              Quản lý và theo dõi hiệu suất các khóa học của bạn
            </p>
          </div>

          {/* Stats Cards */}
          <div className="flex gap-4 w-full lg:w-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center min-w-[100px]">
              <div className="text-2xl font-bold">{courses.length}</div>
              <div className="text-sm text-blue-100">Khóa học</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center min-w-[100px]">
              <div className="text-2xl font-bold">
                {courses.filter(c => c.isPublished).length}
              </div>
              <div className="text-sm text-blue-100">Đã xuất bản</div>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="bg-white/95 backdrop-blur-xl rounded-3xl p-6 shadow-xl border border-gray-100">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Search Input */}
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Tìm kiếm khóa học theo tên..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-2xl focus:border-blue-500 focus:outline-none transition-all duration-300 bg-gray-50 hover:bg-white"
            />
          </div>

          {/* Filter Dropdown */}
          <div className="relative">
            <Filter className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="appearance-none pl-12 pr-10 py-4 border-2 border-gray-200 rounded-2xl focus:border-blue-500 focus:outline-none bg-gray-50 hover:bg-white cursor-pointer transition-all duration-300 min-w-[200px]"
            >
              <option value="">Tất cả trạng thái</option>
              <option value="published">Đã xuất bản</option>
              <option value="draft">Nháp</option>
            </select>
          </div>
        </div>
      </div>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {filteredCourses.map((course, index) => (
          <div
            key={course.id}
            className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
          >
            {/* Course Thumbnail */}
            <div className="h-52 bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
              {course.imgUrl ? (
                <img
                  src={course.imgUrl}
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              ) : (
                <div className="flex items-center justify-center h-full bg-gradient-to-br from-blue-50 to-indigo-100">
                  <BookOpen className="w-20 h-20 text-blue-400" />
                </div>
              )}

              {/* Status Badge */}
              <div className="absolute top-4 right-4">
                <div
                  className={`px-4 py-2 text-white text-xs font-bold rounded-full backdrop-blur-sm shadow-lg ${
                    course.isPublished 
                      ? 'bg-gradient-to-r from-green-500 to-emerald-500' 
                      : 'bg-gradient-to-r from-gray-500 to-gray-600'
                  }`}
                >
                  {course.isPublished ? '✓ Published' : '○ Draft'}
                </div>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Course Content */}
            <div className="p-6">
              {/* Title */}
              <h4 className="text-xl font-bold text-gray-800 mb-4 line-clamp-2 group-hover:text-blue-600 transition-colors duration-300">
                {course.title}
              </h4>

              {/* Stats Row */}
              <div className="grid grid-cols-3 gap-4 mb-4">
                <div className="text-center bg-gray-50 rounded-xl p-3">
                  <Users className="w-5 h-5 text-blue-500 mx-auto mb-1" />
                  <div className="text-sm font-semibold text-gray-800">{course.students || 0}</div>
                  <div className="text-xs text-gray-500">học viên</div>
                </div>
                <div className="text-center bg-gray-50 rounded-xl p-3">
                  <Clock className="w-5 h-5 text-green-500 mx-auto mb-1" />
                  <div className="text-sm font-semibold text-gray-800">{course.duration || '0h'}</div>
                  <div className="text-xs text-gray-500">thời lượng</div>
                </div>
                <div className="text-center bg-gray-50 rounded-xl p-3">
                  <Star className="w-5 h-5 text-yellow-500 mx-auto mb-1" />
                  <div className="text-sm font-semibold text-gray-800">
                    {course.rating > 0 ? course.rating : '--'}
                  </div>
                  <div className="text-xs text-gray-500">đánh giá</div>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-600 text-sm mb-6 line-clamp-3 leading-relaxed">
                {course.description}
              </p>

              {/* Footer */}
              <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                {/* Price */}
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-indigo-500" />
                  <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {course.price ? `$${course.price}` : 'Miễn phí'}
                  </span>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <button 
                    className="w-11 h-11 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl hover:shadow-lg hover:scale-110 transition-all duration-300 flex items-center justify-center group"
                    title="Xem khóa học"
                  >
                    <Eye className="w-5 h-5" />
                  </button>
                  <button
                    // onClick={() => openModal('courseModal')}
                    className="w-11 h-11 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl hover:shadow-lg hover:scale-110 transition-all duration-300 flex items-center justify-center"
                    title="Chỉnh sửa"
                  >
                    <Edit3 className="w-5 h-5" />
                  </button>
                  <button
                    // onClick={() => openModal('deleteModal')}
                    className="w-11 h-11 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-xl hover:shadow-lg hover:scale-110 transition-all duration-300 flex items-center justify-center"
                    title="Xóa khóa học"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* No Results */}
      {filteredCourses.length === 0 && courses.length > 0 && (
        <div className="text-center py-12 bg-white/95 backdrop-blur-xl rounded-3xl shadow-xl">
          <div className="bg-gray-100 rounded-full p-6 w-fit mx-auto mb-4">
            <Search className="w-12 h-12 text-gray-400" />
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">Không tìm thấy khóa học nào</h3>
          <p className="text-gray-500">
            Thử thay đổi từ khóa tìm kiếm hoặc bộ lọc để xem kết quả khác
          </p>
        </div>
      )}
    </div>
  );
}

export default CourseManage;