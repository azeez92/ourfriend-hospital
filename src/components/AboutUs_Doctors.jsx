import React from "react";
import Doctors from "../assets/GroupDoctors.png";

const AboutUs_Doctors = () => {
  return (
    <div className="px-6 md:px-16 bg-white">
      
      <h1 className="text-3xl font-bold mt-15 text-center mb-6 text-blue-800">
        Certified and Experienced Doctors
      </h1>

     
      <div className="max-w-3xl mx-auto text-gray-700 text-center space-y-4">
        <p>
          Our hospital is staffed with highly trained doctors, nurses, and
          healthcare professionals who are deeply committed to patient care.
          Every member of our team works collaboratively to ensure accurate
          diagnosis, effective treatment, and smooth recovery.
        </p>

        <p>
          We continuously invest in training and professional development to
          remain aligned with the latest medical advancements and global
          healthcare standards.
        </p>
      </div>

     
      <div className="flex justify-center ">
        <img
          src={Doctors}
          alt="Doctors"
          className="w-full"
        />
      </div>

    </div>
  );
};

export default AboutUs_Doctors;
