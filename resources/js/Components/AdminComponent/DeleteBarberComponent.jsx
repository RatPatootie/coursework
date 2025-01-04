import React, { useState } from 'react';
import axios from 'axios';
import Modal from '@/Components/Modal';
import DangerButton from '@/Components/DangerButton';
import SecondaryButton from '@/Components/SecondaryButton';

const DeleteBarberComponent = ({ barbers, setBarbers }) => {
    const [confirmingBarberDeletion, setConfirmingBarberDeletion] = useState(false);
    const [selectedBarberId, setSelectedBarberId] = useState(null);

    const confirmBarberDeletion = (id) => {
        setSelectedBarberId(id);
        setConfirmingBarberDeletion(true);
    };

    const deleteBarber = async (e) => {
        e.preventDefault();
        try {
            await axios.delete(`/api/barbers/${selectedBarberId}`);
            setBarbers(barbers.filter(barber => barber.id !== selectedBarberId));
            closeModal();
        } catch (error) {
            console.error('Error deleting barber:', error);
        }
    };

    const closeModal = () => {
        setConfirmingBarberDeletion(false);
        setSelectedBarberId(null);
    };

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4">Список Барберів</h2>
            <ul className="space-y-4">
                {barbers.map(barber => (
                    <li key={barber.id} className="flex items-center p-4 bg-white shadow rounded-lg">
                        <img src={barber.img_url} alt={`${barber.name} {barber.surname}`} className="w-16 h-16 rounded-full mr-4" />
                        <div className="flex-1">
                            <h3 className="text-xl font-semibold">{barber.name} {barber.surname}</h3>
                            <p className="text-gray-600">Тип: {barber.type}</p>
                            <p className="text-gray-600">Створено: {new Date(barber.created_at).toLocaleDateString()}</p>
                        </div>
                        <button 
                            onClick={() => confirmBarberDeletion(barber.id)}
                            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700"
                        >
                            Видалити
                        </button>
                    </li>
                ))}
            </ul>

            <Modal show={confirmingBarberDeletion} onClose={closeModal}>
                <form onSubmit={deleteBarber} className="p-6">
                    <h2 className="text-lg font-medium text-gray-900">
                        Ви впевнені, що хочете видалити цього барбера?
                    </h2>

                    <p className="mt-1 text-sm text-gray-600">
                        Після видалення цей барбер буде видалений назавжди.
                    </p>

                    <div className="mt-6 flex justify-end">
                        <SecondaryButton onClick={closeModal}>
                            Скасувати
                        </SecondaryButton>

                        <DangerButton className="ms-3">
                            Видалити барбера
                        </DangerButton>
                    </div>
                </form>
            </Modal>
        </div>
    );
};

export default DeleteBarberComponent;