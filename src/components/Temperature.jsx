import React from 'react'

const Temperature = () => {
  return (
      <div className='border h-70 w-90 p-4 rounded bg-white hover:bg-gray-800 hover:text-white'>
          <p className='text-2xl font-light'>TEMPERATURE</p>
          <div className='m-auto flex flex-col justify-center items-center h-3/4'>
              <p className='flex text-8xl font-light'>28<sup className='mt-10'>o</sup><p className='text-5xl mt-10'>C</p></p>
              <p className='text-2xl font-light '>Cloudy</p>
          </div>
      </div>
  )
}

export default Temperature