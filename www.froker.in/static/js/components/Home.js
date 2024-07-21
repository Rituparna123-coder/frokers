// import ReactPixel from 'react-facebook-pixel';
import React from 'react';

import "./../styles/home.css";

const Home = () => {

    const Download = () => {
        // ReactPixel.trackCustom(' Navbar DownloadButtonClick', { action: 'Download' });
        window.open("https://froker.app.link/");
    }

    return ( <
        >
        <
        div className = 'pcontainer' >
        <
        div className = "fcontainer" >

        <
        div className = "spere1" > < /div> <
        div className = "ellipse-4" > < /div> <
        div className = "spere2" > < /div> <
        div className = "ellipse-5" > < /div> <
        img src = {
            'https://res.cloudinary.com/dapbrn8a9/image/upload/v1718962431/A4_-_3_s91tbk.png'
        }
        className = 'top1'
        alt = " mig" / >
        <
        div className = "section-container" >
        <
        div className = "earn-your-reward-fun-and-informed-purchase" >
        Enjoy The Thrill of Exciting <
        /div> <
        div className = "earn-your-reward-fun-and-informed-purchase" >
        Challenges & Social Shopping <
        /div> <
        div className = "through-videos-and-soon-ai" >
        <
        span >
        <
        span className = "through-videos-and-soon-ai-span" > Rediscover Memories | < /span> <
        span className = "through-videos-and-soon-ai-span3" > Explore Recommendations! < /span> <
        /span> <
        /div> <
        div className = "through-videos-and-soon-ai-1" >
        <
        span >
        <
        div className = "through-videos-and-soon-ai-span" > Rediscover Memories < /div> <
        div className = "through-videos-and-soon-ai-span3" > Explore Recommendations! < /div> <
        /span> <
        /div> <
        button className = "button"
        onClick = {
            Download
        } > Download App < /button> <
        /div> <
        img src = {
            'https://res.cloudinary.com/dapbrn8a9/image/upload/v1718962419/A4_-_4_b9eiwv.png'
        }
        className = 'top1'
        alt = " mig" / >
        <
        img src = {
            'https://res.cloudinary.com/dapbrn8a9/image/upload/v1718965418/image_103_kokfj5.png'
        }
        className = 'topi'
        alt = " mig" / >
        <
        img src = {
            'https://res.cloudinary.com/dapbrn8a9/image/upload/v1718965418/Frame_1171277361_qfh0co.png'
        }
        className = 'topj'
        alt = " mig" / >
        <
        /div> <
        div className = "video-overlay" >
        <
        center >
        <
        video className = "video"
        loop muted autoPlay playsInline >
        <
        source src = {
            'https://res.cloudinary.com/dapbrn8a9/video/upload/v1719157440/webanimaiton_oo91v8.mp4'
        }
        type = "video/mp4" / >
        <
        /video>    <
        /center> <
        video className = "onevi"
        loop muted autoPlay playsInline >
        <
        source src = {
            'https://res.cloudinary.com/dapbrn8a9/video/upload/v1719238892/finalmobileAnimaiton_omrrgt.mp4'
        }
        type = "video/mp4" / >
        <
        /video> <
        /div> <
        /div> <
        />
    );
};

export default Home;