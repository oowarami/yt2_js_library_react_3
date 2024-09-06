import React, { useEffect, useState } from 'react'

export const useCarousel = () => {
	let [currentSlide, setCurrentSlide] =useState (0);
	 // Automatically change slide every 3 seconds
	useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval); // Cleanup interval when the component is removed from the DOM
  }, []);
	
	// Function to go to the next slide
	const nextSlide = () =>{
		setCurrentSlide ((currentSlide + 1) % images.length);
	};

	// Function to go to the previous slide
	const prevSlide = () => {
		setCurrentSlide ((currentSlide - 1 + images.length) % images.length);
	}
	
	return {
		currentSlide,
		setCurrentSlide,
		interval,
		setInterval,
		clearInterval,
	}
}

