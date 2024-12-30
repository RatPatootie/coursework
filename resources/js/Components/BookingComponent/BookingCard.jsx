import React, { useState } from 'react';
import { useForm } from '@inertiajs/react';
import Modal from '@/Components/Modal';
import DangerButton from '@/Components/DangerButton';
import SecondaryButton from '@/Components/SecondaryButton';

const BookingCard = ({ id, barber, service, day, time_start }) => {
    const isPast = new Date(day) < new Date();
    const [confirmingBookingDeletion, setConfirmingBookingDeletion] = useState(false);

    const {
        delete: destroy,
        processing,
        reset,
    } = useForm();

    const confirmBookingDeletion = () => {
        setConfirmingBookingDeletion(true);
    };

    const deleteBooking = (e) => {
        e.preventDefault();

        destroy(route('booking.destroy', id), {
            preserveScroll: true,
            onSuccess: () => closeModal(),
            onFinish: () => reset(),
        });
    };

    const closeModal = () => {
        setConfirmingBookingDeletion(false);
        reset();
    };

    return (
        <div className={`p-4 bg-gray-200/40 shadow-md rounded-lg flex w-full flex-row justify-between items-center space-x-4 ${isPast ? 'text-gray-500' : ''}`}>
            
            <p className="mb-1"><strong>Барбер:</strong> {barber.name}</p>
            <p className="mb-1"><strong>Послуга:</strong> {service.name}</p>
            <p className="mb-1"><strong>День:</strong> {day}</p>
            <p className="mb-1"><strong>Початок:</strong> {time_start}</p>
            {isPast ? <p className="text-red-500">Ця бронь вже минула</p> : (
                <>
                    <DangerButton onClick={confirmBookingDeletion}>
                        Скасувати
                    </DangerButton>

                    <Modal show={confirmingBookingDeletion} onClose={closeModal}>
                        <form onSubmit={deleteBooking} className="p-6">
                            <h2 className="text-lg font-medium text-gray-900">
                                Ви впевнені, що хочете скасувати це бронювання?
                            </h2>

                            <p className="mt-1 text-sm text-gray-600">
                                Після скасування це бронювання буде видалено назавжди.
                            </p>

                            <div className="mt-6 flex justify-end">
                                <SecondaryButton onClick={closeModal}>
                                    Скасувати
                                </SecondaryButton>

                                <DangerButton className="ms-3" disabled={processing}>
                                    Скасувати бронювання
                                </DangerButton>
                            </div>
                        </form>
                    </Modal>
                </>
            )}
        </div>
    );
};

export default BookingCard;