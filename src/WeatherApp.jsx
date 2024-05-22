import { useState } from "react";
import SearchBox from "./SearchBox"
import InfoBox from "./InfoBox"
export default function WeatherApp(){
    const [weatherInfo,setWeatherInfo]=useState({
        city:"Amritsar",
        feelsLike: 18,
        humidity: 88,
        temp: 17.86,
        tempMax: 17.97,
        tempMin: 16.9,
        weather: "mist",
    });
    let updateInfo=(result)=>{
        setWeatherInfo(result);
    }
    return (
        
        <div style={{textAlign:"center"}}>
            <h1>Weather App</h1>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}