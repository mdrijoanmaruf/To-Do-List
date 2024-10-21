import React from 'react';

const Footer = () => {
    return (
        <footer className='bg-gray-200 text-center py-4 mt-[50vh]'>
            <p className='text-gray-700'>
                &copy; {new Date().getFullYear()} | Developed by <a href="https://rijoan.com" className='font-bold'>Md Rijoan Maruf</a>
            </p>
        </footer>
    );
};

export default Footer;
