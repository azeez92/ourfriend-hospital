"use client";

import { Carousel } from "flowbite-react";
import { Link } from "react-router-dom";

function HomeSlider() {
  return (
    <div className="h-[45vh] sm:h-[55vh] md:h-[70vh] lg:h-[80vh] text-white">
      <Carousel slideInterval={5000} className="[&>div]:overflow-hidden">

        {/* Slide 1 */}
        <div
          className="flex h-full bg-center bg-cover items-center justify-center relative dark:text-white"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1666887360726-f55472d96c34?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          }}
        >
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center sm:justify-start p-3 sm:p-5 md:p-8 lg:p-10">
            <div className="bg-black/50 ml-10 md:mr-10 p-4 sm:p-5 rounded w-full sm:w-3/4 md:w-1/2 lg:w-1/3">
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">
                Our Friend Hospital
              </h1>
              <p className="text-sm sm:text-base md:text-lg mb-4 sm:mb-6">
                Providing the best care to our patients with a modern facility
              </p>
              <Link
                to="/appointment"
                className="inline-block bg-amber-600 hover:bg-blue-500 rounded px-3 py-2 sm:px-4 sm:py-3"
              >
                Book Appointment
              </Link>
            </div>
          </div>
        </div>

        {/* Slide 2 */}
        <div
          className="flex h-full bg-center bg-cover items-center justify-center relative dark:text-white"
          style={{
            backgroundImage:
              "url('https://img.freepik.com/free-photo/african-american-man-woman-talking-girl-hospital-ward-about-healing-treatment-diagnosis-doctors-examining-sick-young-patient-with-cervical-neck-collar-sitting-bed_482257-16515.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center sm:justify-end p-3 sm:p-5 md:p-8 lg:p-10">
            <div className="bg-black/50 mr-10 md:ml-10 p-4 sm:p-5 rounded w-full sm:w-3/4 md:w-1/2 lg:w-1/3">
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">
                Our Friend Hospital
              </h1>
              <p className="text-sm sm:text-base md:text-lg mb-4 sm:mb-6">
                Providing the best care to our patients with a modern facility
              </p>
              <Link
                to="/appointment"
                className="inline-block bg-amber-600 hover:bg-blue-500 rounded px-3 py-2 sm:px-4 sm:py-3"
              >
                Book Appointment
              </Link>
            </div>
          </div>
        </div>

        {/* Slide 3 */}
        <div
          className="flex h-full bg-center bg-cover items-center justify-center relative dark:text-white"
          style={{
            backgroundImage:
              "url('https://img.freepik.com/free-photo/side-view-doctor-explaining-radiography_23-2149726967.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center sm:justify-start p-3 sm:p-5 md:p-8 lg:p-10">
            <div className="bg-black/50 ml-10 md:mr-10 p-4 sm:p-5 rounded w-full sm:w-3/4 md:w-1/2 lg:w-1/3">
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">
                Our Friend Hospital
              </h1>
              <p className="text-sm sm:text-base md:text-lg mb-4 sm:mb-6">
                Providing the best care to our patients with a modern facility
              </p>
              <Link
                to="/appointment"
                className="inline-block bg-amber-600 hover:bg-blue-500 rounded px-3 py-2 sm:px-4 sm:py-3"
              >
                Book Appointment
              </Link>
            </div>
          </div>
        </div>

      </Carousel>
    </div>
  );
}

export default HomeSlider;