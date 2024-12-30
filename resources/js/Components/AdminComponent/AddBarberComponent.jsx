import React, { useState } from 'react';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { useForm } from '@inertiajs/react';
import { Transition } from '@headlessui/react';

const AddBarberComponent = () => {
    const { data, setData, post, processing,recentlySuccessful, errors, reset } = useForm({
        name: '',
        surname: '',
        img_url: '',
        type: '',
        email: '',
        password: '',
        password_confirmation: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('barbers.add'), {
            onSuccess: () => reset()
        });
    };

    return (
        <section>
            <header>
                <h2 className="text-lg font-medium text-gray-900">Додати Барбера</h2>
                <p className="mt-1 text-sm text-gray-600">
                    Будь ласка, заповніть форму нижче, щоб додати нового барбера.
                </p>
            </header>
            <form onSubmit={handleSubmit} className="mt-6 text-black space-y-6">
                <div>
                    <InputLabel htmlFor="name" value="Ім'я" />
                    <TextInput
                        id="name"
                        value={data.name}
                        onChange={(e) => setData('name', e.target.value)}
                        type="text"
                        className="mt-1 block w-full"
                        required
                    />
                    <InputError message={errors.name} className="mt-2" />
                </div>

                <div>
                    <InputLabel htmlFor="surname" value="Прізвище" />
                    <TextInput
                        id="surname"
                        value={data.surname}
                        onChange={(e) => setData('surname', e.target.value)}
                        type="text"
                        className="mt-1 block w-full"
                        required
                    />
                    <InputError message={errors.surname} className="mt-2" />
                </div>

                <div>
                    <InputLabel htmlFor="img_url" value="URL зображення" />
                    <TextInput
                        id="img_url"
                        value={data.img_url}
                        onChange={(e) => setData('img_url', e.target.value)}
                        type="url"
                        className="mt-1 block w-full"
                        required
                    />
                    <InputError message={errors.img_url} className="mt-2" />
                </div>

                <div>
                    <InputLabel htmlFor="type" value="Тип" />
                    <TextInput
                        id="type"
                        value={data.type}
                        onChange={(e) => setData('type', e.target.value)}
                        type="text"
                        className="mt-1 block w-full"
                        required
                    />
                    <InputError message={errors.type} className="mt-2" />
                </div>

                <div>
                    <InputLabel htmlFor="email" value="Email" />
                    <TextInput
                        id="email"
                        value={data.email}
                        onChange={(e) => setData('email', e.target.value)}
                        type="email"
                        className="mt-1 block w-full"
                        required
                    />
                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div>
                    <InputLabel htmlFor="password" value="Пароль" />
                    <TextInput
                        id="password"
                        value={data.password}
                        onChange={(e) => setData('password', e.target.value)}
                        type="password"
                        className="mt-1 block w-full"
                        required
                    />
                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div>
                    <InputLabel htmlFor="password_confirmation" value="Підтвердження Паролю" />
                    <TextInput
                        id="password_confirmation"
                        value={data.password_confirmation}
                        onChange={(e) => setData('password_confirmation', e.target.value)}
                        type="password"
                        className="mt-1 block w-full"
                        required
                    />
                    <InputError message={errors.password_confirmation} className="mt-2" />
                </div>

                <div className="flex items-center gap-4">
                    <PrimaryButton disabled={processing}>Додати Барбера</PrimaryButton>
                    <Transition
                    show={recentlySuccessful}
                    enter="transition ease-in-out"
                    enterFrom="opacity-0"
                    leave="transition ease-in-out"
                    leaveTo="opacity-0"
                >
                    <p className="text-sm text-gray-600 text-green-500">
                        Збережено.
                    </p>
                </Transition>
                </div>
                
            </form>
            
        </section>
    );
};

export default AddBarberComponent;