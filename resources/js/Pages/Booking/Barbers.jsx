import React, { useState } from 'react';

import BarberCard from '@/Components/BookingComponent/BarberCard';



const Barbers = () => {
    const [selectedBarberId, setSelectedBarberId] = useState(null);
    const barbers = [
        { id: 1, name: 'Богдан',type:'Топ барбер',  comments: '32', rating: 4.5,img_url:'https://i.pravatar.cc/400?img=67'  },
        { id: 2, name: 'Петро',type:'Топ барбер', comments: '12', rating: 4.0 ,img_url:'https://i.pravatar.cc/400?img=12' },
        { id: 3, name: 'Іван',type:'Топ барбер', comments: '23', rating: 4.8 ,img_url:'https://i.pravatar.cc/400?img=60'},
        { id: 4, name: 'Іван',type:'Топ барбер', comments: '23', rating: 4.8 ,img_url:'https://i.pravatar.cc/400?img=60'}
    ];
    const handleSelectBarber = () => {
        if (selectedBarberId) {
            console.log(`Selected barber: ${selectedBarberId}`);
        } else {
            console.log('No barber selected');
        }
    };

    return (
        <>
            <h1 className='text-3xl font-bold'>Оберіть барбера</h1>
            {barbers.map(barber => (
                <div className='p-2 w-3/4' key={barber.id}>
                    <BarberCard
                        img_url={barber.img_url}
                        name={barber.name}
                        type={barber.type}
                        comments={barber.comments}
                        rate={barber.rating}
                        isSelected={selectedBarberId === barber.id}
                        onSelect={() => setSelectedBarberId(barber.id)}
                    />
                </div>
            ))}
            <div className="p-4">
                <button 
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" 
                    onClick={handleSelectBarber}
                >
                    Вибрати барбера
                </button>
            </div>
        </>
    );
};

export default Barbers;