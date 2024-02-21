import React from "react";
import rio1 from "../../assets/images/rio1.jpg";

export const Home = () => {
    return (
        <div className="relative">
            <img src={rio1} className="w-full h-screen object-cover" alt="Rio Club"/>
            <h1 className="flex absolute top-16 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-6xl font-bold text-center z-10">Welcome to Rio Sport Club</h1>
        </div>
    );
};
