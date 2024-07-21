import React, {
    useEffect
} from 'react'
import First from '../components/Home'
// import Earnfuro from '../components/Earnfuro'
import YourPassion from '../components/YourPassion'
import Fantasticfeature from '../components/Fantasticfeature'
// import Frokieai from '../components/Frokieai'
// import Resturantspartnerd from '../components/Resturantspartnered'
import Frokerusers from '../components/Frokerusers'
import Frokercreators from '../components/Frokercreators'
import Merchants from '../components/Merchants'
// import Socialmedia from '../components/Socialmedia'
import {
    useNavigate
} from 'react-router-dom';

export default function CHome() {

    const navigate = useNavigate();
    useEffect(() => {
        navigate('/froker')
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
        First / > { /* <Earnfuro /> */ } <
        YourPassion / >
        <
        Fantasticfeature / > { /* <Frokieai /> */ } { /* <Resturantspartnerd /> */ } <
        Frokerusers / >
        <
        Frokercreators / >
        <
        Merchants / > { /* <Socialmedia />  */ } <
        /div>
    )
}