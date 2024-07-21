import React, {
    useEffect
} from 'react'
import {
    useNavigate
} from 'react-router-dom'
import Elevate from '../Froshare/Elevate';
import Benifits from '../Froshare/Benifits';
import Unlock from '../Froshare/Unlock';
import Brand from '../Froshare/Brands';
// import OurStars from '../Froshare/OurStars';
import EarnbySharing from '../Froshare/EarnbySharing'
import ScrollComponent from '../Froshare/PinScroll';
import FAQ from '../Froshare/Faq';

export default function FroshareScreen() {

    const navigate = useNavigate();
    useEffect(() => {
        navigate('/')
        window.addEventListener("beforeunload", jumpToTop);
        return () => {
            window.removeEventListener("beforeunload", jumpToTop);
        };
    }, [navigate]);

    const jumpToTop = (e) => {
        window.scrollTo(0, 0)
    };

    return ( <
        div >
        <
        Elevate / >
        <
        Benifits / >
        <
        Unlock / >
        <
        Brand / >
        <
        ScrollComponent / > { /* <OurStars/> */ } <
        EarnbySharing / >
        <
        FAQ / >
        <
        /div>
    )
}