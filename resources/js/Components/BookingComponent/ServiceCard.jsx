import React from 'react';

const ServiceCard = ({isSelected ,service, duration, price,onCheck,id }) => {
    return (
        <div className="service-card p-4  rounded-lg bg-gray-200/40 shadow-md w-full ">
            
            <label htmlFor={service} className="flex flex-row justify-between items-center">
                <div>
                    <h3 className="text-lg ">{service}</h3>
                    <p className="text-sm text-gray-600"> {duration} хв</p>
                    <p className="text-lg text-gray-600">{price} ₴ </p>
                </div>
                <div>
                    <input type="radio" id={service} checked={isSelected}  name={service} className="mr-2" onChange={()=>onCheck(id)} />
                </div>
                
            </label>
        </div>
    );
};

export default ServiceCard;