import React from 'react';
import {
    FaArrowRightLong
} from "react-icons/fa6";
import mobilebg from '../imgvid/mobilebg.png';
import './elevate.css'
import {
    MdKeyboardDoubleArrowRight
} from "react-icons/md";
import ReactGA from 'react-ga4';

export default function Elevate() {
    const Download = () => {
        window.open("https://froker.app.link/");
        ReactGA.event('event', 'Froshare_Elevate', {
            category: 'Blog',
            action: 'User Reached Middle',
        });
    }
    return ( <
        div className = 'w-screen h-full md:h-screen relative' >
        <
        img src = {
            'https://res.cloudinary.com/dapbrn8a9/image/upload/q_auto:low/v1712558283/Frame_1171277305_pquagq.jpg'
        }
        alt = "mobile"
        className = 'hidden md:flex absolute h-full w-full object-cover' / >

        <
        img src = {
            mobilebg
        }
        alt = "mobile"
        className = 'flex  md:hidden w-full h-full absolute object-cover' / >

        <
        div className = 'flex flex-col w-full h-full md:flex-row justify-center items-center relative' >
        <
        div className = 'w-full h-full flex flex-col justify-center items-center md:w-1/2' >
        <
        div className = 'md:pl-10 md:w-[90%] md:h-1/2 flex flex-col justify-center items-center md:justify-start md:items-start' >
        <
        div className = ' pr-2 mt-5 flex font-Gilroy font-bold text-2xl md:text-4xl lg:text-7xl' >
        Elevate your <
        /div> <
        div class = " pr-2 md:pt-4 text-[#F76F32] font-Gilroy font-semibold md:font-bold text-md md:text-lg lg:text-3xl" >
        <
        div class = "flex items-center" >
        <
        div class = "word animate-slide-in opacity-0 delay-0" > Influence < /div> <
        div class = "arrow animate-slide-in opacity-0 delay-1" > < MdKeyboardDoubleArrowRight / > < /div> <
        div class = "word animate-slide-in opacity-0 delay-2" > Connection < /div> <
        div class = "arrow animate-slide-in opacity-0 delay-3" > < MdKeyboardDoubleArrowRight / > < /div> <
        div class = "word animate-slide-in opacity-0 delay-4" > Earning!! < /div> <
        /div> <
        /div> <
        div className = 'pl-6 pr-6 mt-1 md:pl-0 md:pr-0 w-3/4 md:pt-5 text-center  md:text-justify leading-loose font-Gilroy font-medium text-md md:text-lg lg:text-xl' >
        Connect with top brands, expand reach & earn big!
        <
        /div> <
        div className = 'text-center pt-1 md:text-justify leading-loose font-Gilroy font-medium text-md md:text-lg lg:text-xl' > Simplify posting & sharing links with Froshare < /div> <
        div onClick = {
            Download
        }
        className = 'cursor-pointer mt-4 w-[10rem] h-[2.6rem] md:mt-5 md:w-[12rem] md:h-[3.4rem] lg:w-[17rem] lg:h-[4rem] bg-[#F76F32] flex justify-center items-center rounded-full' >
        <
        div className = 'text-center text-[#fff] font-Gilroy font-medium text-md md:text-lg lg:text-xl pt-2 pb-2' >
        Get Started <
        /div> <
        FaArrowRightLong className = 'pl-2 size-6 md:size-8'
        color = 'white' / >
        <
        /div> <
        /div> <
        /div>

        <
        div className = 'hidden md:block w-full md:w-1/2 h-full' >
        <
        img src = {
            'https://res.cloudinary.com/dapbrn8a9/image/upload/q_auto:low/v1712230785/Group_1171277340_2_qfluim.png'
        }
        className = 'w-full h-full object-contain p-4 lg:p-20'
        alt = 'Froshare mobile of this section' / >
        <
        /div> <
        div className = 'block md:hidden w-full md:w-1/2 h-full' >
        <
        img src = {
            'https://res.cloudinary.com/dapbrn8a9/image/upload/q_auto:low/v1712040357/Group_1171277351_nag8qm.png'
        }
        className = 'w-full h-full object-contain p-8 sm:p-20'
        alt = 'Froshare mobile view of the section' / >
        <
        /div> <
        /div>  <
        /div> 
    );
}