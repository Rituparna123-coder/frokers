import React from 'react'
import SM from './FroshareSM/componentScrollSM.js';
import PC from './ComponentScroll';

function PinScroll() {
    return ( <
        div >
        <
        div className = "hidden lg:block" >
        <
        PC / >
        <
        /div> <
        div className = "block lg:hidden" >
        <
        SM / >
        <
        /div> <
        /div>

    )
}

export default PinScroll