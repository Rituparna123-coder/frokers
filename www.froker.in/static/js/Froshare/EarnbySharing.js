import React from 'react'
import "./EarnbySharing.css";
import {
    FaArrowRightLong
} from "react-icons/fa6";
import ReactGA from 'react-ga4';

function EarnbySharing() {
    const Download = () => {
        window.open("https://froker.app.link/");
        ReactGA.event('event', 'Froshare_EranbySharing', {
            category: 'Blog',
            action: 'User Reached Middle',
        });
    }
    return ( <
        div className = 'w-full h-screen relative flex justify-center items-center bg-[#FF5C0026]' >
        <
        div className = "star-field absolute" >
        <
        div className = "layer"
        style = {
            {
                top: "25%",
                left: "10%",
            }
        } >
        <
        img src = 'https://res.cloudinary.com/dapbrn8a9/image/upload/v1711770855/Group_1171277325_3_esqqe8.png'
        alt = "first 1"
        className = "img1 w-20 md:w-40 lg:w-80 xl:w-90" /
        >
        <
        /div> <
        div className = "layer"
        style = {
            {
                top: "2%",
                left: "20%"
            }
        } >
        <
        img src = 'https://res.cloudinary.com/dapbrn8a9/image/upload/v1712040357/Group_1171277328_qlzmqm.png'
        alt = "second 2"
        className = "img2 w-20 md:w-40 lg:w-80 xl:w-90" /
        >
        <
        /div> <
        div className = "layer"
        style = {
            {
                top: "24%",
                left: "70%"
            }
        } >
        <
        img src = 'https://res.cloudinary.com/dapbrn8a9/image/upload/v1711770855/Group_1171277327_2_mcjhlt.png'
        alt = "third 3"
        className = "img3 w-20 md:w-40 lg:w-80 xl:w-90" /
        >
        <
        /div> <
        div className = "layer"
        style = {
            {
                top: "51%",
                left: "65.5%"
            }
        } >
        <
        img src = 'https://res.cloudinary.com/dapbrn8a9/image/upload/v1711770856/Group_1171277334_w2tnjc.png'
        alt = "fourth 4"
        className = "img4 w-20 md:w-40 lg:w-80 xl:w-90" /
        >
        <
        /div> <
        div className = "layer"
        style = {
            {
                top: "2%",
                left: "61%"
            }
        } >
        <
        img src = '
        https: //res.cloudinary.com/dapbrn8a9/image/upload/v1711770856/Group_1171277324_3_vlzmi7.png'
        alt = "fifth 5"
        className = "img5 w-20 md:w-40 lg:w-80 xl:w-90" /
        >
        <
        /div> <
        div className = "layer"
        style = {
            {
                top: "60%",
                left: "50%"
            }
        } >
        <
        img src = 'https://res.cloudinary.com/dapbrn8a9/image/upload/v1711782255/rightdownbag_ebpyiv.png'
        alt = "sixth 6"
        className = "img6 w-20 md:w-40 lg:w-80 xl:w-90" /
        >
        <
        /div> <
        div className = "layer"
        style = {
            {
                top: "60%",
                left: "20%"
            }
        } >
        <
        img src = 'https://res.cloudinary.com/dapbrn8a9/image/upload/v1712040356/Group_1171277323_1_mor1xw.png'
        alt = "seventh 7"
        className = "img7 w-20 md:w-40 lg:w-80 xl:w-90" /
        >
        <
        /div> <
        /div> <
        div className = "flex flex-col justify-center items-center rounded-[50%] object-contain z-10" >
        <
        div className = "flex flex-col justify-center items-center p-2" >

        <
        div className = 'mb-2text-center text-black font-Gilroy font-bold md:font-bold text-2xl md:text-3xl lg:text-5xl xl:-6xl leading-loose' > Earn Money by Sharing < /div>

        <
        div className = 'mt-2 mb-3 text-center text-black font-Gilroy font-bold md:font-bold text-2xl md:text-3xl lg:text-5xl xl:-6xl lg:pt-4 leading-loose' > What You Love < /div>

        <
        div className = 'mb-3 text-center text-[#3E3E3E] pt-2 md:pl-0 md:text-justify  md:leading-loose font-Gilroy font-medium text-md md:text-lg md:pt-2 lg:text-3xl lg:pt-6' > Sign Up
        for Froshare Affiliate Now! < /div>

        <
        div className = 'cursor-pointer mt-6 w-[10rem] h-[2.6rem] md:mt-5 md:w-[16rem] md:h-[3.6rem] bg-[#F76F32] flex justify-center items-center rounded-full' >
        <
        div onClick = {
            Download
        }
        className = 'text-center text-[#fff] font-Gilroy font-medium text-md md:text-lg lg:text-xl pt-2 pb-2' >
        Get Started <
        /div> <
        FaArrowRightLong className = 'pl-2 size-6 md:size-8'
        color = 'white' / >
        <
        /div>

        <
        /div> <
        /div> <
        /div>
    )
}

export default EarnbySharing;