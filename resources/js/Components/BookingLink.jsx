import React from 'react';
import { Link } from '@inertiajs/react';

const BookingLink = ({href, children }) => {
    return (
        <Link
            href={href}
            className="border border-white text-white bg-transparent hover:bg-white hover:text-black transition-colors duration-300 px-6 py-3 "
        >
            {children}
        </Link>
    );
};

export default BookingLink;