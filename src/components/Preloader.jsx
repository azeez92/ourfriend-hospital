import React, { useEffect } from 'react'
import loadergif from '../assets/preloader.gif'

const preloader = () => {
  return (
    <div className='fixed inset-0 z-50 flex flex-col items-center justify-center bg-white'>
        <img src={loadergif} alt="loading" className='w-24 h-24 object-contain' />
        <p className='mt-4 text-blue-600 font-medium'>Ourfriend Hospital</p>
      
    </div>
  )
}






export default preloader
