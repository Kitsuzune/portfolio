import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react/dist/iconify.js";
import useBreadcrumbs from "use-react-router-breadcrumbs";
import { useLocation } from "react-router-dom";
import useSignOut from "react-auth-kit/hooks/useSignOut";

const DefaultLayout = ({ children }) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const location = useLocation();
    const signOut = useSignOut();
    const isActive = (path) => {
        // return location.pathname === path ? "bg-gray-500 text-white" : "bg-gray-800 text-white";
        return location.pathname.startsWith(path) ? "bg-gray-500 text-white" : "bg-gray-800 text-white";
    };
    const breadcrumbs = useBreadcrumbs();
    console.log(location.pathname);

    return (
        <div className="flex dark:bg-boxdark-2 dark:text-bodydark min-h-screen">
            {/* Sidebar */}
            <div
                className={`fixed inset-y-0 left-0 w-64 bg-gray-800 p-6 transition-all duration-300 ease-in-out ${sidebarOpen ? "block" : "hidden"
                    } md:block`}
            >
                <div className="flex items-center justify-between">
                    <h2
                        className={`text-white text-2xl font-semibold transition-opacity px-5 py-4`}
                    >
                        Admin
                    </h2>
                </div>
                <nav className={`mt-6`}>

                    <hr className="border" />

                    <Link
                        to="/admin/dashboard"
                        className={`block py-2 my-2 px-4 rounded hover:bg-gray-700 text-decoration-none ${isActive('/admin/dashboard')}`}
                    >
                        <div className="flex items-center">
                            <Icon
                                icon="material-symbols:dashboard-outline"
                                className="text-white text-[24px]"
                            />
                            <span className="ml-2">Dashboard</span>
                        </div>
                    </Link>

                    <Link
                        to="/admin/products"
                        className={`block py-2 my-2 px-4 rounded hover:bg-gray-700 text-decoration-none ${isActive('/admin/products')}`}
                    >
                        <div className="flex items-center">
                            <Icon
                                icon="carbon:inventory-management"
                                className="text-white text-[24px]"
                            />
                            <span className="ml-2">Products</span>
                        </div>
                    </Link>

                    <Link
                        to="/admin/orders"
                        className="block py-2 my-2 px-4 rounded hover:bg-gray-700 text-white text-decoration-none"
                    >
                        <div className="flex items-center">
                            <Icon
                                icon="bi:cart-plus"
                                className="text-white text-[24px]"
                            />
                            <span className="ml-2">Orders</span>
                        </div>
                    </Link>

                    <Link
                        to="/admin/reports"
                        className="block py-2 my-2 px-4 rounded hover:bg-gray-700 text-white text-decoration-none"
                    >
                        <div className="flex items-center">
                            <Icon
                                icon="tabler:report-money"
                                className="text-white text-[24px]"
                            />
                            <span className="ml-2">Report</span>
                        </div>
                    </Link>

                    <hr className="border" />

                    {/* <Link
                        to="/admin/logout"
                        className="block py-2 my-2 px-4 rounded hover:bg-gray-700 text-white text-decoration-none"
                    >
                        <div className="flex items-center">
                            <Icon
                                icon="material-symbols:logout-sharp"
                                className="text-white text-[24px]"
                            />
                            <span className="ml-2">Logout</span>
                        </div>
                    </Link> */}

                    <button
                        onClick={() => {
                            signOut();
                            window.location.href = '/';
                        }}
                        className="block py-2 my-2 px-4 rounded hover:bg-gray-700 text-white text-decoration-none w-full"
                    >
                        <div className="flex items-center">
                            <Icon
                                icon="material-symbols:logout-sharp"
                                className="text-white text-[24px]"
                            />
                            <span className="ml-2">Logout</span>
                        </div>
                    </button>

                </nav>
            </div>

            {/* Content */}
            <div
                className={`flex-1 flex flex-col ml-64 transition-all duration-300 ease-in-out`}
            >
                <header className="bg-gray-900 text-white p-4 flex justify-between items-center">
                    {/* <h1 className="text-xl font-semibold">Products</h1> */}

                    <div>
                        {breadcrumbs.map(({ match, breadcrumb }, index) => (
                            <li key={index + 1} className="inline-flex items-center">
                                <Link
                                    className={`text-decoration-none ${index === breadcrumbs.length - 1
                                        ? 'text-white'
                                        : 'text-gray-400 hover:text-white'
                                        }`}
                                >
                                    {breadcrumb}
                                </Link>
                                {index < breadcrumbs.length - 1 && (
                                    <span className="mx-2 text-gray-500"> {">"} </span>
                                )}
                            </li>
                        ))}
                    </div>

                    {/* // User Profile */}
                    <div className="flex items-center">
                        <Icon
                            icon="bi:person-circle"
                            className="text-white text-[24px] mr-2"
                        />
                        <span className="text-white">Admin</span>
                    </div>

                </header>
                <main className="p-6 bg-black h-full text-white">{children}</main>
            </div>
        </div>
    );
};

export default DefaultLayout;
