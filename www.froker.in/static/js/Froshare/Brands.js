import React, {
    useEffect,
    useRef
} from 'react'
import {
    FaArrowRightLong
} from "react-icons/fa6";
import '../styles/brands.css';
import BrandsSM from './BrandsSM';
import ReactGA from 'react-ga4';

const Brands = () => {
    const marquueeContentRef = useRef(null);

    useEffect(() => {
        const marquueeContent = marquueeContentRef.current;
        const marquueeElementsDisplayed = getComputedStyle(document.documentElement).getPropertyValue("--marquuee-elements-displayed");

        document.documentElement.style.setProperty("--marquuee-elements", marquueeContent.children.length);

        const cloneAndAppend = () => {
            for (let i = 0; i < marquueeElementsDisplayed; i++) {
                marquueeContent.appendChild(marquueeContent.children[i].cloneNode(true));
            }
        };

        const handleAnimationEnd = () => {
            while (marquueeContent.firstChild && marquueeContent.firstChild.offsetWidth <= 0) {
                marquueeContent.removeChild(marquueeContent.firstChild);
            }
            cloneAndAppend();
        };

        marquueeContent.addEventListener('animationend', handleAnimationEnd);

        cloneAndAppend();

        return () => {
            marquueeContent.removeEventListener('animationend', handleAnimationEnd);
        };
    }, []);

    const Download = () => {
        window.open("https://froker.app.link/");
        ReactGA.event('event', 'Froshare_Brand', {
            category: 'Blog',
            action: 'User Reached Middle',
        });
    }

    return ( <
        div className = 'w-full h-full bg-[#FF5C0026] flex flex-col justify-start items-center ' >
        <
        div className = 'sm:hidden lg:flex xl:flex min-[280px]:hidden w-full h-[50vh] flex flex-col justify-center items-center relative' >
        <
        div className = 'w-[18%] absolute top-4 left-20' >
        <
        img src = {
            'https://res.cloudinary.com/dapbrn8a9/image/upload/q_auto:low/v1711186335/rocket_rw3kyp.png'
        }
        alt = "Rocket Icon" / >
        <
        /div> <
        div className = 'w-[16%] absolute top-14 right-24' >
        <
        img src = {
            'https://res.cloudinary.com/dapbrn8a9/image/upload/q_auto:low/v1711953091/Rectangle_pxe9sk.png'
        }
        alt = "flying jatt" / >
        <
        /div> <
        div className = 'text-[#F76F32] font-Gilroy font-bold md:text-6xl lg:text-7xl pb-2' > Froshare < /div> <
        div className = 'font-Gilroy font-medium md:text-xl lg:text-2xl text-[#3D3D3D] pt-3 pb-7 tracking-wider' > The Ultimate Affiliate Marketing Solution < /div> <
        div className = 'object-contain bg-[#3D3D3D] rounded-full flex justify-evenly items-center' >
        <
        div className = 'p-5 flex justify-center items-center text-white' > www.Froshare.in / < sapn className = 'text-[#F76F32] font-Gilroy font-bold' > Your_name < /sapn></div >
        <
        div onClick = {
            Download
        }
        className = 'bg-gradient-to-r from-orange-500 via-orange-500 to-orange-600 object-contain rounded-full flex justify-center items-center mr-3 p-3 text-white cursor-pointer w-[12vw]' > Get Started < FaArrowRightLong className = 'pl-2 size-6 md:size-6'
        color = 'white' / > < /div> <
        /div> <
        /div>

        <
        div className = "flex lg:hidden w-full justify-center items-center " >
        <
        BrandsSM / >
        <
        /div>

        <
        div className = "marquuee w-full h-[40vh] flex flex-col overflow-hidden justify-center items-center" >
        <
        img src = {
            'https://res.cloudinary.com/dapbrn8a9/image/upload/q_auto:low/v1711179390/Frame_16_g4ycue.png'
        }
        alt = "the thread background"
        className = 'absolute flex justify-center h-[40vh] object-cover' / >
        <
        div className = 'font-Gilroy font-medium text-xl md:text-2xl lg:text-3xl text-[#3D3D3D] flex justify-center items-center pt-10' > Brands Unlocked
        for You! < /div> <
        div className = "marquuee-content w-full h-[20vh] lg:h-[30vh] relative flex justify-start items-center gap-5 lg:gap-20"
        ref = {
            marquueeContentRef
        } >
        <
        img src = {
            'https://res.cloudinary.com/dapbrn8a9/image/upload/q_auto:low/v1711179389/flipkart_t42vew.png'
        }
        alt = "flipkart" / >
        <
        img src = {
            'https://res.cloudinary.com/dapbrn8a9/image/upload/q_auto:low/v1711179389/myntra_ilrzlo.png'
        }
        alt = "Myntra" / >
        <
        img src = {
            'https://res.cloudinary.com/dapbrn8a9/image/upload/q_auto:low/v1711179389/meesho_oiohdv.png'
        }
        alt = "Meesho" / >
        <
        img src = {
            'https://res.cloudinary.com/dapbrn8a9/image/upload/q_auto:low/v1711179389/rayban_refkua.png'
        }
        alt = "RayBan" / >
        <
        img src = {
            'https://res.cloudinary.com/dapbrn8a9/image/upload/q_auto:low/v1711179389/fastrack_scnkzf.png'
        }
        alt = "Fastrack" / >
        <
        img src = {
            'https://res.cloudinary.com/dapbrn8a9/image/upload/q_auto:low/v1711179389/ajio_x6sxei.png'
        }
        alt = "AJIO" / >
        <
        img src = {
            'https://res.cloudinary.com/dapbrn8a9/image/upload/q_auto:low/v1711179388/h_M_elxyif.png'
        }
        alt = "H&M" / >
        <
        /div> <
        /div> <
        /div>
    )
}

export default Brands