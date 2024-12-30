import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';
import BookingLink from './BookingLink';
import image from '@/assets/dark_slider01.jpg';

const Slider = ({id}) => {
    const slides = [
        {
            image: image,
            text: 'Барбершоп  – Твій стиль, твій вибір!'
        },
        {
            image: 'https://ambassadorbs.com.ua/images/demo/home/dark_slider02.jpg',
            text: 'Місце, де стиль і традиція зустрічаються, щоб створити ідеальний образ'
        }
        
    ];
    const [fade, setFade] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    React.useEffect(() => {
        const interval = setInterval(() => {
            setFade(true);
            setTimeout(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
                setFade(false);
            }, 500);
        }, 5000); // Change slide every 3 seconds

        return () => clearInterval(interval);
    }, []);

    const handleSwipe = (direction) => {
        setFade(true);
        setTimeout(() => {
            if (direction === 'left') {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
            } else if (direction === 'right') {
                setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
            }
            setFade(false);
        }, 500);
    };

    const handleTouchStart = (e) => {
        const touchStartX = e.touches[0].clientX;
        const handleTouchMove = (moveEvent) => {
            const touchEndX = moveEvent.changedTouches[0].clientX;
            if (touchStartX - touchEndX > 50) {
                handleSwipe('left');
            } else if (touchStartX - touchEndX < -50) {
                handleSwipe('right');
            }
            document.removeEventListener('touchmove', handleTouchMove);
        };
        document.addEventListener('touchmove', handleTouchMove);
    };

    React.useEffect(() => {
        document.addEventListener('touchstart', handleTouchStart);
        return () => {
            document.removeEventListener('touchstart', handleTouchStart);
        };
    }, []);
 
    return (
        <div id={id} className="relative  w-full  mx-auto overflow-hidden">
            <div className='relative z-0'>
            <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {slides.map((slide, index) => (
                <div key={index+'img'} className="w-full flex-shrink-0">
                    <div
                        className='bg-cover bg-center min-h-screen w-full flex items-center flex-col justify-center'
                        style={{ backgroundImage: `url(${slide.image})` }}
                    >
                        <div className='p-6 text-white text-5xl font-bold'>    
                            {slide.text}
                        </div>
                        <BookingLink href={route('booking.index')}>
                            Перейти до бронювання
                        </BookingLink>
                    </div>  
                </div>
                ))}
            <div className="absolute z-[11] flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
           
            </div>
            </div>
           
        <div className="absolute z-30 flex -translate-x-1/2 bottom-9 left-1/2 space-x-3 rtl:space-x-reverse">
            {slides.map((slide, index) => (
                <button
                    key={index+'btn'}
                    type="button"
                    className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-white' : 'bg-gray-400'}`}
                    aria-current={currentIndex === index}
                    aria-label={`Slide ${index + 1}`}
                    onClick={() => setCurrentIndex(index)}
                ></button>
            ))}
        </div>
        </div>
        </div>
    );
};

export default Slider;


