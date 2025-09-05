import React from 'react'

const Humidity = () => {
  return (
      <div className='border h-70 w-90 p-4 rounded bg-white hover:bg-gray-800 hover:text-white'>
          <p className='text-2xl font-light'>HUMIDITY</p>
          <div className='m-auto flex flex-row justify-evenly items-center h-3/4'>
              
              <div>
                  <p className='text-5xl font-light'>94%</p>
                  <p className='text-2xl font-light '>Humid</p>
              </div>
              <div>
                  <p className='text-5xl font-light'>24<sup>o</sup></p>
                  <p className='text-2xl font-light '>Dew Point</p>
              </div>
          </div>
      </div>
  )
}

export default Humidity