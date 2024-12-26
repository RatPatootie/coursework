import React from 'react';

const FooterLayout = () => {
    return (
        <footer className="bg-gray-800 text-gray-200 py-4">
            <div className="container mx-auto px-2">
                <div className="flex flex-wrap">
                    <div className="w-full md:w-1/3 mb-8 md:mb-0 px-2">
                        <h1 className=" font-bold"><span className="text-yellow-500">Barber</span>Shop</h1>
                        <p className="mt-4 text-xs">
                            Welcome to BarberShop, where we offer the best grooming services for men. Our experienced barbers are here to provide you with top-notch haircuts, shaves, and more.
                        </p>
                    </div>
                    <div className="w-full  md:w-1/3 mb-8 md:mb-0 ">
                        <h2 className=" font-semibold">Quick Links</h2>
                        <ul className="mt-4 text-xs">
                            <li className="mt-2"><a href="#" className="hover:underline">Home</a></li>
                            <li className="mt-2"><a href="#" className="hover:underline">Services</a></li>
                            <li className="mt-2"><a href="#" className="hover:underline">About Us</a></li>
                            <li className="mt-2"><a href="#" className="hover:underline">Contact</a></li>
                        </ul>
                    </div>
                    <div className=" w-full md:w-1/3">
                        <h2 className=" font-semibold">Contact Us</h2>
                        <ul className="mt-4 text-sm">
                            <li className="mt-2"><i className="fas fa-phone mr-2"></i> +123-456-7890</li>
                            <li className="mt-2"><i className="fas fa-envelope mr-2"></i> info@barbershop.com</li>
                            <li className="mt-2"><i className="fas fa-map-marker-alt mr-2"></i> 123 Barber St, City, Country</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="bg-gray-700 text-center py-4 mt-8">
                &copy; 2024 BarberShop | Designed by PetroBodruh
            </div>
        </footer>
    );
};

export default FooterLayout;
   