import React, { useRef, useEffect } from 'react';
import {inspiration, arrowFunctions} from '../../../data/inspiration.json'
import { Image } from 'cloudinary-react';
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "swiper/css/effect-fade";
import "swiper/css/effect-cube";


const Slider = () => {
	const inspoImages = inspiration;
    // Create a reference for Swiper instance
    const swiperRef = useRef(null);

    // Use useEffect to ensure that the Swiper instance is initialized
    useEffect(() => {
      const swiperInstance = swiperRef.current?.swiper;
      if (swiperInstance) {
        // Assign the next/prev buttons to the Swiper navigation after initialization
        swiperInstance.params.navigation.prevEl = '.swiper-button-prev';
        swiperInstance.params.navigation.nextEl = '.swiper-button-next';
  
        // Re-initialize navigation to make sure the buttons are connected
        swiperInstance.navigation.init();
        swiperInstance.navigation.update();
  
        // Fix for breakpoints: Update navigation whenever swiper size changes
        swiperInstance.on('breakpoint', () => {
          swiperInstance.navigation.update();
        });
      }
    }, []);
	return (
		<>
			<div className='relative w-full max-w-4xl'>
				{/* Adding Swiper with Navigation */}
        <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay,EffectFade,]}
      ref={swiperRef}
      spaceBetween={10}
      slidesPerView={1}
      navigation={false}
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      autoplay={{clickable:true}}
      effect='cube'
      breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
      className='h-auto '

      style={{
  "--swiper-pagination-color": "bg-secondary",
  "--swiper-pagination-bullet-inactive-color": "bg-light-gray",
  "--swiper-pagination-bullet-inactive-opacity": "1",
  "--swiper-pagination-bullet-size": "10px",
  "--swiper-pagination-bullet-horizontal-gap": "6px"
}}
    >
					{inspoImages.map((room, index) => (
						<SwiperSlide key={index}>
							<Image
								publicId={room.publicId}
								cloudName={room.cloudName}
								width='600'
								height='400'
								crop='fill'
								className='w-full h-full object-cover rounded-lg'
								loading='lazy'
								alt={`Slide ${index + 1}`}
							/>
						</SwiperSlide>
					))}
				</Swiper>

				{/* Custom Swiper Navigation Arrow */}
				<div className=' absolute top-1/2 -right-4 transform -translate-y-1/2 z-10 cursor-pointer'>
					<Image
						id={(arrowFunctions.id = 2)}
						cloudName={(arrowFunctions.cloudName = 'dbrqcasoo')}
						publicId={
							(arrowFunctions.publicId =
								'https://res.cloudinary.com/dbrqcasoo/image/upload/v1727380334/arrowrightpoint_kngtmv.svg')
						}
            
					/>
				</div>

        {/* Dots for navigation */}
        {/* <div className="dotsContainer">
          {inspoImages.map((_, index) => (
            <div
              key={index}
              className={`dot w-3] h-3 rounded-full cursor-pointer ${
                index === currentSlide ? "bg-secondary" : "bg-light-gray"
              }`}
              onClick={() => handleDotClick(index)}
            ></div>
          ))}
        </div> */}
      </div>
		</>
	);
};

export default Slider;
