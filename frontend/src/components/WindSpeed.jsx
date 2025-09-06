import React from 'react'

const WindSpeed = (props) => {
  return (
      <div className='border h-70 w-full p-4 rounded bg-white hover:bg-gray-800 hover:text-white'>
          <p className='text-2xl font-light'>WIND SPEED</p>
          <div className='m-auto flex flex-row justify-center items-center h-3/4'>
              <h1 className='text-8xl flex font-light'>{ props.windSpeed }<p className='pl-3 text-5xl mt-10'>km/h</p></h1>
          </div>
      </div>
  )
}

export default WindSpeed