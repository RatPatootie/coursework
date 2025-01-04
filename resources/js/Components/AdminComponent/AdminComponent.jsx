import React, { useState } from 'react';
import AddBarberComponent from './AddBarberComponent.jsx';
import AddServiceToBarber from './AddSeviceToBarber.jsx';
import ToggleSection from './ToggleSection.jsx';
import DeleteBarberComponent from './DeleteBarberComponent.jsx';
import AddDayOfWorksComponent from './AddDayOfWorksComponent.jsx';
import { useEffect } from 'react';

const AdminComponent = () => {
    const [showAddBarber, setShowAddBarber] = useState(false);
    const [showAddService, setShowAddService] = useState(false);
    const [showWorkDays, setShowWorkDays] = useState(false);
    const [showChooseWorkTime, setShowChooseWorkTime] = useState(false);
    const [barbers, setBarbers] = useState([]);


    useEffect(() => {
        fetch('/api/barber')
            .then(response => response.json())
            .then(data => setBarbers(data))
            .catch(error => console.error('Error fetching barbers:', error));
    }, []);
    const handleShowAddService = () => {
        setShowAddService(!showAddService);
         }

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <div className=" mx-auto bg-white shadow-md rounded-lg p-6">
                <h1 className="text-3xl font-bold text-gray-700 mb-4">Панель адміністратора</h1>
                <p className="text-gray-700">Ласкаво просимо до панелі адміністратора.</p>
            </div>
            <ToggleSection 
                title="Додати Барбера" 
                show={showAddBarber} 
                onToggle={() => setShowAddBarber(!showAddBarber)}
            >
                <AddBarberComponent />
            </ToggleSection>
            <ToggleSection 
                title="Видалити Барбера" 
                show={showWorkDays} 
                onToggle={() => setShowWorkDays(!showWorkDays)}
            >
                <DeleteBarberComponent barbers={barbers}  setBarbers={setBarbers} />
            </ToggleSection>
            <ToggleSection 
                title="Додати Сервіс до Барбера" 
                show={showAddService} 
                onToggle={()=>setShowAddService(!showAddService)}
            >
                <AddServiceToBarber barbers={barbers}  />
            </ToggleSection>
            <ToggleSection 
                title="Обрати час роботи барбера" 
                show={showChooseWorkTime} 
                onToggle={()=>setShowChooseWorkTime(!showChooseWorkTime)}
            >
                <AddDayOfWorksComponent barbers={barbers} />
            </ToggleSection>
            
        </div>
    );
};

export default AdminComponent;