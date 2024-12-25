import React from 'react';

const FeedBackCard = ({ 
    clientName='petro', 
    clientPhoto='https://randomuser.me/api/portraits', 
    rating=5, 
    feedbackText='Обожнюю цей барбершоп за серівіс. Люблю коли хлопчики бігають.', 
    serviceType='Стрижка', 
    feedbackDate='2021-09-01' 
}) => {
    return (
        <div className="feedback-card bg-white shadow-md rounded-lg p-6 mb-4">
            <div className="feedback-header flex items-center mb-4">
                {clientPhoto && <img src={clientPhoto} alt={`${clientName}'s photo`} className="client-photo w-12 h-12 rounded-full mr-4" />}
                <div className="client-info">
                    <h3 className="text-lg text-gray-700 font-semibold">{clientName}</h3>
                    <p className="text-sm text-gray-600">{serviceType}</p>
                </div>
            </div>
            <div className="feedback-body mb-4">
                <p className="text-gray-800">{feedbackText}</p>
            </div>
            <div className="feedback-footer flex items-center justify-between">
                <div className="rating flex items-center">
                    {Array.from({ length: rating }, (_, index) => (
                        <span key={index} className="text-yellow-500">⭐</span>
                    ))}
                </div>
                <p className="feedback-date text-sm text-gray-500">{feedbackDate}</p>
            </div>
        </div>
    );
};

export default FeedBackCard;