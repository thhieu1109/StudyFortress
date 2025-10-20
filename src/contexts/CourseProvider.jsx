import React, { createContext, useContext, useEffect, useState } from "react";
import { fetchDocumentsRealtime } from "../services/firebaseService";

// Tạo Context
const CoursesContext = createContext();

// Custom hook để sử dụng
export const useCourses = () => useContext(CoursesContext);

export function CourseProvider({ children }) {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    getAllCourses();
  }, []);

  const getAllCourses = async () => {
    fetchDocumentsRealtime("courses", (items) => {
      setCourses(items);
    });
  };

  return (
    <CoursesContext.Provider value={courses}>
      {children}
    </CoursesContext.Provider>
  );
}

export default CourseProvider;