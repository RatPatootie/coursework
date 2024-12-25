import RauthLayout from '@/Layouts/RauthLayout';
import React, { useState } from 'react';

const services = [
    { id: 1, name: 'Haircut' },
    { id: 2, name: 'Shave' },
    { id: 3, name: 'Beard Trim' },
    { id: 4, name: 'Hair Wash' },
    { id: 5, name: 'Facial' }
];

const Service = () => {
    const [selectedServices, setSelectedServices] = useState([]);

    const handleCheckboxChange = (serviceId) => {
        setSelectedServices((prevSelectedServices) =>
            prevSelectedServices.includes(serviceId)
                ? prevSelectedServices.filter((id) => id !== serviceId)
                : [...prevSelectedServices, serviceId]
        );
    };

    return (
        <>
            <h2>Select Services</h2>
            <form>
                {services.map((service) => (
                    <div key={service.id}>
                        <label>
                            <input
                                type="checkbox"
                                value={service.id}
                                checked={selectedServices.includes(service.id)}
                                onChange={() => handleCheckboxChange(service.id)}
                            />
                            {service.name}
                        </label>
                    </div>
                ))}
            </form>
        </>
    );
};

export default Service;