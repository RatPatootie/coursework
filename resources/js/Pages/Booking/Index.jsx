import { Head, useForm } from '@inertiajs/react';
import React from 'react';
import RauthLayout from '@/Layouts/RauthLayout';
import Barbers from '../../Components/BookingComponent/Barbers.jsx';
import Dates from '../../Components/BookingComponent/Dates.jsx';
import Service from '../../Components/BookingComponent/Service.jsx';

export default function Index({  }) {
    const { data, setData, post, processing } = useForm({
        barber: null,
        date: '',
        time: '',
        services: '',
    });

    const submit = () => {
        
        post(route('booking.store'));
    };

    return (
        <RauthLayout>
            <Head title="booking" />
            <div className="py-12">
                <div className="mx-auto max-w-7xl space-y-6 sm:px-6 lg:px-8">
                    <div className="flex justify-evently flex-col items-center gap-4 w-full">
                        <div className='flex flex-col items-center bg-white rounded w-full '>
                            <Barbers barberToSend={(barber) => setData('barber', barber)} />
                        </div>
                        {data.barber && (<div className='flex flex-col items-center bg-white rounded w-full'>
                            <Service barberActive={data.barber} serviceToSend={(services) => setData('services', services)} />
                        </div>)}
                        {data.barber && data.services && (
                            <div className='flex flex-col items-center bg-white rounded w-full'>
                                <Dates dateToSend={(date) => setData('date', date)} timeToSend={(time) => setData('time', time)} />
                                {data.barber && data.date && data.time && data.services && (
                                    <>
                                    <hr className='w-full mt-2 '/>
                                    <div className="flex justify-center  my-10 bg-white rounded w-full mx-auto">
                                        <button
                                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                            onClick={submit}
                                            disabled={processing}
                                        >
                                            Записатись
                                        </button>
                                    </div>
                                    </>
                                    
                                )}
                            </div>
                        )}

                    
                    </div>
                </div>
            </div>

           
        </RauthLayout>
    );
}
