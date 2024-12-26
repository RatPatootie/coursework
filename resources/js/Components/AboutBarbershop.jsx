import React from 'react';
import BookingLink from '@/Components/BookingLink';

const AboutBarbershop = () => {
  return (
    <section className="h-screen flex items-center justify-center bg-gray-800   ">
      <div className="text-center  px-4 md:px-8 flex gap-8 flex-col items-center w-full md:w-1/2 lg:w-2/3">
        <h2 className="  text-gray-800 mb-2">_Про нас_</h2>
        <h3 className="text-6xl font-bold text-white mb-4">Барбершоп [Назва]</h3>
        <p className=" text-white text-xl mb-6">
          Наш барбершоп — це не просто місце для стрижки, а ціла культура. Ми створили затишну атмосферу, де кожен клієнт відчуває себе частиною родини. Професійні барбери, індивідуальний підхід та увага до деталей — це те, що робить нас особливими. Приходьте, і ми допоможемо вам виглядати найкраще!
        </p>
        <BookingLink href={route('booking.index')}>
                            Перейти до бронювання
                        </BookingLink>
      </div>
    </section>
  );
};

export default AboutBarbershop;
