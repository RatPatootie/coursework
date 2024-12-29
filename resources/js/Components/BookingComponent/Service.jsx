import React, { useState, useEffect } from 'react';
import ServiceCard from '@/Components/BookingComponent/ServiceCard';
import { usePage } from '@inertiajs/react';
import axios from 'axios';

const Service = ({ barberActive, serviceToSend }) => {
    const { services: initialServices } = usePage().props;
    const [services, setServices] = useState(initialServices);
    const [selectedService, setSelectedService] = useState(null);

    const handleCheckboxChange = (serviceId) => {
        setSelectedService(serviceId);
    };

    const handleSelectService = () => {
        console.log(selectedService);
        serviceToSend(selectedService);
    };

    useEffect(() => {
        if (barberActive !== null) {
            fetch(`/booking/available-service?barber_id=${barberActive}`)
                .then(response => response.json())
                .then(data => {
                    setServices(data);
                })
                .catch(error => {
                    console.error('There was an error making the request:', error);
                });
        }
    }, [barberActive]);

    return (
        <>
            <h1 className='text-3xl font-bold mb-4 mt-5'>Оберіть послугу</h1>
            <div className='flex flex-col  lg:w-3/4 sm:w-full gap-2 '>
                {services.map((service) => (
                    <div key={service.id}>
                        <ServiceCard
                            service={service.name}
                            duration={service.duration}
                            price={service.price}
                            isSelected={selectedService === service.id}
                            onCheck={() => handleCheckboxChange(service.id)}
                        />
                    </div>
                ))}
            </div>
            {selectedService && (
                <div className="p-4">
                    <button 
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" 
                        onClick={handleSelectService}
                    >
                        Вибрати послугу
                    </button>
                </div>
            )}
        </>
    );
};

export default Service;