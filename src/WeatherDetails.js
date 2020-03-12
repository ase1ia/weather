import React from "react";

const WeatherDetails = ({data}) => {
    return(
        <div className='weather-details'>
            <p className='info-data'>  <span className='info-head'>Country: </span> {data.sys.country}</p>
            <p className='info-data'><span className='info-head'>City: </span>{data.name}</p>
            <p className='info-data'> <span className='info-head'>Temperature: </span>{data.main.temp} °C</p>
            <p className='info-data'>  <span className='info-head'>Description: </span>{data.weather[0].main}</p>
        </div>
    )
}

export default WeatherDetails;
