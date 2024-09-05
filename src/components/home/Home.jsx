import React from 'react';
import scandanavian from '../../assets/images/home/scandinavian-background1.png';
import dining from '../../assets/images/home/dining.png';
import living from '../../assets/images/home/living.png';
import bedroom from '../../assets/images/home/bedroom.png';
import slytherine from '../../assets/images/home/products/slytherine.png';
import leviosa from '../../assets/images/home/products/leviosa.png';
import lolito from '../../assets/images/home/products/lolito.png';
import respira from '../../assets/images/home/products/respira.png';
import grifo from '../../assets/images/home/products/grifo.png';
import muggo from '../../assets/images/home/products/muggo.png';
import pingky from '../../assets/images/home/products/pingky.png';
import potty from '../../assets/images/home/products/potty.png';

const Home = () => {
	return (
		<>
			<div className='relative w-full h-[70vh] md:h-screen'>
				{/* background image */}
				<img src={scandanavian} alt='background image' />

				{/* text overlay */}
				<div className='absolute top-1/4 right-12 bg-[#FBEAD1] p-8 md:p-12 rounded-lg font-poppins'>
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
					<button className='bg-[#C1975B] text-white text-lg font-bold py-3 px-8 rounded-md shadow-lg hover:bg-[#A8774B]'>
						BUY NOW
					</button>
				</div>
			</div>

			<div>
				<div className='flex flex-col items-center font-poppins'>
					<h2 className='font-bold text-2xl'>Browse The Range</h2>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
				</div>
				<div className='py-10 px-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 '>
					{/* card 1 */}
					<div className='flex flex-col font-poppins items-center'>
						<img
							src={dining}
							alt='dining'
							className='transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl'
						/>
						<span className='font-bold py-6'>Dining</span>
					</div>
					{/* card 2 */}
					<div className='flex flex-col font-poppins items-center'>
						<img
							src={living}
							alt='living'
							className='transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl'
						/>
						<span className='font-bold py-6'>Living</span>
					</div>
					{/* card 3 */}
					<div className='flex flex-col font-poppins items-center'>
						<img
							src={bedroom}
							alt='bedroom'
							className='transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl'
						/>
						<span className='font-bold py-6'>Bedroom</span>
					</div>
				</div>
			</div>

			{/* Products */}
			<div className='font-poppins'>
				<h2 className=' text-center text-4xl font-bold'>Our Products</h2>
				<div className='p-10 '>
					{/* row 1 */}
					<div className='py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
						{/* card 1 */}
						<div className='relative group w-full max-w-xs overflow-hidden rounded-lg shadow-lg bg-box transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl'>
							<img
								src={slytherine}
								alt='Slytherine'
								className='w-full object-cover'
							/>
							{/* overlay content */}
							<div className='absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
								<button className='bg-white text-[#C1975B] font-semibold py-2 px-14 rounded-md mb-4'>
									Add to cart
								</button>
								<div className='flex space-x-6 text-white'>
									<span className='flex items-center space-x-2 text-sm'>
										Share
									</span>
									<span className='flex items-center space-x-2 text-sm'>
										Compare
									</span>
									<span className='flex items-center space-x-2 text-sm'>
										Like
									</span>
								</div>
							</div>
							{/* product information */}
							<div className='flex flex-col px-4 py-2'>
								<span className='font-semibold text-2xl'>Slytherine</span>
								<span className='text-med-gray py-2'>Stylish cafe chair</span>
								<div className='flex flex-row gap-x-2 py-3'>
									<span className='font-semibold'>Rp 2.500.000</span>
									<span className='line-through text-light-gray'>
										Rp 3.500.000
									</span>
								</div>
							</div>
						</div>

						{/* card 2 */}
						<div className='relative group w-full max-w-xs overflow-hidden rounded-lg shadow-lg bg-box transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl'>
							<img
								src={leviosa}
								alt='Leviosa'
								className='w-full object-cover'
							/>
							{/* overlay content */}
							<div className='absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
								<button className='bg-white text-[#C1975B] font-semibold py-2 px-14 rounded-md mb-4'>
									Add to cart
								</button>
								<div className='flex space-x-6 text-white'>
									<span className='flex items-center space-x-2 text-sm'>
										Share
									</span>
									<span className='flex items-center space-x-2 text-sm'>
										Compare
									</span>
									<span className='flex items-center space-x-2 text-sm'>
										Like
									</span>
								</div>
							</div>
							{/* product information */}
							<div className='flex flex-col px-4 py-2'>
								<span className='font-semibold text-2xl'>Leviosa</span>
								<span className='text-med-gray py-2'>Stylish cafe chair</span>
								<div className='flex flex-row gap-x-2 py-3'>
									<span className='font-semibold'>Rp 2.500.000</span>
								</div>
							</div>
						</div>

						{/* card 3 */}
						<div className='relative group w-full max-w-xs overflow-hidden rounded-lg shadow-lg bg-box transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl'>
							<img src={lolito} alt='Lolito' className='w-full object-cover ' />
							{/* overlay content */}
							<div className='absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
								<button className='bg-white text-[#C1975B] font-semibold py-2 px-14 rounded-md mb-4'>
									Add to cart
								</button>
								<div className='flex space-x-6 text-white'>
									<span className='flex items-center space-x-2 text-sm'>
										Share
									</span>
									<span className='flex items-center space-x-2 text-sm'>
										Compare
									</span>
									<span className='flex items-center space-x-2 text-sm'>
										Like
									</span>
								</div>
							</div>
							{/* product information */}
							<div className='flex flex-col px-4 py-2'>
								<span className='font-semibold text-2xl'>Lolito</span>
								<span className='text-med-gray py-2'>Luxury big sofa</span>
								<div className='flex flex-row gap-x-2 py-3'>
									<span className='font-semibold'>Rp 7.000.000</span>
									<span className='line-through text-light-gray'>
										Rp 14.000.000
									</span>
								</div>
							</div>
						</div>

						{/* card 4 */}
						<div className='relative group w-full max-w-xs overflow-hidden rounded-lg shadow-lg bg-box transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl'>
							<img
								src={respira}
								alt='Respira'
								className='w-full object-cover '
							/>
							{/* overlay content */}
							<div className='absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
								<button className='bg-white text-[#C1975B] font-semibold py-2 px-14 rounded-md mb-4'>
									Add to cart
								</button>
								<div className='flex space-x-6 text-white'>
									<span className='flex items-center space-x-2 text-sm'>
										Share
									</span>
									<span className='flex items-center space-x-2 text-sm'>
										Compare
									</span>
									<span className='flex items-center space-x-2 text-sm'>
										Like
									</span>
								</div>
							</div>
							{/* product information */}
							<div className='flex flex-col px-4 py-2'>
								<span className='font-semibold text-2xl'>Respira</span>
								<span className='text-med-gray py-2'>
									Outdoor bar table and stool
								</span>
								<div className='flex flex-row gap-x-2 py-3'>
									<span className='font-semibold'>Rp 500.000</span>
								</div>
							</div>
						</div>
					</div>

					{/* row 2 */}
					<div className='py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
						{/* card 1 */}
						<div className='relative group w-full max-w-xs overflow-hidden rounded-lg shadow-lg bg-box transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl'>
							<img src={grifo} alt='Grifo' className='w-full object-cover' />
							{/* overlay content */}
							<div className='absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
								<button className='bg-white text-[#C1975B] font-semibold py-2 px-14 rounded-md mb-4'>
									Add to cart
								</button>
								<div className='flex space-x-6 text-white'>
									<span className='flex items-center space-x-2 text-sm'>
										Share
									</span>
									<span className='flex items-center space-x-2 text-sm'>
										Compare
									</span>
									<span className='flex items-center space-x-2 text-sm'>
										Like
									</span>
								</div>
							</div>
							{/* product information */}
							<div className='flex flex-col px-4 py-2'>
								<span className='font-semibold text-2xl'>Grifo</span>
								<span className='text-med-gray py-2'>Night lamp</span>
								<div className='flex flex-row gap-x-2 py-3'>
									<span className='font-semibold'>Rp 1.500.000</span>
								</div>
							</div>
						</div>

						{/* card 2 */}
						<div className='relative group w-full max-w-xs overflow-hidden rounded-lg shadow-lg bg-box transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl'>
							<img src={muggo} alt='Muggo' className='w-full object-cover' />
							{/* overlay content */}
							<div className='absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
								<button className='bg-white text-[#C1975B] font-semibold py-2 px-14 rounded-md mb-4'>
									Add to cart
								</button>
								<div className='flex space-x-6 text-white'>
									<span className='flex items-center space-x-2 text-sm'>
										Share
									</span>
									<span className='flex items-center space-x-2 text-sm'>
										Compare
									</span>
									<span className='flex items-center space-x-2 text-sm'>
										Like
									</span>
								</div>
							</div>
							{/* product information */}
							<div className='flex flex-col px-4 py-2'>
								<span className='font-semibold text-2xl'>Muggo</span>
								<span className='text-med-gray py-2'>Small mug</span>
								<div className='flex flex-row gap-x-2 py-3'>
									<span className='font-semibold'>Rp 150.000</span>
								</div>
							</div>
						</div>

						{/* card 3 */}
						<div className='relative group w-full max-w-xs overflow-hidden rounded-lg shadow-lg bg-box transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl'>
							<img src={pingky} alt='Pingky' className='w-full object-cover ' />
							{/* overlay content */}
							<div className='absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
								<button className='bg-white text-[#C1975B] font-semibold py-2 px-14 rounded-md mb-4'>
									Add to cart
								</button>
								<div className='flex space-x-6 text-white'>
									<span className='flex items-center space-x-2 text-sm'>
										Share
									</span>
									<span className='flex items-center space-x-2 text-sm'>
										Compare
									</span>
									<span className='flex items-center space-x-2 text-sm'>
										Like
									</span>
								</div>
							</div>
							{/* product information */}
							<div className='flex flex-col px-4 py-2'>
								<span className='font-semibold text-2xl'>Pingky</span>
								<span className='text-med-gray py-2'>Cute bed set</span>
								<div className='flex flex-row gap-x-2 py-3'>
									<span className='font-semibold'>Rp 7.000.000</span>
									<span className='line-through text-light-gray'>
										Rp 14.000.000
									</span>
								</div>
							</div>
						</div>

						{/* card 4 */}
						<div className='relative group w-full max-w-xs overflow-hidden rounded-lg shadow-lg bg-box transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl'>
							<img src={potty} alt='Potty' className='w-full object-cover ' />
							{/* overlay content */}
							<div className='absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
								<button className='bg-white text-[#C1975B] font-semibold py-2 px-14 rounded-md mb-4'>
									Add to cart
								</button>
								<div className='flex space-x-6 text-white'>
									<span className='flex items-center space-x-2 text-sm'>
										Share
									</span>
									<span className='flex items-center space-x-2 text-sm'>
										Compare
									</span>
									<span className='flex items-center space-x-2 text-sm'>
										Like
									</span>
								</div>
							</div>
							{/* product information */}
							<div className='flex flex-col px-4 py-2'>
								<span className='font-semibold text-2xl'>Potty</span>
								<span className='text-med-gray py-2'>
									Minimalist flower pot
								</span>
								<div className='flex flex-row gap-x-2 py-3'>
									<span className='font-semibold'>Rp 500.000</span>
								</div>
							</div>
						</div>
					</div>

					<div className='text-center'>
						<button className='border-solid border-secondary  text-secondary bg-transparent px-20'>
							Show More
						</button>
					</div>

					{/* Inspiration */}
					<div className='bg-inspiration my-20 mx-auto'>
						<div className=' text-black font-poppins p-10 flex flex-row'>
							{/* left side */}
							<div >
								<h2 className='font-bold text-3xl'>50+ Beautiful rooms <br/>inspiration</h2>
								<p className='py-2'>
									Our designer already made a lot of beautiful <br/> prototipe of
									rooms that inspire you
								</p>
								<button className='text-white font-semibold bg-secondary border-secondary px-8 my-6'>Explore More</button>
							</div>
							{/* right side */}
							<div className='flex items-center'>
								Carousel
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Home;
