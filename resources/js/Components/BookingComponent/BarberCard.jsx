import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
const BarberCard = ({ img_url, name, type, comments, rate, isSelected, onSelect }) => {
    const renderStars = () => {
        const fullStars = Math.floor(rate);
        const halfStar = rate % 1 >= 0.5 ? 1 : 0;
        const emptyStars = 5 - fullStars - halfStar;

        return (
            <>
            {Array.from({ length: fullStars }, (_, index) => (
                <i key={`full-${index}`} className="fa fa-star text-yellow-500" aria-hidden="true"></i>
            ))}
            {halfStar === 1 && <i className="fa fa-star-half-o text-yellow-500" aria-hidden="true"></i>}
            {Array.from({ length: emptyStars }, (_, index) => (
                <i key={`empty-${index}`} className="fa fa-star-o text-yellow-500" aria-hidden="true" ></i>
            ))}
            </>
        );
    };

    return (
        <div className="p-4 bg-gray-200/40 shadow-md rounded-lg flex w-full flex-row justify-between items-center space-x-4">
            <div className='flex flex-row justify-center items-center space-y-2'>
                
                <img src={img_url} alt={`${name}'s picture`} className="w-20 h-20 object-cover rounded-lg" />
                <div className='p-4'>
                    <h2 className="text-xl font-semibold">{name}</h2>
                    <p className="text-gray-600">{type}</p>
                    <p className="text-yellow-500 mt-2 flex items-center">{renderStars()}<span className='text-gray-200/40'> s</span>{rate}  <span className='text-gray-500 text-xs text-italic ml-1'>{comments} відгуків</span></p>
                    
                </div>
            </div>
            
            <div className="p-4 flex flex-row justify-center items-center space-x-4">
                <div>
                    <a href={`/barber/${name}`} className="ml-2 p-1" title="Більше про барбера">
                        <div className='border border-gray-300 rounded-full bg-gray-300 flex justify-center items-center w-5 h-5'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="5" height="10" viewBox="0 0 5 10" fill="currentColor">
                                <path fillRule="evenodd" clipRule="evenodd" d="M0.259003 4.24971C0.259003 3.8355 0.594789 3.49971 1.009 3.49971H2.15948C2.5737 3.49971 2.90948 3.8355 2.90948 4.24971V8.50148C2.90948 8.9157 2.5737 9.25148 2.15948 9.25148C1.74527 9.25148 1.40948 8.9157 1.40948 8.50148V4.99971H1.009C0.594789 4.99971 0.259003 4.66393 0.259003 4.24971Z" fill="#4a4a4a"></path>
                                <path fillRule="evenodd" clipRule="evenodd" d="M0.25 8.50148C0.25 8.08727 0.585786 7.75148 1 7.75148H3.3103C3.72452 7.75148 4.0603 8.08727 4.0603 8.50148C4.0603 8.9157 3.72452 9.25148 3.3103 9.25148H1C0.585786 9.25148 0.25 8.9157 0.25 8.50148Z" fill="#4a4a4a"></path>
                                <path fillRule="evenodd" clipRule="evenodd" d="M1.84939 0.245606C2.11508 0.245266 2.36998 0.350659 2.55785 0.538529C2.74572 0.726399 2.85112 0.981303 2.85078 1.24699C2.85007 1.799 2.40225 2.24605 1.85025 2.24581C1.29824 2.24558 0.850804 1.79815 0.850568 1.24614C0.850332 0.694128 1.29738 0.246313 1.84939 0.245606Z" fill="#4a4a4a"></path>
                            </svg>
                        </div>
                    </a>
                </div>
                <div>
                    <input 
                        type="radio" 
                        name="barber" 
                        checked={isSelected} 
                        onChange={onSelect} 
                        className="form-radio h-5 w-5 text-gray-600 bg"
                    />  
                </div>
                
                </div>
        </div>
    );  
};

export default BarberCard;