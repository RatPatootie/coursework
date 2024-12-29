import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import TimesCard from '@/Components/BookingComponent/TimesCard';
import './calendar.css';
import { usePage } from '@inertiajs/react';

const Dates = ({dateToSend,timeToSend}) => {
    const {days}= usePage().props;
    const [date, setDate] = useState(null);
    const [availableTimes, setAvailableTimes] = useState([]);
    const dateObjects = days.map(day => new Date(day));
   
    const tileDisabled = ({ date }) => {
        const isPastDate = date < new Date().setHours(0, 0, 0, 0);
        const isAvailableDate = dateObjects.some(
            (availableDate) => date.toDateString() === availableDate.toDateString()
        );
        return isPastDate || !isAvailableDate;
    };
    
    const onChange = (newDate) => {
        const formattedDate = newDate.toISOString().split('T')[0];
        setDate(newDate);
        dateToSend(formattedDate);
        fetch(`/booking/available-time?date=${formattedDate}`)
            .then(response => response.json())
            .then(data => setAvailableTimes(data))
            .catch(error => console.error('Error fetching available times:', error));
        // Update available times based on the selected date
        // setAvailableTimes(...);
    };

    const onTimeSelect = (time) => {
        console.log(`Selected time: ${time}`);
        timeToSend(time);
    };

    return (
        <>
            <h1 className='text-3xl font-bold mb-4'>Оберіть дату</h1>
            <div className='flex items-center justify-center rounded-lg p-4 bg-white'>
                <Calendar
                    onChange={onChange}
                    value={date}
                    tileDisabled={tileDisabled}
                    className='react-calendar'
                />
            </div>
            {date && (<>
            <h1 className='text-3xl my-3 font-bold'>Оберіть час</h1>
            <div className='p-2 md-10'>
                <TimesCard  
                    availableTimes={availableTimes.map(time => ({ start_time: time.start_time, id: time.id }))} 
                    onTimeSelect={onTimeSelect} 
                />
            </div>
            </>)}
        </>
    );
};

export default Dates;