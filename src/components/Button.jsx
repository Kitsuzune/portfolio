import React from 'react';

const Button = ({ children, onClick, className }) => {
    return (
        <button 
            className={`bg-[#DB4444] text-white text-[18px] h-[70px] rounded-[4px] ${className}`} 
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;
