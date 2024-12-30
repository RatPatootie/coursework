import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, usePage } from '@inertiajs/react';
import BookingCard from '@/Components/BookingComponent/BookingCard';
import React from 'react';
import AdminComponent from '@/Components/AdminComponent/AdminComponent';
import BarberComponent from '@/Components/BarberComponent';

export default function Dashboard() {
    const { bookings } = usePage().props;
    const { isAdmin } = usePage().props;
    const { isBarber } = usePage().props;
 
    return( isAdmin ? (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Адмін панель
                </h2>
            }
        >
            <Head title="Адмін панель" />
            <>
                <AdminComponent />
            </>
    </AuthenticatedLayout>

        
    ) : isBarber?(
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Барбер  панель
                </h2>
            }
        >
            <Head title="Барбер панель" />
            <>
                <BarberComponent/>
            </>
    </AuthenticatedLayout>
    
    
):(<>
    <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Ваші бронювання
                </h2>
            }
        >
            <Head title="Ваші бронювання" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg flex items-center justify-center flex-col">
                    <h1 className='text-3xl font-bold'>Ваші бронювання</h1>
                        {bookings.map((booking) => (
                            <BookingCard
                                key={booking.id}
                                id={booking.id}
                                barber={booking.barber}
                                service={booking.service}
                                day={booking.day}
                                time_start={booking.day_time.start_time}
                               
                            />
                        ))}
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
        </>)
    );
}
