import React, {
    useEffect
} from 'react';
import "./../styles/frokerusers.css";
import Aos from 'aos';
import 'aos/dist/aos.css';

const Frokerusers = () => {

    useEffect(() => {
        Aos.init({
            duration: 1000
        });
    }, []);

    return ( <
        >
        <
        div id = "froker-users"
        styel = {
            {
                marginTop: '5rem'
            }
        } >
        <
        /div> <
        div className = 'sixth' >
        <
        div class = "opportunity-for-froker-app-users" >
        <
        span >
        <
        div class = "opportunity-for-froker-app-users-span" > Opportunity
        for < /div> <
        div class = "opportunity-for-froker-app-users-span2" > Froker App Users < /div> <
        /span> <
        /div> <
        div class = "earn-your-reward-and-ai-capabilities-for-informed-purchase" >
        Enjoy challenges, Earn reward and Leverage AI capabilities
        for well - informed purchases. <
        /div> <
        div className = "parentt" >
        <
        div className = "chil" >
        <
        div data - aos = "zoom-in"
        className = "grandchild" >
        <
        img src = {
            'https://res.cloudinary.com/dapbrn8a9/image/upload/v1719578170/Group_1171276767_joebez.png'
        }
        alt = 'img' / >
        <
        /div> <
        div data - aos = "zoom-in"
        className = "grandchild" >
        <
        img src = {
            'https://res.cloudinary.com/dapbrn8a9/image/upload/v1719578359/Group_1171276768_kqdnfg.png'
        }
        alt = 'img' / >
        <
        /div> <
        div data - aos = "zoom-in"
        className = "grandchild" >
        <
        img src = {
            'https://res.cloudinary.com/dapbrn8a9/image/upload/v1719578359/Group_1171276769_mmcn2l.png'
        }
        alt = 'img' / >
        <
        /div> <
        div data - aos = "zoom-in"
        className = "grandchild" >
        <
        img src = {
            'https://res.cloudinary.com/dapbrn8a9/image/upload/v1719578358/Group_1171276770_mflsap.png'
        }
        alt = 'img' / >
        <
        /div> <
        /div> <
        /div> <
        /div></ >
    );
};



export default Frokerusers;