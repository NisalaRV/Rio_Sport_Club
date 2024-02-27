import React from "react";

export interface Props{
    price:string;
    description:string;
    title:string;

}

const Plan  = () => {
    return (
        <>
            <div className="mx-auto max-w-2xl lg:text-center">
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Plans</p>
                <p className="mt-6 text-lg leading-8 text-indigo-600">The key deliverables of the program are.</p>
                <div className="mx-auto mt-10 grid gap-8 lg:flex lg:max-w-none lg:grid-cols-3">
                    <PlanCard price={'100'} title={'1 Year'} description={''}/>
                    <PlanCard price={'200'} title={'5 Year'} description={''}/>
                    <PlanCard price={'400'} title={'10 Year'} description={''}/>

                </div>
            </div>
        </>
    );
};
export default Plan;

const PlanCard = ({price,description,title}:Props) => {
    return (
        <div className="p-2">
            <div
                className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                <div className="mx-auto max-w-xs px-8">
                    <p className="text-base font-semibold text-gray-600">Pay once, own it for {title}</p>
                    <p className="mt-6 flex items-baseline justify-center gap-x-2">
                        <span className="text-5xl font-bold tracking-tight text-gray-900">${price}</span>
                        <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">USD</span>
                    </p>
                    <a href="#"
                       className="mt-10 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Get
                        access</a>
                    <p className="mt-6 text-xs leading-5 text-gray-600">{description}</p>
                </div>
            </div>
        </div>
    );
};


