
import React, { createContext, useContext, useEffect, useState } from 'react';
import { fetchDocumentsRealtime } from '../services/firebaseService';


// Tạo Context
const CategoriesContext = createContext();

// Custom hook để dễ sử dụng
export const useCategories = () => useContext(CategoriesContext);

function CategoryProvider({children}) {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getAllCate();
    }, []);

    const getAllCate = async () => {
       fetchDocumentsRealtime("categories", (items) => {
             setCategories(items);
       });
    }

    return (
        <CategoriesContext.Provider value={categories}>
            {children}
        </CategoriesContext.Provider>
    );
}

export default CategoryProvider;