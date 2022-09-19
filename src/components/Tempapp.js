import React from 'react'
import { useState} from 'react'
import axios from 'axios'
import Showdata from './Showdata'

const Tempapp = () => {
    const [city, setCity] = useState(null)
    const [data, setData] = useState({
      description: "",
      temp: 0,
      temp_max: 0,
      temp_min: 0,
      humodity: 0,
      sunrise: 0,
      sunset: 0,
      country: "",
      grnd_level: 0,
      sea_level: 0,
      timezone: 0,
      visibility: 0,
    })    
    
    const handleClick = ()=>{
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=cfc9d104c7832e1f0d067ab5314017bc`
      axios.get(url).then((response)=>{
        console.log(response.data)
        setData({
        description: response.data.weather[0].description,
        temp: response.data.main.temp,
        temp_max: response.data.main.temp_max,
        temp_min: response.data.main.temp_min,
        humidity: response.data.main.humidity,
        sunrise: response.data.sys.sunrise,
        sunset: response.data.sys.sunset,
        country: response.data.sys.country,
        grnd_level: response.data.main.grnd_level,
        sea_level: response.data.main.sea_level,
        timezone: response.data.timezone,
        visibility: response.data.visibility,

        })
      })

    }       
  return (
    <>
      <div className ="container text-center my-2">
          <h1>Weather App Using React</h1>      
          <input
              type="text"
              className = "form-control"
              value = {city}
              onChange = {(event)=>{setCity(event.target.value)}}/>
              <button className = "btn btn-primary mx-2" type = "submit" onClick = {handleClick}>Get Temp</button>
      </div>      
      <Showdata text = {data}/>
    </>
  )
}

export default Tempapp