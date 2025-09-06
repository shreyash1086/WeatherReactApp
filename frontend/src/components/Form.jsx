import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { use } from 'react';

const Form = ({ setLocation }) => {

    const [city, setCity] = useState("Mumbai");
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios(`https://nominatim.openstreetmap.org/search?q=${city}&format=json&limit=1`);
            if (response.data.length > 0) {
                setLocation(() => response.data[0])
            } else {
                console.log("Opps error");
            }
        } catch (error) {
            console.log("Error fetching location", error);
        }
    }


    return (
        <>
            <form onSubmit={handleSubmit} className='border-1 rounded h-35 w-88 p-5'>
                {/* Left  */}
                <p className='text-2xl'>Enter Your City</p>
                <input className='border rounded mt-3 text-1xl p-2' type="text" value={city} onChange={(e) => setCity(e.target.value)} />
                <button className='border ml-3 p-2 w-24 rounded bg-gray-600 text-white'>Search</button>
            </form>
        </>
    )
}

export default Form