import React from "react";
import "../styles/link.css";
export default function AboutUS() {
    return ( <
        div id = 'wholebody' >
        <
        title > Privacy Policy < /title> <
        center style = {
            {
                textAlign: 'justify',
                paddingLeft: '1rem',
                paddingRight: '1rem'
            }
        } >


        <
        div className = 'head' >
        <
        div className = "heading" >
        <
        span style = {
            {
                color: 'rgba(247,111,50,1)'
            }
        } > About us < /span> <
        /div> <
        center >
        <
        div className = "date" >
        <
        span style = {
            {
                fontFamily: 'Gilroy-Medium',
                color: 'rgba(61, 61, 61, 1)'
            }
        } >
        Welcome To < /span> <
        span style = {
            {
                fontFamily: 'Gilroy-Bold',
                fontWeight: 400
            }
        } >
        Froker!
        <
        /span> <
        /div> <
        /center> <
        /div>

        <
        div className = "bsecond" > Company Overview < /div> <
        p className = "commonfont" >
        Arroz Technology Private Limited is the parent company of Froker.Our aim is to create the world 's first social marketplace, revolutionising the way local businesses, content creators, and users connect and interact. <
        /p>

        <
        div className = "bsecond" > Our Vision < /div> <
        p className = "commonfont" >
        At Arroz Technology Private Limited, we envision bridging the gap between local businesses, content creators, and users.Our vision is to foster a vibrant and inclusive ecosystem where businesses thrive, creators showcase their talents, and users discover unique experiences. <
        /p>

        <
        div className = "bsecond" > Core Values < /div> <
        p className = "commonfont" >
        <
        ul className = "commonfont"
        style = {
            {
                paddingLeft: '2rem',
                color: 'rgba(61, 61, 61, 1)'
            }
        } >
        <
        li >
        <
        span style = {
            {
                color: 'rgba(247,111,50,1)'
            }
        } >
        Innovation:
        <
        /span><span className="commonfont" > We embrace innovation to drive meaningful change in the
        marketplace. < /span>  <
        /li> <
        li >
        <
        span style = {
            {
                color: 'rgba(247,111,50,1)'
            }
        } >
        Collaboration:
        <
        /span> We believe in fostering collaboration among businesses,
        creators, and users
        for mutual growth and success. <
        /li> <
        li >
        <
        span style = {
            {
                color: 'rgba(247,111,50,1)'
            }
        } >
        Empowerment:
        <
        /span> We empower local businesses and content creators to reach their
        full potential. <
        /li> <
        li >
        <
        span style = {
            {
                color: 'rgba(247,111,50,1)'
            }
        } >
        User - Centricity:
        <
        /span> We prioritize creating a seamless and personalized experience
        for our users. <
        /li> <
        /ul> <
        /p> <
        /center> <
        /div>
    );
};