import React from 'react';
import AuthenticatedLayout from './AuthenticatedLayout';
import UnauthenticatedLayout from './UnauthenticatedLayout';
import { usePage } from '@inertiajs/react';

const RauthLayout = ({ children }) => {
    const user = usePage().props.auth.user;

    return (
        <>
            {user ? <AuthenticatedLayout>{children}</AuthenticatedLayout> : <UnauthenticatedLayout>{children}</UnauthenticatedLayout>}
        </>
    );
};

export default RauthLayout;