import React, { useState } from 'react';
import { useForm } from '@inertiajs/react';

const AddComments = ({ barber }) => {
    const { data, setData, post, reset, errors } = useForm({
        comment: '',
        stars: 0,
        barber_id: barber.id,
    });
    const [comments, setComments] = useState([]);

    const handleInputChange = (e) => {
        setData(e.target.name, e.target.value);
    };

    const handleStarClick = (stars) => {
        setData('stars', stars);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (data.comment.trim()) {
            post(route('user.addcomment'), {
                data,
                onSuccess: () => {
                    setComments([...comments, { comment: data.comment, stars: data.stars }]);
                    reset();
                }
            });
        }
    };

    return (
        <div className="p-4 max-w-lg mx-auto bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-center">Дайте свій відгук</h2>
            <form onSubmit={handleSubmit} className="mb-4 space-y-2">
            <div> 
                <p className='flex mt-4 mb-2'>Оцініть якість роботи барбера</p>
                <div className="flex mb-2 justify-center">
                
                    {[1, 2, 3, 4, 5].map((star) => (
                        <svg
                            key={star}
                            onClick={() => handleStarClick(star)}
                            className={`w-8 h-8 cursor-pointer ${data.stars >= star ? 'text-yellow-500' : 'text-gray-400'}`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.286 3.957c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.175 0l-3.37 2.448c-.784.57-1.838-.197-1.54-1.118l1.286-3.957a1 1 0 00-.364-1.118L2.05 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.957z" />
                        </svg>
                    ))}
                </div>
            </div>
                {errors.stars && <div className="text-red-500 text-sm mb-2 text-center">{errors.stars}</div>}
                <label htmlFor="comment" className="mb-0 ">Коментар</label>
                <textarea
                    id='comment'
                    name="comment"
                    value={data.comment}
                    onChange={handleInputChange}
                    placeholder="Додайте ваш коментар"
                    className="w-full p-3 border rounded mt-0 mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.comment && <div className="text-red-500 text-sm mb-2">{errors.comment}</div>}
                <input type="hidden" name="barber_id" value={barber.id} />
                <button type="submit" className="w-full bg-gray-800 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
                    Надіслати
                </button>
            </form>
        </div>
    );
};

export default AddComments;