import React from 'react';
import 'font-awesome/css/font-awesome.min.css';

const FeedBackCard = ({ 
    clientName='petro', 
    clientPhoto='https://randomuser.me/api/portraits', 
    rate=5, 
    feedbackText='Обожнюю цей барбершоп за серівіс. Люблю.', 
    serviceType='Стрижка', 
    feedbackDate='2024-09-01' 
}) => {
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
        <div className="feedback-card bg-white shadow-md rounded-lg p-6 mb-4">
            <div className="feedback-header flex items-center mb-4">
                {clientPhoto && <img src={clientPhoto} alt={`${clientName}'s photo`} className="client-photo w-12 h-12 rounded-full mr-4" />}
                <div className="client-info">
                    <h1 className="text-lg text-gray-900 font-semibold">{clientName}</h1>
                    <p className="text-sm text-gray-700">{serviceType}</p>
                </div>
            </div>
            <div className="feedback-body mb-4">
                <p className="text-gray-900">{feedbackText}</p>
            </div>
            <div className="feedback-footer flex items-center justify-between">
            <p className="text-yellow-500 mt-2 flex items-center">{renderStars()} </p>
                <p className="feedback-date text-sm text-gray-600">{feedbackDate}</p>
            </div>
        </div>
    );
};

export default FeedBackCard;