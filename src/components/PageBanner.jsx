import React from 'react'
import { Link } from 'react-router-dom'

const PageBanner = ({ title, image }) => {
  return (
    <div className='relative w-full h-[200px] md-[250px] flex items-center'
    
    style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
    }}>

{/* overlay */}
<div className='="absolute inset-0 bg-white/80'></div>


{/* content. This is similar to slider but with one slide */}
<div className='relative max-w-7xl px-6'>

    {/* breadcrumb */}
<section className='flex items-center gap-2 mt-4 text-gray-600'>
    
    <Link to="/">HOME</Link>
    <span className='text-lg'>{">"}</span>
    
    <span className='text-blue-600 font-semibold upper'>
    
        {title}
    </span>
</section>


<h1 className='text-4xl md:text-5xl font-bold text-gray-900'>{title}</h1>

</div>

      
    </div>
  )
}

export default PageBanner
