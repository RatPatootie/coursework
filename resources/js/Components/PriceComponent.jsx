import { usePage } from '@inertiajs/react';
import React from 'react';

const PriceComponent = () => {
    const {services} = usePage().props;
      return (
        <section className="py-12 bg-gray-900">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-gray-80 mb-8">Наші Послуги</h2>
    
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Колонка "Простий" */}
              <div>
                <h3 className="text-2xl font-semibold text-gray-80 mb-4">Простий</h3>
                <ul>
                  {services.map((service, index) => (
                    <li key={index} className="flex justify-between mb-6 ">
                      <span className="text-xl font-medium text-white mx-10">{service.name}</span>
                      <span className="text-xl font-medium text-white mx-10">{service.price} грн</span>
                    </li>
                  ))}
                </ul>
              </div>
    
              {/* Колонка "Про барбер" */}
              <div>
                <h3 className="text-2xl font-semibold text-gray-80 mb-4">Про барбер</h3>
                <ul>
                  {services.map((service, index) => (
                    <li key={index} className="flex justify-between mb-6 ">
                      <span className="text-xl font-medium text-white mx-10">{service.name}</span>
                      <span className="text-xl font-medium text-white mx-10">{service.price} грн</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      );
    };


export default PriceComponent;
