import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import axios from 'axios';
import SuccessMessage from './SuccessMessage';

const AddDayOfWorksComponent = ({barbers}) => {
    const [selectedDates, setSelectedDates] = useState([]);
    const [selectedBarber, setSelectedBarber] = useState('');
       const [successMessage, setSuccessMessage] = useState('');

    const toggleDate = (date) => {
        const dateString = date.toDateString(); // Приведення до унікального рядка
        if (selectedDates.some((d) => d.toDateString() === dateString)) {
            // Видалення дати, якщо вона вже обрана
            setSelectedDates(selectedDates.filter((d) => d.toDateString() !== dateString));
        } else {
            // Додавання нової дати
            setSelectedDates([...selectedDates, date]);
        }
    };

    const tileClassName = ({ date, view }) => {
        // Додавання класу для обраних дат
        if (view === 'month' && selectedDates.some((d) => d.toDateString() === date.toDateString())) {
            return 'selected-date';
        }
    };
    const handleSaveDates = async () => {
        try {
            const response = await axios.post(`/api/barbers/${selectedBarber}/save-dates`, { dates: selectedDates });
            setSuccessMessage('Дати успішно збережено!');
            setSelectedDates([]);
            
        } catch (error) {
            console.error('Error saving dates:', error);
        }
    }
    const handleBarberClick = async (barberId) => {
        setSelectedBarber(barberId);
        try {
            const selectedDataResponse = await axios.get(`/api/barbers/${barberId}/selected-dates`);
            const dates = selectedDataResponse.data.map(item => new Date(item.day));
            setSelectedDates(dates);
        } catch (error) {
            console.error('Error fetching services:', error);
        }
    };

    return (
        <>
            <div className="p-4 flex flex-col justify-between items-center">
            {successMessage && <SuccessMessage message={successMessage} onClose={() => setSuccessMessage('')} />}
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Оберіть барбера:</label>
                <div className="mt-2 space-x-2">
                    {barbers.map(barber => (
                        <button
                            key={barber.id}
                            onClick={() => handleBarberClick(barber.id)}
                            className={`px-4 my-2 py-2 rounded hover:bg-gray-500 text-xs ${selectedBarber === barber.id ? 'bg-gray-500 text-white' : 'bg-gray-800 text-white'}`}
                               >
                            {barber.name} {barber.surname}
                        </button>
                    ))}
                </div>
            </div>
        {selectedBarber && (
        <div className='flex flex-col justify-between interm-center mx-auto p-4'>
            <h1>Оберіть кілька дат</h1>
            <Calendar
                onClickDay={toggleDate}
                tileClassName={tileClassName}
            />
            <div>
                
            </div>
            <style>{`
                .selected-date {
                    background-color: #4caf50 !important;
                    color: white;
                    border-radius: 50%;
                }
            `}</style>
            <div>
            {selectedDates.length > 0 && (
                <>
                    <button
                        onClick={handleSaveDates}
                        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700"
                    >
                        Зберегти
                    </button>
                   
                </>
            )}
             <button
                onClick={() => setSelectedBarber('')}
                className="px-4 py-2  mx-4 bg-red-500 text-white rounded hover:bg-red-700"
            >
                Скасувати
            </button>
            <div/>
                
        </div>
        </div>
    )}
    
    </div>
    </>

    );
};

export default AddDayOfWorksComponent;
