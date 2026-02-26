import React from 'react'
import aboutImg from '../assets/Aboutimg2.png'
const HomeAbout = () => {
  return (
    <div className='flex flex-col md:flex-row justify-center items-center bg-gray-200 pt-20'>
      <section className='flex-1'>
        <img src={aboutImg} alt="" width="70%" className='mx-auto'/>
      </section>
      <section className='flex-1 p-20'>
        <h5 className='uppercase font-semibold text-blue-500 text-sm mb-2'>Welcome to MedService</h5>
<h2 className='text-gray-600 mb-6 text-3xl md:text-4xl'>Complete Medical Solutions in One Place</h2>
<p className='text-gray-700 mb-6'>
    Porta semper lacus cursus, feugiat primis ultrice in ligula risus auctor tempus feugiat dolor lacinia cubilia curae integer congue leo metus, eu mollislorem primis in orci integer metus mollis faucibus. An enim nullam tempor sapien gravida donec pretium and ipsum porta justo integer at velna vitae auctor integer congue
    
</p>
<p className='text-gray-800 font-medium mb-4'>Randon Pexon, Head of Clinic</p>
      </section>
    </div>
  )
}

export default HomeAbout
