import React, { createContext, useContext, useEffect, useState } from 'react';
import { fetchDocumentsRealtime } from '../services/firebaseService';


// Tạo Context
const subCategoriesContext = createContext();

// Custom hook để dễ sử dụng
export const useSubCategories = () => useContext(subCategoriesContext);

function SubCategoryProvider({children}) {

    const [subCategories, setSubCategories] = useState([]);

    useEffect(() => {
        getAllCate();
    }, []);

    const getAllCate = async () => {
       fetchDocumentsRealtime("subcategories", (items) => {
             setSubCategories(items);
       });
    }
    return (
        <subCategoriesContext.Provider value={subCategories}>
            {children}
        </subCategoriesContext.Provider>
    );
}

export default SubCategoryProvider;