import React from "react";
import BenifitsSM from "./BenifitsSM";

function Benifits() {
    return ( <
        >
        <
        div className = "sm:hidden lg:flex xl:flex min-[280px]:hidden justify-evenly items-center w-full h-auto  flex flex-col bg-[#FF5C0026] relative" >
        <
        div className = "text-[#F76F32] font-Gilroy font-bold text-5xl pt-10" >
        Benefits of Using Froshare <
        /div> <
        div className = "font-Gilroy font-medium mt-4 md:text-xl lg:text-2xl text-[#3D3D3D] pt-3" >
        Effortless Affiliate Marketing!!
        <
        /div> <
        img src = {
            'https://res.cloudinary.com/dapbrn8a9/image/upload/q_auto:low/v1719646697/35_1_wpvz3l.png'
        }
        alt = "ye ek svg hai"
        className = "w-full p-10" /
        >
        <
        /div> <
        div className = "flex lg:hidden w-full justify-center items-center " >
        <
        BenifitsSM / >
        <
        /div> <
        />
    );
}

export default Benifits;