
import FooterLayout from '@/Layouts/FooterLayout';
import RauthLayout from '@/Layouts/RauthLayout';
import Slider from '@/Components/Slider';
import Map from '@/Components/Map';
import { Head } from '@inertiajs/react';
import PriceComponent from '@/Components/PriceComponent';
import FeedBackCard from '@/Components/FeedBack/FeedBackCard';
import {usePage} from '@inertiajs/react';
import AboutBarbershop from '@/Components/AboutBarbershop';



export default function Welcome({ auth }) {
    const handleImageError = () => {
      
        document.getElementById('background')?.classList.add('!hidden');
    };
    const {comments} = usePage().props;
    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };
    return (
        <>
            <Head title="Barbershop" />
            <div className="bg-gray-50 text-black/50 dark:bg-black dark:text-white/50">
                <RauthLayout>
                    <Slider id="main" />
                    <div id="services" className="bg-cover bg-center min-h-screen w-full flex items-center flex-col justify-center border-b-2 p-4">
                        <PriceComponent/>
                    </div>
                    <div id="about" className="bg-cover bg-center min-h-screen w-full flex items-center flex-col justify-center border-b-2 p-4">
                        <AboutBarbershop/>
                    </div>
                    
                    <div id="feedback" className="bg-cover bg-center min-h-screen w-full flex items-center flex-col justify-center border-b-2 p-4">
                        <div>
                        <h1 className='text-3xl font-bold mb-4 mt-5'>Відгуки клієнтів</h1>
                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-6 gap-4'>
                        {comments.map(comment => (
                        <FeedBackCard
                            key={comment.id}
                            clientName={comment.user.name}
                            rate={comment.comment_rate}
                            feedbackText={comment.comment_body}
                            feedbackDate={formatDate(comment.created_at)}
                        />
                    ))}
                        </div>
                       
                       
                    </div>
                    <div id="map"  className="text-xl bg-cover bg-center min-h-screen w-full flex items-center flex-col md:flex-row justify-between px-4 md:px-10 sm:px-2 lg:px-8">
                        <div className='flex flex-col ' >
                            <h1>Наші локації:</h1>
                            <p>1️⃣ вул. Бандери, 25 (біля головного корпусу університету).</p>
                            <p>2️⃣ вул. Бандери, 10 (поруч із кафе "Затишок").</p>
                           
                        </div>
                        
                            <Map />
                       
                        
                    </div>
                    <FooterLayout />
                </RauthLayout>
            </div>
        </>
    );
}
