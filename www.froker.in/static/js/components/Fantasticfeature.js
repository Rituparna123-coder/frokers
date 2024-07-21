import React, {
    useEffect,
    useRef
} from 'react';
import './../styles/fantasticfeature.css';

const Fantasticfeature = () => {
    const marqueeContentRef = useRef(null);

    useEffect(() => {
        const marqueeContent = marqueeContentRef.current;
        const marqueeElementsDisplayed = getComputedStyle(document.documentElement).getPropertyValue("--marquee-elements-displayed");

        document.documentElement.style.setProperty("--marquee-elements", marqueeContent.children.length);

        for (let i = 0; i < marqueeElementsDisplayed; i++) {
            marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
        }
    });

    return ( <
        div className = 'parent' >
        <
        div className = 'box1row' >
        <
        center >
        <
        video className = "video1"
        loop muted autoPlay playsInline >
        <
        source src = {
            'https://res.cloudinary.com/dapbrn8a9/video/upload/q_auto:low/v1706085314/frokervideos/ww_cdrid9.mp4'
        }
        type = "video/mp4" / >
        <
        /video>  <
        /center> <
        /div> <
        div className = 'box2col' > { /* <img className="black-logo-frokerr-1-2-2-1" src={'https://res.cloudinary.com/dapbrn8a9/image/upload/q_auto:low/v1706009704/Frokerassets/black-logo-frokerr-copy-10_pwpomg.jpg'} alt="Frokerr Logo" /> */ } <
        div className = "froker-app-comes-inbuilt-with-fantastic-features" >
        <
        span >
        <
        span className = "froker-app-comes-inbuilt-with-fantastic-features-span2" >
        Level Up Your < /span> <
        span className = "froker-app-comes-inbuilt-with-fantastic-features-span" >
        Experience < /span><br></br >
        <
        span className = "froker-app-comes-inbuilt-with-fantastic-features-span2" >
        Discover < /span> <
        span className = "froker-app-comes-inbuilt-with-fantastic-features-span3" >
        Froker 's </span> <
        span className = "froker-app-comes-inbuilt-with-fantastic-features-span2" >
        Superpower! < /span> <
        /span> <
        /div> <
        div >
        <
        div className = "marquee" >
        <
        ul ref = {
            marqueeContentRef
        }
        className = "marquee-content" >
        <
        li > < img src = {
            'https://res.cloudinary.com/dapbrn8a9/image/upload/v1719577882/Group_1171276772_1_sqeohu.png'
        }
        className = "image"
        alt = "avatar" / > < /li> <
        li > < img src = {
            'https://res.cloudinary.com/dapbrn8a9/image/upload/v1719578056/Group_1171276764_mqcgaa.png'
        }
        className = "image"
        alt = "shots" / > < /li> <
        li > < img src = {
            'https://res.cloudinary.com/dapbrn8a9/image/upload/v1718959059/Group_1171276765_dzopia.png'
        }
        className = "image"
        alt = "social media" / > < /li> <
        li > < img src = {
            'https://res.cloudinary.com/dapbrn8a9/image/upload/v1718959059/Group_1171276766_u3mpff.png'
        }
        className = "image"
        alt = "food" / > < /li> <
        /ul> <
        /div> <
        /div> <
        /div> <
        /div>
    );
};

export default Fantasticfeature;