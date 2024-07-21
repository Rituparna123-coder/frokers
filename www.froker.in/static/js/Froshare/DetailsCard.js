import React from 'react'

export const DetailsCard = ({
        item
    }) => {
        return ( <
            div className = 'w-2/3 mx-auto h-screen flex justify-center items-start flex-col space-y-4 ' >
            <
            span className = 'px-5 py-2 bg-orange-400 text-white text-3xl' > [{
                item.count
            }] <
            /span> <
            span className = 'text-black text-3xl' > {
                item.heading
            } < /span> <
            span className = 'text-[#3D3D3D] text-2xl font-normal' > {
                item.description
            } <
            /span> <
            /div>  );
        };