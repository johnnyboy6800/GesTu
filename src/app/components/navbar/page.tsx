'use client';
import React, { useState } from 'react';
export default function NavBar() {
    const [navigator, setnavigator] = useState(false);
    const handleclick = () => {
        if (navigator === false) {
            setnavigator(true);
            console.log("click");
        } else {
            setnavigator(false);
        }
    };  
        return (
        <div className="relative flex justify-between items-center p-4 mb-5 h-25  bg-gray-800 text-white">
            <h1 className="text-xl font-bold">School managment</h1>
            <nav className="flex flex-col sm:flex-row  items-center space-y-2 sm:space-y-0 sm:space-x-4">
                <ul className=" space-x-4 hidden sm:flex">
                    <li><a href="/" className="hover:underline">Home</a></li>
                    <li><a href="/components/auth/register" className="hover:underline">Register</a></li>
                    <li><a href="/components/auth/Login" className="hover:underline">Login</a></li>
                    <li><a href="/components/menu">Menu</a></li>
                </ul>
                <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
                    Logout
                </button>
                <button onClick={handleclick}  className="relative sm:hidden bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-600 transition-colors">
                    Toggle Menu
                </button>
                    <div id="nav-default" className={`absolute top-full mt-2 right-0 w-40 sm:hidden overflow-hidden transition-all duration-300 ease-in-out
                    bg-gray-800 text-white rounded shadow-lg z-50
                    transform origin-top-right
                        ${navigator ? 'opacity-100 scale-100' : 'max-h-0 opacity-0 scale-95 pointer-events-none'}
                        bg-gray-800 text-white w-50 rounded shadow-lg`}>
                        <ul className="space-y-2">
                            <li><a href="/" className="hover:underline">Login</a></li>
                            <li><a href="/" className="hover:underline">Register</a></li>
                            <li><a href="/" className="hover:underline">Profile</a></li>
                            <li><a href="/components/menu/" className="hover:underline">Menu</a></li>
                            <li><a href="/" className="hover:underline">About us</a></li>
                        </ul>
                    </div>
            </nav>
            
        </div>
    );
}