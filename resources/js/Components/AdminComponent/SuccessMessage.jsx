import React from 'react';

const SuccessMessage = ({ message, onClose }) => {
    React.useEffect(() => {
        const timer = setTimeout(onClose, 3000);
        return () => clearTimeout(timer);
    }, [onClose]);

    return (
        <div className="fixed top-20 right-4 bg-green-500 text-white px-4 py-2 rounded shadow-lg">
            {message}
        </div>
    );
};
export default SuccessMessage;