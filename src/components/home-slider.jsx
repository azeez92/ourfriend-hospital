"use client";

import { Carousel } from "flowbite-react";
import { Link } from "react-router-dom";


 function HomeSlider() {
  return (
    <div className="h-[80vh] text-white ">
      <Carousel slideInterval={5000} className="[&>div]:overflow-hidden">
        <div className="flex h-full bg-center  bg-cover items-center justify-center relative bg-gray-400  dark:text-white" style={{backgroundImage:"url('https://images.unsplash.com/photo-1666887360726-f55472d96c34?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D') "}}>

         <div className="absolute inset-0 bg-black/40 top-1/5 left-20 h-fit w-1/3 p-5 rounded ">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Our Friend Hospital</h1>
            <p className="mb-6 text-lg">Providing the best care to our patients with a modern facility</p>
            <Link to="/appointment" className="inline-block bg-amber-600 hover:bg-blue-500 rounded px-6 py-4">Book Appointment</Link>
        </div>
        </div>

        
       <div className="flex h-full bg-center bg-cover items-center justify-center relative bg-gray-400  dark:text-white" style={{backgroundImage:"url('https://img.freepik.com/free-photo/african-american-man-woman-talking-girl-hospital-ward-about-healing-treatment-diagnosis-doctors-examining-sick-young-patient-with-cervical-neck-collar-sitting-bed_482257-16515.jpg')"}}>
          <div className="absolute inset-0  bg-black/40 top-1/5 left-[60%] h-fit w-1/3 p-5 rounded ">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Our Friend Hospital</h1>
            <p className="mb-6 text-lg">Providing the best care to our patients with a modern facility</p>
            <Link to="/appointment" className="inline-block bg-amber-600 hover:bg-blue-500 rounded px-6 py-4">Book Appointment</Link>
        </div>
        </div>
        <div className="flex h-full bg-center bg-cover items-center justify-center relative bg-gray-400  dark:text-white" style={{backgroundImage:"url('https://img.freepik.com/free-photo/side-view-doctor-explaining-radiography_23-2149726967.jpg')"}}>
          <div className="absolute inset-0  bg-black/40 top-1/5 left-20 h-fit w-1/3 p-5 rounded ">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Our Friend Hospital</h1>
            <p className="mb-6 text-lg">Providing the best care to our patients with a modern facility</p>
            <Link to="/appointment" className="inline-block bg-amber-600 hover:bg-blue-500 rounded px-6 py-4">Book Appointment</Link>
        </div>
        </div>
      </Carousel>


    
    </div>
  );
}
export default HomeSlider;