import React from "react";
// import coin from "../imgvid/coin1.png";
import {
    FaArrowRightLong
} from "react-icons/fa6";
import ReactGA from 'react-ga4';
import {
    Link
} from 'react-router-dom';
import './yourpassion.css';

export default function YourPassion() {
    const GotoFroshare = () => {
        ReactGA.event('event', 'Discover_Froshare', {
            category: 'Blog',
            action: 'User Reached Middle',
        });
    };

    return ( <
        div >
        <
        div className = "computerScreen flex w-full h-full bg-[#FF5C0026]" >
        <
        div className = "flex flex-col justify-center item-center lg:items-end w-full lg:w-1/2" >
        <
        div className = {
            `c2 flex flex-col justify-start items-start pl-5 md:pl-8 lg:pl-0 m-2 lg:w-[80%]  mb-4 md:mb-0`
        } >
        <
        div className = "cs1 flex flex-col text-[#3D3D3D] font-Gilroy text-5xl md:text-6xl font-semibold mb-4 mt-10 lg:mt-0" >
        A Platform to Turn < div > Your Passion into < /div> <
        div className = "coin1 flex items-center" >
        Profits { /* <img className="coin w-[18%] md:w-[18%]" src={coin} alt="coin"/> */ } <
        /div> <
        /div> <
        div onClick = {
            GotoFroshare
        }
        className = "cursor-pointer w-[14rem] h-[3rem] md:mt-5 sm:w-[17rem] sm:h-[3.8rem] bg-[#F76F32] flex justify-center items-center rounded-full" >
        <
        Link to = '/' >
        <
        div className = "text-center text-[#fff] font-Gilroy font-medium text-sm sm:text-lg lg:text-xl pt-2 pb-2" >
        Discover Froshare <
        /div> <
        /Link> <
        FaArrowRightLong className = "pl-2 size-6 md:size-8"
        color = "white" / >
        <
        /div>

        <
        div className = "cs3 text-[#3D3D3D] text-2xl sm:text-3xl font-medium font-Gilroy mt-6 leading-relaxed" >
        <
        div className = "maximize-earning" > Maximize Earning < /div> <
        div className = "effortless-marketing pt-0 md:pt-4 lg:pt-2" > Effortless < span className = "text-[#F76F32]" > Affiliate Marketing!! < /span></div >
        <
        /div>

        <
        /div> <
        img src = {
            "https://res.cloudinary.com/dapbrn8a9/image/upload/v1712294864/Frame_1171277359_4_rpohy7.png"
        }
        alt = 'mobile img'
        className = "w-full lg:hidden" / >
        <
        /div>

        <
        div className = "hidden lg:flex justify-center items-center md:w-1/2" >
        <
        div className = "passionimg object-cover" >
        <
        img className = "web_image pr-2"
        src = {
            'https://res.cloudinary.com/dapbrn8a9/image/upload/v1712295088/Group_1171277340_3_xycpcs.png'
        }
        alt = "web_image" / >
        <
        /div> <
        /div> <
        /div> <
        /div>
    );
}