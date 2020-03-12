import React from "react";
import ErrorImg from './Error-img/error-404.png'

const Error = () => {
    return(
        <div>
            <img className='img-weather' src={ErrorImg} alt=""/>
        </div>
    )
};

export default Error
