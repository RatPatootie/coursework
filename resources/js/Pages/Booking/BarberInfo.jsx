import RauthLayout from '@/Layouts/RauthLayout.jsx';
import { Head, Link, usePage } from '@inertiajs/react';

export default function BarberInfo() {
    const { barber } = usePage().props;

    const renderStars = () => {
        // Function to render star ratings
        const stars = [];
        for (let i = 0; i < 5; i++) {
            stars.push(
                <svg key={i} className={`w-4 h-4 ${i < barber.rate ? 'text-yellow-500' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.286 3.957c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.175 0l-3.37 2.448c-.784.57-1.838-.197-1.54-1.118l1.286-3.957a1 1 0 00-.364-1.118L2.05 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.957z" />
                </svg>
            );
        }
        return stars;
    };

    return (
        <RauthLayout>
            <Head title="Barber Info" />
            <div className='flex flex-col justify-center text-white items-center space-y-2 mt-10'>
                <img src={barber.img_url} alt={`${barber.name}'s picture`} className="w-40 h-40 object-cover rounded-lg" />
                <div className='p-4 text-center'>
                    <h2 className="text-xl font-semibold">{barber.name}</h2>
                    <p className="text-gray-600">{barber.type}</p>
                    <p className="text-yellow-500 mt-2 flex items-center justify-center">{renderStars()}{barber.rate}  </p>
                </div>
                <div className='p-4'>
                    <h3 className="text-lg font-semibold">Послуги</h3>
                    <ul className="list-disc list-inside">
                        {barber.services.map(service => (
                            <li key={service.id}>{service.name}</li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="p-4 flex flex-row justify-center items-center space-x-4">
                
            </div>
        </RauthLayout>
    );
}
