import React from 'react'
import Forecast from '../components/Forecast'
import Navbar from '../components/Navbar'
import Temperature from '../components/Temperature'
import Humidity from '../components/Humidity'
import WindSpeed from '../components/WindSpeed'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className='m-8'>
          <Navbar />
          <hr className='mt-4 border-none h-[1px] bg-gray-500'/>
          <div className='mt-5 p-3 flex justify-between '>
              <form className='border-1 rounded h-35 w-88 p-5'>
                  {/* Left div */}
                  <p className='text-2xl'>Enter Your City</p>
                  <input className='border rounded mt-3 text-1xl p-2' type="text" />
                  <button className='border ml-3 p-2 w-24 rounded bg-gray-600 text-white'>Search</button>
              </form>
              <div className='bg-gray-700  hover:bg-white    flex flex-col items-center border-1 roundex w-300 rounded p-6 '>
                  {/* Right div */}
                  <div className='flex justify-around gap-4 w-full'>
                      <Temperature />
                      <Humidity />
                      <WindSpeed />
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