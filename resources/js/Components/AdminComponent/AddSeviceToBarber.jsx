import React, { useState } from 'react';
import axios from 'axios';

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

const AddServiceToBarber = ({ barbers }) => {
    const [selectedBarber, setSelectedBarber] = useState('');
    const [availableServices, setAvailableServices] = useState([]);
    const [addableServices, setAddableServices] = useState([]);
    const [successMessage, setSuccessMessage] = useState('');

    const handleBarberClick = async (barberId) => {
        setSelectedBarber(barberId);
        try {
            const availableResponse = await axios.get(`/api/barbers/${barberId}/available-services`);
            const addableResponse = await axios.get(`/api/barbers/${barberId}/addable-services`);
            setAvailableServices(availableResponse.data);
            setAddableServices(addableResponse.data);
        } catch (error) {
            console.error('Error fetching services:', error);
        }
    };

    const handleDragStart = (e, service, fromList) => {
        e.dataTransfer.setData('service', JSON.stringify(service));
        e.dataTransfer.setData('fromList', fromList);
    };

    const handleDrop = (e, toList) => {
        const service = JSON.parse(e.dataTransfer.getData('service'));
        const fromList = e.dataTransfer.getData('fromList');

        if (fromList === 'available' && toList === 'addable') {
            setAvailableServices(availableServices.filter(s => s.id !== service.id));
            setAddableServices([...addableServices, service]);
        } else if (fromList === 'addable' && toList === 'available') {
            setAddableServices(addableServices.filter(s => s.id !== service.id));
            setAvailableServices([...availableServices, service]);
        }
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    const handleAddService = async () => {
        try {
            await axios.post(`/api/barbers/${selectedBarber}/update-services`, {
                availableServices,
                addableServices
            });
            setSuccessMessage('Сервіси успішно оновлено');
            setSelectedBarber('')
        } catch (error) {
            console.error('Error updating services:', error);
        }
    };

    return (
        <div className="p-4">
            {successMessage && <SuccessMessage message={successMessage} onClose={() => setSuccessMessage('')} />}
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Оберіть барбера:</label>
                <div className="mt-2 space-x-2">
                    {barbers.map(barber => (
                        <button
                            key={barber.id}
                            onClick={() => handleBarberClick(barber.id)}
                            className="px-4 my-2 py-2 bg-gray-800 text-white rounded hover:bg-gray-500 text-xs"
                        >
                            {barber.name} {barber.surname}
                        </button>
                    ))}
                </div>
            </div>
            {selectedBarber && (
                <>
                <div className="mb-4">
                <label className="block text-sm font-medium my-4 text-gray-700">Перетягніть сервіс щоб додати чи забрати його  </label>
                <h3 className="text-lg font-semibold">Сервіси барбера</h3>
                <ul
                    className="list-disc list-inside min-h-[50px] border border-dashed border-gray-300 p-2"
                    onDragOver={handleDragOver}
                    onDrop={(e) => handleDrop(e, 'available')}
                >
                    {availableServices.length === 0 && <li className="text-gray-500">Немає доступних сервісів</li>}
                    {availableServices.map(service => (
                        <li
                            key={service.id}
                            draggable
                            onDragStart={(e) => handleDragStart(e, service, 'available')}
                            className="mb-2"
                        >
                            {service.name}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="mb-4">
                <h3 className="text-lg font-semibold">Сервіси, що можна додати</h3>
                <ul
                    className="list-disc list-inside min-h-[50px] border border-dashed border-gray-300 p-2"
                    onDragOver={handleDragOver}
                    onDrop={(e) => handleDrop(e, 'addable')}
                >
                    {addableServices.length === 0 && <li className="text-gray-500">Немає сервісів для додавання</li>}
                    {addableServices.map(service => (
                        <li
                            key={service.id}
                            draggable
                            onDragStart={(e) => handleDragStart(e, service, 'addable')}
                            className="mb-2"
                        >
                            {service.name}
                        </li>
                    ))}
                </ul>
            </div>
            <button
                onClick={handleAddService}
                className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700"
            >
                Зберегти
            </button>
            <button
                onClick={() => setSelectedBarber('')}
                className="px-4 py-2  mx-4 bg-red-500 text-white rounded hover:bg-red-700"
            >
                Скасувати
            </button>
                </>
            )}
            
        </div>
    );
};

export default AddServiceToBarber;
