import React from 'react';

const Button = ({ children, onClick, className, disabled }) => {
    return (
        <button 
            className={`bg-[#DB4444] text-white text-[18px] h-[70px] rounded-[4px] ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`} 
            onClick={onClick}
            disabled={disabled}
        >
            {children} 
        </button>
    );
};

export default Button;
