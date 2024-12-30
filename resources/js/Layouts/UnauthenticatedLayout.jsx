import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import MainLink from '@/Components/MainLink';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Link, usePage } from '@inertiajs/react';
import { useState } from 'react';

export default function UnauthenticatedLayout({auth,  children }) {
    const user = usePage().props.auth.user;

    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    return (
        <div className="  min-h-screen bg-gray-900">
            <nav className="border-b border-transparent bg-gray-800/90 sticky top-0 z-10">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 justify-between">
                        <div className="flex">
                            <div className="flex shrink-0 items-center">
                                <Link href="/">
                                    <ApplicationLogo className="block h-9 w-auto fill-current text-gray-800" />
                                </Link>
                            </div>
                            <MainLink />
                            
                        </div>
                        <div className="hidden space-x-8 sm:-my-px sm:ms-10 sm:flex">
                                            <NavLink
                                                href={route('booking.index')}
                                                active={route().current('booking.index')}
                                            >
                                                Записатися
                                            </NavLink>
                                        </div>  
                        <div className="hidden sm:ms-6 sm:flex sm:items-center">
                            <div className="relative ms-3">
                                <nav className="-mx-3 flex flex-1 justify-end">
                    
                                    <>
                                        
                                        <NavLink
                                            href={route('login')}
                                            
                                        >
                                            Увійти
                                        </NavLink>
                                        <NavLink
                                            href={route('register')}
                                               >
                                            Зареєструватися
                                        </NavLink>
                                    </>
                                
                                </nav>  
                            </div>
                        </div>
                        <div className="-me-2 flex items-center sm:hidden">
                            <button
                                onClick={() =>
                                    setShowingNavigationDropdown(
                                        (previousState) => !previousState,
                                    )
                                }
                                className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 transition duration-150 ease-in-out hover:bg-gray-100 hover:text-gray-500 focus:bg-gray-100 focus:text-gray-500 focus:outline-none"
                            >
                                <svg
                                    className="h-6 w-6"
                                    stroke="currentColor"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        className={
                                            !showingNavigationDropdown
                                                ? 'inline-flex'
                                                : 'hidden'
                                        }
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                    <path
                                        className={
                                            showingNavigationDropdown
                                                ? 'inline-flex'
                                                : 'hidden'
                                        }
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                         <div
                                            className={
                                                (showingNavigationDropdown ? 'block' : 'hidden') +
                                                ' sm:hidden'
                                            }
                                        >
                                            
                        
                                            <div className="border-t border-gray-200 pb-1 pt-4">
                                                <div className="px-4">
                                                    <div className="text-base font-medium text-gray-800">
                                                        user.name
                                                    </div>
                                            
                                                </div>
                        
                                                <div className="mt-3 space-y-1">
                                                <>
                                        
                                                <NavLink
                                                    href={route('login')}
                                                    
                                                >
                                                    Увійти
                                                </NavLink>
                                                <NavLink
                                                    href={route('register')}
                                                    >
                                                    Зареєструватися
                                                </NavLink>
                                            </>
                                                </div>
                                            </div>
                                        </div>
                    </div>
                </div>
            </nav>

            <main>{children}</main>
        </div>
    );
}
