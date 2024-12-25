import RauthLayout from '@/Layouts/RauthLayout';
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Dates = () => {
    const [date, setDate] = useState(new Date());

    const onChange = (newDate) => {
        setDate(newDate);
    };

    return (
        <>
            <style>
                {`
                    .react-calendar {
                        border: none;
                        font-family: Arial, Helvetica, sans-serif;
                    }
                    .react-calendar__tile {
                        background:rgb(255, 255, 255);
                        border-radius: 30px;
                        margin: 4px;
                        
                    }
                    .react-calendar__tile--active {
                        background:rgba(75, 53, 30, 0.48);
                        color: white;
                    }
                    .react-calendar__tile--now {
                        background:rgba(88, 88, 88, 0.22);
                    }
                `}
            </style>
            <h1>Booking Dates</h1>
            <div className='flex items-center'>
                <Calendar onChange={onChange} value={date} />
            </div>
           
            <p>Selected date: {date.toDateString()}</p>
        </>
    );
};

export default Dates;