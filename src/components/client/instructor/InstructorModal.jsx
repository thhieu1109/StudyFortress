// --- InstructorModal.jsx ---
import React, { useState, useRef } from "react";
import {
    Book,
    FileText,
    Image as ImageIcon,
    Folder,
    DollarSign,
    X,
    Upload,
    Eye,
    EyeOff,
    Loader2,
    Check,
    AlertCircle
} from "lucide-react";
import { useCategories } from "../../../contexts/CategoryProvider";
import { useAccounts } from "../../../contexts/AccountProvider";
import { addDocument } from "../../../services/firebaseService";

const initialCourse = {
    title: "",
    description: "",
    imgUrl: "",
    category_id: "",
    user_id: "",
    createAt: new Date(),
    isPublished: false,
    price: "",
};

function InstructorModal({ closeCourseModal, openCourseModal }) {
    const [courseFormData, setFormData] = useState(initialCourse);
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});
    const [imagePreview, setImagePreview] = useState("");
    const fileInputRef = useRef(null);
    
    const categories = useCategories();
    const { currentUser } = useAccounts();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...courseFormData, [name]: value });
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors({ ...errors, [name]: "" });
        }
    };

    const handleSwitch = () => {
        setFormData({ ...courseFormData, isPublished: !courseFormData.isPublished });
    };

    const handleImg = (event) => {
        const file = event.target.files[0];
        if (file) {
            // Validate file size (max 5MB)
            if (file.size > 5 * 1024 * 1024) {
                setErrors({ ...errors, image: "File size must be less than 5MB" });
                return;
            }
            
            const reader = new FileReader();
            reader.onload = () => {
                setFormData({ ...courseFormData, imgUrl: reader.result });
                setImagePreview(reader.result);
                setErrors({ ...errors, image: "" });
            };
            reader.readAsDataURL(file);
        }
    };

    const removeImage = () => {
        setFormData({ ...courseFormData, imgUrl: "" });
        setImagePreview("");
        if (fileInputRef.current) {
            fileInputRef.current.value = "";
        }
    };

    const validateForm = () => {
        const newErrors = {};
        
        if (!courseFormData.title.trim()) {
            newErrors.title = "Course title is required";
        }
        
        if (!courseFormData.description.trim()) {
            newErrors.description = "Course description is required";
        }
        
        if (!courseFormData.category_id) {
            newErrors.category_id = "Please select a category";
        }
        
        if (courseFormData.price && (isNaN(courseFormData.price) || parseFloat(courseFormData.price) < 0)) {
            newErrors.price = "Price must be a valid positive number";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async () => {
        if (!validateForm()) {
            return;
        }

        setLoading(true);
        try {
            const newCourse = {
                ...courseFormData,
                user_id: currentUser?.id || "",
                createAt: new Date(),
                price: courseFormData.price ? parseFloat(courseFormData.price) : 0,
            };

            await addDocument("courses", newCourse);
            closeCourseModal();
            setFormData(initialCourse);
            setImagePreview("");
            setErrors({});
        } catch (error) {
            console.error("Error saving course:", error);
            setErrors({ submit: "Failed to save course. Please try again." });
        } finally {
            setLoading(false);
        }
    };

    const handleClose = () => {
        setFormData(initialCourse);
        setImagePreview("");
        setErrors({});
        closeCourseModal();
    };

    if (!openCourseModal) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <div 
                className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                onClick={handleClose}
            />
            
            {/* Modal */}
            <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden">
                {/* Header */}
                <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 px-8 py-6 text-white">
                    <div className="flex items-center justify-between">
                        <div>
                            <h2 className="text-2xl font-bold mb-1">Tạo khóa học mới</h2>
                            <p className="text-blue-100">Chia sẻ kiến thức và kinh nghiệm của bạn</p>
                        </div>
                        <button
                            onClick={handleClose}
                            className="p-2 hover:bg-white/20 rounded-xl transition-colors duration-200"
                            disabled={loading}
                        >
                            <X className="w-6 h-6" />
                        </button>
                    </div>
                </div>

                {/* Content */}
                <div className="p-8 overflow-y-auto max-h-[calc(80vh-140px)]">
                    <div className="space-y-6">
                        {/* Title */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                <Book className="w-4 h-4 inline mr-2" />
                                Tên khóa học *
                            </label>
                            <input
                                type="text"
                                name="title"
                                value={courseFormData.title}
                                onChange={handleChange}
                                placeholder="Nhập tên khóa học..."
                                className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none transition-colors duration-300 ${
                                    errors.title 
                                        ? 'border-red-300 focus:border-red-500' 
                                        : 'border-gray-200 focus:border-blue-500'
                                }`}
                            />
                            {errors.title && (
                                <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                                    <AlertCircle className="w-4 h-4" />
                                    {errors.title}
                                </p>
                            )}
                        </div>

                        {/* Description */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                <FileText className="w-4 h-4 inline mr-2" />
                                Mô tả khóa học *
                            </label>
                            <textarea
                                name="description"
                                value={courseFormData.description}
                                onChange={handleChange}
                                placeholder="Mô tả chi tiết về khóa học của bạn..."
                                rows={4}
                                className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none transition-colors duration-300 resize-none ${
                                    errors.description 
                                        ? 'border-red-300 focus:border-red-500' 
                                        : 'border-gray-200 focus:border-blue-500'
                                }`}
                            />
                            {errors.description && (
                                <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                                    <AlertCircle className="w-4 h-4" />
                                    {errors.description}
                                </p>
                            )}
                        </div>

                        {/* Image Upload */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                <ImageIcon className="w-4 h-4 inline mr-2" />
                                Hình ảnh khóa học
                            </label>
                            
                            {!imagePreview ? (
                                <div 
                                    onClick={() => fileInputRef.current?.click()}
                                    className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center cursor-pointer hover:border-blue-400 hover:bg-blue-50 transition-colors duration-300"
                                >
                                    <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                                    <p className="text-gray-600 font-medium">Click để tải lên hình ảnh</p>
                                    <p className="text-gray-400 text-sm mt-1">PNG, JPG tối đa 5MB</p>
                                </div>
                            ) : (
                                <div className="relative rounded-xl overflow-hidden">
                                    <img
                                        src={imagePreview}
                                        alt="Course Preview"
                                        className="w-full h-48 object-cover"
                                    />
                                    <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                        <button
                                            onClick={removeImage}
                                            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors duration-200"
                                        >
                                            <X className="w-4 h-4 mr-2 inline" />
                                            Xóa hình ảnh
                                        </button>
                                    </div>
                                </div>
                            )}
                            
                            <input
                                ref={fileInputRef}
                                type="file"
                                accept="image/*"
                                onChange={handleImg}
                                className="hidden"
                            />
                            
                            {errors.image && (
                                <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                                    <AlertCircle className="w-4 h-4" />
                                    {errors.image}
                                </p>
                            )}
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Category */}
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    <Folder className="w-4 h-4 inline mr-2" />
                                    Danh mục *
                                </label>
                                <select
                                    name="category_id"
                                    value={courseFormData.category_id}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none transition-colors duration-300 cursor-pointer ${
                                        errors.category_id 
                                            ? 'border-red-300 focus:border-red-500' 
                                            : 'border-gray-200 focus:border-blue-500'
                                    }`}
                                >
                                    <option value="">Chọn danh mục</option>
                                    {categories.map((cat) => (
                                        <option key={cat.id} value={cat.id}>
                                            {cat.name}
                                        </option>
                                    ))}
                                </select>
                                {errors.category_id && (
                                    <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                                        <AlertCircle className="w-4 h-4" />
                                        {errors.category_id}
                                    </p>
                                )}
                            </div>

                            {/* Price */}
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    <DollarSign className="w-4 h-4 inline mr-2" />
                                    Giá (USD)
                                </label>
                                <input
                                    type="number"
                                    name="price"
                                    value={courseFormData.price}
                                    onChange={handleChange}
                                    placeholder="0 = Miễn phí"
                                    min="0"
                                    step="0.01"
                                    className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none transition-colors duration-300 ${
                                        errors.price 
                                            ? 'border-red-300 focus:border-red-500' 
                                            : 'border-gray-200 focus:border-blue-500'
                                    }`}
                                />
                                {errors.price && (
                                    <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                                        <AlertCircle className="w-4 h-4" />
                                        {errors.price}
                                    </p>
                                )}
                            </div>
                        </div>

                        {/* Publish Toggle */}
                        <div className="bg-gray-50 rounded-xl p-6">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    {courseFormData.isPublished ? (
                                        <Eye className="w-5 h-5 text-green-500" />
                                    ) : (
                                        <EyeOff className="w-5 h-5 text-gray-400" />
                                    )}
                                    <div>
                                        <h4 className="font-semibold text-gray-800">
                                            {courseFormData.isPublished ? 'Xuất bản ngay' : 'Lưu dạng nháp'}
                                        </h4>
                                        <p className="text-sm text-gray-600">
                                            {courseFormData.isPublished 
                                                ? 'Khóa học sẽ được công khai cho học viên' 
                                                : 'Khóa học sẽ được lưu dạng nháp'
                                            }
                                        </p>
                                    </div>
                                </div>
                                
                                <button
                                    type="button"
                                    onClick={handleSwitch}
                                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300 ${
                                        courseFormData.isPublished ? 'bg-green-500' : 'bg-gray-300'
                                    }`}
                                >
                                    <span
                                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-300 ${
                                            courseFormData.isPublished ? 'translate-x-6' : 'translate-x-1'
                                        }`}
                                    />
                                </button>
                            </div>
                        </div>

                        {/* Submit Error */}
                        {errors.submit && (
                            <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                                <p className="text-red-600 text-sm flex items-center gap-2">
                                    <AlertCircle className="w-4 h-4" />
                                    {errors.submit}
                                </p>
                            </div>
                        )}
                    </div>
                </div>

                {/* Footer */}
                <div className="bg-gray-50 px-8 py-6 flex justify-end gap-4 rounded-b-3xl flex-shrink-0 border-t border-gray-200">
                    <button
                        onClick={handleClose}
                        disabled={loading}
                        className="px-6 py-3 border-2 border-gray-200 text-gray-700 rounded-xl hover:bg-gray-100 transition-colors duration-300 font-semibold disabled:opacity-50"
                    >
                        Hủy
                    </button>
                    <button
                        onClick={handleSubmit}
                        disabled={loading}
                        className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:shadow-lg transition-all duration-300 font-semibold disabled:opacity-50 flex items-center gap-2"
                    >
                        {loading ? (
                            <>
                                <Loader2 className="w-4 h-4 animate-spin" />
                                Đang lưu...
                            </>
                        ) : (
                            <>
                                <Check className="w-4 h-4" />
                                Lưu khóa học
                            </>
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default InstructorModal;