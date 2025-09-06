import React from 'react'
import Forecast from '../components/Forecast'
import Navbar from '../components/Navbar'
import Temperature from '../components/Temperature'
import Humidity from '../components/Humidity'
import WindSpeed from '../components/WindSpeed'
import Footer from '../components/Footer'
import Form from '../components/Form'
import axios from 'axios';
import { useState } from 'react'
import { useEffect } from 'react'



const Home = () => {
  const [location, setLocation] = useState(null);
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchWeather = async () => {
      if (!location) return;
      try {
        const response = await axios(`https://api.open-meteo.com/v1/forecast?latitude=${location.lat}&longitude=${location.lon}` +
          `&current_weather=true&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m`)
        // console.log(response.data);
        setData(response.data.current_weather);
      } catch (error) {
        console.log("Opps failed to get the information", error)
      }
    }
    fetchWeather();
  }, [location])
  
  return (
    <div className='m-6'>
          <Navbar />
          <hr className='mt-4 border-none h-[1px] bg-gray-500'/>
      <div className='mt-5 p-3 flex justify-between '>
              <Form setLocation={setLocation} />
              <div className='bg-gray-700  hover:bg-white    flex flex-col items-center border-1 roundex w-300 rounded p-6 '>
                  {/* Right div */}
                  <div className='flex justify-around gap-4 w-full'>
                  <Temperature temp={data.temperature} />
                      {/* <Humidity /> */}
                      <WindSpeed windSpeed = {data.windspeed} />
                  </div>
                  <Forecast/>
              </div>
          </div>
          <hr className='mt-4 border-none h-[1px] bg-gray-500' />
          <Footer/>
    </div>
  )
}

export default Home