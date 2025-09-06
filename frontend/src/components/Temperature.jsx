import React from 'react'

const Temperature = (props) => {
  return (
      <div className='border h-70 w-full p-4 rounded bg-white hover:bg-gray-800 hover:text-white'>
          <p className='text-2xl font-light'>TEMPERATURE</p>
          <div className='m-auto flex flex-col justify-center items-center h-3/4'>
              <h1 className='flex text-8xl font-light'>{ props.temp }<sup className='mt-4 text-4xl'>o</sup><p className='text-5xl mt-10'>C</p></h1>
              {/* <p className='text-2xl font-light '>Cloudy</p> */ }
          </div>
      </div>
  )
}

export default Temperature