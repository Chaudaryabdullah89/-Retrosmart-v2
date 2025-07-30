import React from "react";
import aboutus from "../src/assets/about.webp";
import Paragarh from "./Paragarh";
import Button from "./button";
import { Link } from "react-router-dom";

const Homeaboutus = () => {
  return (
    <div className="w-full py-8 sm:py-8 md:py-10 bg-gray-100 my-10">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 my-6 sm:my-8 md:my-10 py-6 sm:py-8 md:py-10">
          <div className="w-full mt-6 md:w-[85%] h-full rounded-lg order-2 md:order-1 mb-8 md:mb-0"
               data-aos="fade-right"
               data-aos-duration="1000">
            <img
              src={aboutus}
              alt="aboutus"
              className="w-full sm:w-[90%] mx-auto md:mx-0 border-4 border-emerald-700 h-auto object-cover rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="flex flex-col gap-3 sm:gap-4 space-y-3 sm:space-y-5 order-1 md:order-2">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold w-full sm:w-[90%] md:w-[80%]"
                data-aos="fade-left"
                data-aos-delay="200">
              About Us
            </h1>
            <div
              data-aos="fade-right"
              data-aos-delay="300"
            
            >

            <Paragarh
              className="border-l-4 border-amber-600 pl-4"
              text="Retro Smart is your trusted partner in creating energy-efficient and sustainable homes. We specialize in providing comprehensive retrofit consultancy services that are tailored to meet the unique needs of each client."
            />
            </div>
            <div className="relative"
                 data-aos="fade-up"
                 data-aos-delay="400">
              <div className="absolute -inset-1 bg-gradient-to-r from-amber-400 to-amber-500 rounded-lg blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
              <div className="relative bg-white p-4 sm:p-6 rounded-lg shadow-md" >
                <Paragarh data-aos="zoom-in" data-aos-delay="500" text="Our team of dedicated professionals, including qualified Retrofit Assessors and Coordinators, work closely with social landlords, private homeowners, and businesses to deliver top-notch retrofit solutions. From initial assessment to design and coordination, we ensure that every project is compliant with PAS2035 standards, covering all pathways (A, B, and C)." />
              </div>
            </div>
            <div
            
              data-aos="zoom-out"
              data-aos-delay="500"
            >
            <Paragarh 
              className="italic text-emerald-800 text-sm sm:text-base" 
              text="We have more than 10 years of industry experience. We have been carrying out domestic energy assessments since 2014 and are working in retrofit industry since 2021 as trained and qualified Retrofit Coordinators, Designers, and Assessors. We have the knowledge, experience and credentials to help you achieve your energy efficiency goals"
            />

            </div>
            <div className="flex justify-center md:justify-start mt-4"
                 data-aos="fade-up"
                 data-aos-delay="600">
                  <Link to='About-Us' > 
              <Button value="Read More" />
                  </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homeaboutus;
