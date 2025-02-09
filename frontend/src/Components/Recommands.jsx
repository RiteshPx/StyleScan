import React from 'react'
import { Jeans } from '../subComponents/Jeans'
import jacket from '../Assests/images/jacket-clothing.webp';
import adfg from '../Assests/images/adfg.png';
import npm from '../Assests/images/npm.png';

export const Recommands = () => {
  return (
    <div><Jeans/>
    <img src={jacket} alt="jacket" className="text-white h-64 w-80 bg-yellow-200" /> 
    <img src={adfg} alt="jacket" className="text-white h-64 w-80 bg-red-700" /> 
    <img src={npm} alt="jacket" className="text-white h-64 w-80 bg-red-700" /> 


    </div>
  )
}
