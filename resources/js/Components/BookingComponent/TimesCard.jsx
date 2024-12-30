import React, { useState } from 'react';

const TimesCard = ({ availableTimes, onTimeSelect }) => {
    const [selectedTime, setSelectedTime] = useState(null);

    const handleTimeSelect = (time) => {
        setSelectedTime(time);
        onTimeSelect(time);
    };

    return (
        <div className="times-card flex flex-wrap justify-center">
            {availableTimes.map((time) => (
                <button 
                    key={time.id} 
                    onClick={() => handleTimeSelect(time.id)} 
                    className={`py-2 px-4 rounded-2xl m-2 w-40 text-center ${selectedTime === time.id ? 'bg-blue-500 text-white' : 'bg-gray-300/60'}`}
                >
                    {time.start_time}
                </button>
            ))}
        </div>
    );
};

export default TimesCard;