import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '././BookingComponent/calendar.css';
import { useState } from 'react';

const BarberComponent = () => {
    const [date, setDate] = useState(null);
    const [booking, setBooking] = useState([]);

    const onChange = (newDate) => {
        const formattedDate = newDate.toISOString().split('T')[0];
        setDate(formattedDate);
        fetch(`/barbers/bookings?date=${formattedDate}`)
        .then(response => response.json())
        .then(data => setBooking(data))
        .catch(error => console.error('Error fetching available times:', error));
    }

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="mx-auto bg-white shadow-md rounded-lg p-6 flex flex-col items-center">
                <h1 className="text-3xl font-bold text-gray-700 mb-4">Панель барбера</h1>
                <p className="text-gray-700">Ласкаво просимо до панелі барбера.</p>
                
                {/* Додайте більше функціональностей адміністратора тут */}
            </div>
            <div className="bg-white p-4 shadow sm:rounded-lg sm:p-8 mt-4">
                <h1 className='text-3xl font-bold mb-4 text-center'>Оберіть дату</h1>
                <div className='flex items-center justify-center rounded-lg p-4 bg-white'>
                    <Calendar
                        onChange={onChange}
                        className='react-calendar'
                    />
                </div>
                {date && (
                    <div className="mt-4">
                        <h1 className="text-2xl font-bold mb-2 text-center">Бронювання на {date}</h1>
                        <div className="border-b-2 border-gray-200 mb-4">
                        {booking.length > 0 ? (
                            <ul className="space-y-4">
                                {booking.map((item) => (
                                    <li key={item.id} className="p-4 bg-gray-50 rounded-lg shadow">
                                        <p className="text-lg font-semibold">Користувач: {item.user.name}</p>
                                        <p className="text-lg">Послуга: {item.service.name}</p>
                                        <p className="text-lg">Час: {item.day_time.start_time}</p>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p className="text-center text-gray-500">Немає бронювань на цю дату.</p>
                        )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default BarberComponent;