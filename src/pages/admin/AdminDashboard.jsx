import React, { useState } from 'react';
import SidebarAdmin from '../../components/admin/SidebarAdmin';
import HeaderAdmin from '../../components/admin/HeaderAdmin';
import AppRoutes from '../../routes/AppRoutes';

function AdminDashboard(props) {

    const [activeMenu, setActiveMenu] = useState('dashboard');
    return (
       
        <div className="md:flex md:h-screen bg-gray-100">
            <SidebarAdmin activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
            <div className="flex-1 flex flex-col">
                <HeaderAdmin userName="John Doe" />
                <div className="flex-1 p-6 overflow-y-auto">
                    <AppRoutes />
                </div>
                
            </div>
        </div>
    );
}

export default AdminDashboard;