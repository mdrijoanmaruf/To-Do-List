import React, { useEffect, useState } from 'react';

const Header = () => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

    // Apply the theme to the body class
    useEffect(() => {
        document.body.className = theme;  // Set class on body element to the current theme
        localStorage.setItem('theme', theme); // Save theme in local storage
    }, [theme]);

    // Handlers for theme change
    const setLightTheme = () => setTheme('light');
    const setDarkTheme = () => setTheme('dark');

    return (
        <div className={`shadow-md ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-200'}`}>
            <header className='max-w-[1200px] mx-auto flex justify-between h-[60px] items-center p-8'>
                <div className='flex'>
                    <img src="#" alt="" />
                    <span className={`font-bold text-3xl ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>To Do List</span>
                </div>

                <div className='flex gap-2 hidden'>
                    <button
                        className='h-[30px] w-[30px] bg-black rounded-full hover:border'
                        onClick={setDarkTheme}
                    ></button>
                    <button
                        className='h-[30px] w-[30px] bg-white rounded-full hover:border'
                        onClick={setLightTheme}
                    ></button>
                </div>
            </header>
        </div>
    );
};

export default Header;
