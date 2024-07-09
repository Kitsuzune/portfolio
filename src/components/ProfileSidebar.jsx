import { Icon } from '@iconify/react';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const ProfileSidebar = () => {
    const location = useLocation();

    const isActive = (path) => {
        return location.pathname === path ? 'text-red-500' : 'text-gray-400';
    };

    return (
        <div className="h-full bg-[#0F0F0F] text-white flex flex-col">
            <div className="mb-6">
                <h2 className="font-semibold text-lg">Manage My Account</h2>
                <div className='ml-10'>
                    <Link to="/profile" className={`block mt-2 text-sm text-decoration-none ${isActive('/profile')}`}>
                        Profile
                    </Link>
                    <Link to="/profile-picture" className={`block mt-2 text-sm text-decoration-none ${isActive('/profile-picture')}`}>
                        Profile Picture
                    </Link>
                    <Link to="/change-password" className={`block mt-2 text-sm text-decoration-none ${isActive('/change-password')}`}>
                        Change Password
                    </Link>
                </div>
            </div>
            <div className="mb-6">
                <h2 className="font-semibold text-lg">Marketplace</h2>
                <div className='ml-10'>
                    <Link to="/orders" className={`block mt-2 text-sm text-decoration-none ${isActive('/orders')}`}>
                        Transactions
                    </Link>
                    <Link to="/wishlist" className={`block mt-2 text-sm text-decoration-none ${isActive('/wishlist')}`}>
                        Wishlist
                    </Link>
                    <Link to="/favorites" className={`block mt-2 text-sm text-decoration-none ${isActive('/favorites')}`}>
                        Favorites
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default ProfileSidebar;
