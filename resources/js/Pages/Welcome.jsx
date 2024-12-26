
import FooterLayout from '@/Layouts/FooterLayout';
import RauthLayout from '@/Layouts/RauthLayout';
import Slider from '@/Components/Slider';
import Map from '@/Components/Map';
import { Head } from '@inertiajs/react';
import PriceComponent from '@/Components/PriceComponent';
import FeedBackCard from '@/Components/FeedBack/FeedBackCard';
import AboutBarbershop from '@/Components/AboutBarbershop';



export default function Welcome({ auth, laravelVersion, phpVersion }) {
    const handleImageError = () => {
      
        document.getElementById('background')?.classList.add('!hidden');
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
                            ВІдгуки клцієнтів
                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-6 gap-4'>
                            <FeedBackCard/>
                            <FeedBackCard/>
                            <FeedBackCard/>
                            <FeedBackCard/>
                            <FeedBackCard/>
                            <FeedBackCard/>
                        </div>
                       
                       
                    </div>
                    <div id="map" className="bg-cover bg-center min-h-screen w-full flex items-center flex-col md:flex-row justify-between px-4 md:px-10 sm:px-2 lg:px-8">
                        <div >
                            <h1>Наше місцезнаходження</h1>
                            <p>1-Бандери,25</p>
                            <p>2-Бандери,26</p>
                            <p>2-Бандери,26</p>
                        </div>
                        
                            <Map />
                       
                        
                    </div>
                    <FooterLayout />
                </RauthLayout>
            </div>
        </>
    );
}
