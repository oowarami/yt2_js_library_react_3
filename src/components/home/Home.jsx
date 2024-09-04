import React from 'react';
import scandanavian from '../../assets/images/home/scandinavian-interior-mockup-wall-decal-background1.png';

const Home = () => {
	return (
		<>
			<div className="relative w-full h-[70vh] md:h-screen">
				{/* background image */}
				<img src={scandanavian} alt='background image' />

				{/* text overlay */}
				<div className='absolute top-1/4 right-12 bg-opacity-80 bg-[#FBEAD1] p-8 md:p-12 rounded-lg font-poppins'>
					<h2 className='text-sm uppercase tracking-wide text-gray-700 mb-4 font-bold'>
						New Arrival
					</h2>
					<h1 className='text-4xl md:text-5xl font-bold text-secondary leading-tight mb-6'>
						Discover Our <br/> New Collection
					</h1>
					<p className='text-lg text-gray-700 mb-6'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut <br/> elit
						tellus, luctus nec ullamcorper mattis.
					</p>
					<button className='bg-[#C1975B] text-white text-lg font-bold py-3 px-8 rounded-md shadow-lg hover:bg-[#A8774B]'>
						BUY NOW
					</button>
				</div>
			</div>

			
		</>
	);
};

export default Home;
