import { ChevronDown, ChevronRight, Menu } from 'lucide-react';
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router';

function SidebarAdmin() {
    const location = useLocation();
    const currentPath = location.pathname;

    const [clickMenuIcon, setClickMenuIcon] = useState(false)
    const [expandedMenus, setExpandedMenus] = useState({});

    const toggleMenu = (menuId) => {
        setExpandedMenus((prev) => ({
            ...prev,
            [menuId]: !prev[menuId],
        }));
    };

    // Khai báo path rõ ràng ở đây
    const menuItems = [
       
        {
            id: 'categories',
            label: 'Categories Management',
            icon: '📂',
            expandable: true,
            children: [
                { label: 'Categories', path: '/categories' },
                { label: 'SubCategories', path: '/subcategories' },
            ],
        },
        {
            id: 'products',
            label: 'Products Management',
            icon: '🛒',
            expandable: true,
            children: [
                { label: 'All Products', path: '/products' },
            ],
        },
    ];

    const MenuItem = ({ item, level = 0 }) => {
        const isExpanded = expandedMenus[item.id];
        const isActive = currentPath === item.path;

        return (
            <div>
                {item.expandable ? (
                    <div
                        className={`flex items-center justify-between px-4 py-2 cursor-pointer transition-colors
                            ${isActive ? 'bg-blue-100 text-blue-600 border-r-2 border-blue-600' 
                                       : 'text-gray-600 hover:bg-gray-100'}`}
                        onClick={() => toggleMenu(item.id)}
                        style={{ paddingLeft: `${16 + level * 16}px` }}
                    >
                        <div className="flex items-center">
                            <span className="mr-2 text-sm">{item.icon}</span>
                            <span className="text-sm font-medium">{item.label}</span>
                        </div>
                        {isExpanded ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                    </div>
                ) : (
                    <Link
                        to={item.path}
                        className={`flex items-center justify-between px-4 py-2 transition-colors
                            ${isActive ? 'bg-blue-100 text-blue-600 border-r-2 border-blue-600' 
                                       : 'text-gray-600 hover:bg-gray-100'}`}
                        style={{ paddingLeft: `${16 + level * 16}px` }}
                    >
                        <div className="flex items-center">
                            <span className="mr-2 text-sm">{item.icon}</span>
                            <span className="text-sm font-medium">{item.label}</span>
                        </div>
                    </Link>
                )}

                {item.expandable && isExpanded && item.children && (
                    <div className="bg-gray-50">
                        {item.children.map((child, index) => {
                            const isChildActive = currentPath === child.path;
                            return (
                                <Link
                                    key={index}
                                    to={child.path}
                                    className={`block px-8 py-2 text-sm transition-colors
                                        ${isChildActive ? 'bg-blue-100 text-blue-600' 
                                                        : 'text-gray-600 hover:bg-gray-200'}`}
                                >
                                    {child.label}
                                </Link>
                            );
                        })}
                    </div>
                )}
            </div>
        );
    };

    return (
        <div className="bg-white shadow-lg">
            {/* Logo */}
            <div className="flex items-center px-4 py-7 border-b">
                <Menu size={20} className="mr-2" onClick={() => setClickMenuIcon(!clickMenuIcon)} />
                <span className="font-bold text-xl">
                    WatchTV<span className="text-green-500">Admin</span>
                </span>
            </div>

            {/* Menu Items */}
            <div className={`py-4 ${clickMenuIcon ? "max-md:hidden" : ""}`}>
                <div className="px-4 py-2">
                    <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">SIDE BAR</h3>
                </div>
                {menuItems.map((item) => (
                    <MenuItem key={item.id} item={item} />
                ))}
            </div>
        </div>
    );
}

export default SidebarAdmin;
