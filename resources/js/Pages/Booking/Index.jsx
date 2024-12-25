
import { Head, Link } from '@inertiajs/react';
import { usePage } from '@inertiajs/react';
import RauthLayout from '@/Layouts/RauthLayout';
import Barbers from './Barbers';
import Dates from './Dates';
import Service from './Service';
export default function Index({  }) {
   

    const { auth } = usePage().props;

    return (
        <RauthLayout>
                    
                    <Head title="booking" />
        
                    <div className="py-12">
                        <div className="mx-auto max-w-7xl space-y-6 sm:px-6 lg:px-8">
                           <div className="flex justify-evently flex-col items-center gap-4 w-full">
                            <div className='flex flex-col items-center bg-white rounded w-full '>
                                <Barbers/>  
                            </div>
                            <div className='flex flex-col items-center bg-white rounded w-full'>
                                <Dates/>  
                            </div>
                            <div className='flex flex-col items-center bg-white rounded w-full'>
                                <Service/>  
                            </div>
                            
                            
                            
                        </div>
                        </div>
                    </div>
                </RauthLayout>
    );
}