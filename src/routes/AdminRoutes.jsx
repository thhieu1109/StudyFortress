import React from 'react';
import { Route, Routes } from 'react-router';

// Pages
import Categories from '../pages/admin/categories/Categories';
import SubCategories from '../pages/admin/subCategories/SubCategories';



function AdminRoutes() {
    return (
        <Routes>  
            <Route path="/categories" element={<Categories />} />
            <Route path="/subcategories" element={<SubCategories />} />
        </Routes>
    );
}

export default AdminRoutes;
