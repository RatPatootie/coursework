import React, { useState } from 'react';
import { usePage } from '@inertiajs/react';
import BarberCard from '@/Components/BookingComponent/BarberCard';

const Barbers = ({ barberToSend }) => {
    const { barbers } = usePage().props;
    const [selectedBarberId, setSelectedBarberId] = useState(null);

    const handleSelectBarber = () => {
        if (selectedBarberId) {
            barberToSend(selectedBarberId);} 
    };

    return (
        <>
            <h1 className='text-3xl font-bold'>Оберіть барбера</h1>
            <div className='flex flex-col  lg:w-3/4 sm:w-full'>
            {barbers.map(barber => (
                <div className='p-2 w-full' key={barber.id}>
                    <BarberCard
                        img_url={barber.img_url}
                        name={barber.name}
                        type={barber.type}
                        comments={barber.comments}
                        rate={barber.rate}
                        id={barber.id}
                        isSelected={selectedBarberId === barber.id}
                        onSelect={() => setSelectedBarberId(barber.id)}
                    />
                </div>
            ))}
            {selectedBarberId && (
            <div className="p-4 flex justify-center">
                <button 
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" 
                    onClick={handleSelectBarber}
                >
                    Вибрати барбера
                </button>
            </div>)}
            </div>
        </>
    );
};

export default Barbers;