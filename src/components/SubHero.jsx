import React from 'react'
import greatCare from '../assets/best-health-care.jpg'

const SubHero = () => {
  return (
    <div className='py-20'>
        <main className=" container mx-auto grid lg:grid-cols-3 gap-10 px-10 items-start">
          <div >
    <img src={greatCare} className="w-full h-64 object-cover" alt="" />
    <h3 className='mt-6 text-xl font-bold text-gray-800 '>Best Health Care</h3>
    <p className='mt-3 text-gray-600 leading-relaxed'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ipsa commodi odit a necessitatibus fuga cupiditate in molestias tempora architecto libero alias incidunt suscipit consequuntur quas ad, ullam soluta repudiandae.</p>
          </div>
          <div class="..."> 
            <img src={greatCare} className="w-full h-64 object-cover" alt="" />
     <h3 className='mt-6 text-xl font-bold text-gray-800 '>Best Health Care</h3>
    <p className='mt-3 text-gray-600 leading-relaxed'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ipsa commodi odit a necessitatibus fuga cupiditate in molestias tempora architecto libero alias incidunt suscipit consequuntur quas ad, ullam soluta repudiandae.</p></div>


        <div className="bg-blue-500 p-10 text-white rounded-lg shadow-lg ">

         <div>
              <h3 className='text-2xl font-bold mb-6'>  Working Time</h3>
    <p className='mb-8 text-white/90'>
        Porta semper lacus cursus, feugiat primis ultrice ligula risus auctor at tempus feugiat dolor lacinia cursus nulla vitae massa
        
    </p>
         </div>

<div className='space-y-6'>
<div className='flex justify-between border-b border-white/30 pb-4 border-dashed'>
    
       <span> Mon – Wed</span>	
      <span> -</span>
      <span>9:00 AM - 7:00 PM</span>
    
</div>

    <div className='flex justify-between border-b border-white/30 pb-4 border-dashed'>
       <span> Thursday</span>
       	<span>-</span>
        <span>9:00 AM - 6:30 PM</span>
    
    </div>

  <div className='flex justify-between border-b border-white/30 pb-4 border-dashed'>
  
  <span> Friday	</span>
  <span>-</span>
  	<span>9:00 AM - 6:00 PM</span>

  </div>

  <div className='flex justify-between pb-4'>
      
       <span> Sun </span>	 <span>-</span>	 <span>Closed</span>
  </div>
    
</div>
        </div>
      </main>
    </div>
  )
}

export default SubHero
