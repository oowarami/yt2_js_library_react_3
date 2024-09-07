import React, { useEffect, useState } from 'react'
import carouselData from "../../../data/inspiration.json";

export const useCarousel = () => {
	const slides = carouselData.inspiration;
	let [currentSlide, setCurrentSlide] =useState (0);
	 // Automatically change slide every 3 seconds
	useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval); // Cleanup interval when the component is removed from the DOM
  }, [slides.length]);
	
	// Function to go to the next slide
	const nextSlide = () =>{
		setCurrentSlide ((currentSlide + 1) % slides.length);
	};

	// Function to go to the previous slide
	const prevSlide = () => {
		setCurrentSlide ((currentSlide - 1 + slides.length) % slides.length);
	}
	
	return {
		currentSlide,
		slides,
		nextSlide,
		prevSlide,
	}
}

