import React from 'react';

const ToggleSection = ({ title, show, onToggle, children }) => {
    return (
        <div className="bg-white p-4 shadow sm:rounded-lg sm:p-8 mt-4">
            <div className="flex items-center cursor-pointer" onClick={onToggle}>
                <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center mr-4">
                    <span className={`inline-block transform transition-transform ${show ? 'rotate-90' : 'rotate-0'}`}>
                        &#128898;
                    </span>
                </div>
                <h2 className="text-lg font-medium text-gray-900">{title}</h2>
            </div>
            {show && children}
        </div>
    );
};

export default ToggleSection;
