import React from 'react';

export  const Footer = () => {
    return (
        <footer className="bg-white shadow dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center w-full max-w-screen-xl mx-auto p-4 md:p-8">
                <a className="flex items-center mb-4 space-x-3 rtl:space-x-reverse">
                    <span className="text-2xl font-semibold whitespace-nowrap dark:text-white">Rio</span>
                </a>
                <ul className="flex flex-wrap justify-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                    <li>
                        <a href="#" className="hover:underline me-4 md:me-6">About</a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline me-4 md:me-6">Licensing</a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline">Contact</a>
                    </li>
                </ul>
                <hr className="w-full my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"/>
                <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a className="hover:underline">Rio™</a>. All Rights Reserved.</span>
            </div>
        </footer>
    );
};



