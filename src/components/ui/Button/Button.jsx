import React from 'react';
function Button ({children, onClick}){
    return(
        <div 
        className='w-32 p-2 m-4 font-semibold text-center text-white bg-teal-400 rounded-lg cursor-pointer'
        onClick={onClick}>
{children}
        </div>
    )
}
export default Button;