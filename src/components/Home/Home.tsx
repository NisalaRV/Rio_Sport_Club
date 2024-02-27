import React from "react";
import club from "../../assets/images/club.jpg";

export const Home = () => {
    return (
        <div className="relative">
            <img src={club} className="w-full min-h-80 opacity-90" alt="Rio Club"/>
            <div className="absolute top-0 left-0 w-full flex justify-center items-center h-full">
                <div className="text-center">
                    <h1 className="text-4xl font-bold tracking-tight text-amber-50 sm:text-6xl">Rio Cricket Club</h1>
                    <p className="mt-6 text-lg leading-8 text-amber-50">Embark on a New Season or Begin Your Cricket Journey: Play, Coach, or Umpire!</p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <a className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Get started</a>
                        <a className="text-sm font-semibold leading-6 text-amber-50">Learn more <span aria-hidden="true">→</span></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

