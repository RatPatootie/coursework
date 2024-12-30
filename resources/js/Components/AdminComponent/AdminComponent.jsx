import React from 'react';
import AddBarberComponent from './AddBarberComponent.jsx';

const AdminComponent = () => {
    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <div className=" mx-auto bg-white shadow-md rounded-lg p-6">
                <h1 className="text-3xl font-bold text-gray-700 mb-4">Панель адміністратора</h1>
                <p className="text-gray-700">Ласкаво просимо до панелі адміністратора.</p>
                
                {/* Додайте більше функціональностей адміністратора тут */}
            </div>
            <div className="bg-white p-4 shadow sm:rounded-lg sm:p-8 mt-4">
                <AddBarberComponent />
            </div>
           
        </div>
    );
};

export default AdminComponent;