// src/screen/NotFound.js
import React from 'react';
import Lottie from 'lottie-react';
import notFoundAnimation from '../styles/404lottie.json';


const NotFound = () => {
    return ( <
        div className = "h-screen bg-white items-center flex justify-center px-5 lg:px-0 " >
        <
        div className = "w-[415px] text-center flex-col items-center justify-center mx-auto gap-1" >
        <
        div className = "mb-8 md:mb-[56px]" >
        <
        div className = "w-[80%] relative flex justify-center items-center mx-auto" >
        <
        Lottie animationData = {
            notFoundAnimation
        }
        loop = {
            true
        }
        className = "pagenotfound" /
        >
        <
        /div> <
        /div> <
        div >
        <
        h3 className = "text-4xl md:text-[56px] leading-[64px] text-[#1A1C16] " >
        Page Not Found <
        /h3> <
        /div> <
        /div> <
        /div>
    );
};

export default NotFound;