import React from 'react';
// Import Swiper slider
import Slider from '../slider/Slider';
const Inspirations = () => {
  return (
    <div className='bg-inspiration w-full my-20 mx-auto'>
      <div className='text-black font-poppins p-10 flex flex-col lg:flex-row lg:space-x-10 lg:justify-between'>
        
        {/* Left side (text section) */}
        <div className='w-full lg:w-1/2'>
          <h2 className='font-bold text-3xl'>
            50+ Beautiful rooms <br />
            inspiration
          </h2>
          <p className='py-2'>
            Our designer already made a lot of beautiful <br /> prototype of rooms that inspire you.
          </p>
          <button className='text-white font-semibold bg-secondary border-secondary px-8 my-6'>
            Explore More
          </button>
        </div>

        {/* Right side - slider */}
        <div className='w-full lg:w-full lg:pl-10'>
          <div className='w-full h-96 rounded-lg overflow-hidden bg-blue-100'>
            {/* Placeholder box for slider */}
            <p className='text-center text-lg'>Slider placeholder</p>
						{/* <Slider /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inspirations;