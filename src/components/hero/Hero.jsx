import React from 'react'
// cloudinary
import { Image } from 'cloudinary-react';
// hero image from cloudinary
import { hero } from '../../../data/home.json';

const Hero = () => {
	return (
		<div>
				{/* background image */}
				<Image
				className = 'relative bg-cover h-[70vh] md:h-screen'
					publicId={hero.scandinavian.publicId}
					cloudName={hero.scandinavian.cloudName}
					loading='lazy'
				/>

				{/* text overlay */}
				<div className='absolute top-1/3 right-12 bg-[#FBEAD1] p-8 md:p-12 rounded-lg font-poppins'>
					<h2 className='text-sm uppercase tracking-wide text-gray-700 mb-4 font-bold'>
						New Arrival
					</h2>
					<h1 className='text-4xl md:text-5xl font-bold text-secondary leading-tight mb-6'>
						Discover Our <br /> New Collection
					</h1>
					<p className='text-lg text-gray-700 mb-6'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut <br />{' '}
						elit tellus, luctus nec ullamcorper mattis.
					</p>
					<button className='bg-secondary text-white text-lg font-bold py-3 px-8 rounded-md shadow-lg hover:bg-[#A8774B]'>
						BUY NOW
					</button>
				</div>
			</div>

	)
}

export default Hero