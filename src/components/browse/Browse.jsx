import React from 'react'
// cloudinary
import { Image } from 'cloudinary-react';
// browse images from cloudinary
import { browse } from '../../../data/browse-range.json';
const Browse = () => {
	return (
		<div>
				<div className='flex flex-col items-center font-poppins lg:py-10 py-36'>
					<h2 className='font-bold text-2xl'>Browse The Range</h2>
					<p className='text-center'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					</p>
				</div>
				<div className='py-10 px-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 '>
					{/* card 1 */}
					<div className='flex flex-col font-poppins items-center'>
						{/* optimizing using cloudinary */}
						<Image
							className='transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl'
							publicId={browse.dining.publicId}
							cloudName={browse.dining.cloudName}
							loading='lazy'
						/>
						<span className='font-bold py-6'>Dining</span>
					</div>
					{/* card 2 */}
					<div className='flex flex-col font-poppins items-center'>
						{/* optimizing using cloudinary */}
						<Image
							className='transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl'
							publicId={browse.living.publicId}
							cloudName={browse.living.cloudName}
							loading='lazy'
						/>
						<span className='font-bold py-6'>Living</span>
					</div>
					{/* card 3 */}
					<div className='flex flex-col font-poppins items-center'>
						{/* optimizing using cloudinary */}
						<Image
							className='transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl'
							publicId={browse.bedroom.publicId}
							cloudName={browse.bedroom.cloudName}
							loading='lazy'
						/>
						<span className='font-bold py-6'>Bedroom</span>
					</div>
				</div>
			</div>
	)
}

export default Browse