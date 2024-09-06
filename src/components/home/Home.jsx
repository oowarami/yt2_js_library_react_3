import React, { useState } from 'react';
// hero image
import scandanavian from '../../assets/images/home/hero/scandinavian-background1.png';
// browse range images
import dining from '../../assets/images/home/browse/dining.png';
import living from '../../assets/images/home/browse/living.png';
import bedroom from '../../assets/images/home/browse/bedroom.png';
// our products images
import slytherine from '../../assets/images/home/products/slytherine.png';
import leviosa from '../../assets/images/home/products/leviosa.png';
import lolito from '../../assets/images/home/products/lolito.png';
import respira from '../../assets/images/home/products/respira.png';
import grifo from '../../assets/images/home/products/grifo.png';
import muggo from '../../assets/images/home/products/muggo.png';
import pingky from '../../assets/images/home/products/pingky.png';
import potty from '../../assets/images/home/products/potty.png';

// sharing images
import rectangle36 from '../../assets/images/home/sharing/Rectangle36.png';
import rectangle37 from '../../assets/images/home/sharing/Rectangle37.png';
import rectangle38 from '../../assets/images/home/sharing/Rectangle38.png';
import rectangle39 from '../../assets/images/home/sharing/Rectangle39.png';
import rectangle40 from '../../assets/images/home/sharing/Rectangle40.png';
import rectangle41 from '../../assets/images/home/sharing/Rectangle41.png';
import rectangle43 from '../../assets/images/home/sharing/Rectangle43.png';
import rectangle44 from '../../assets/images/home/sharing/Rectangle44.png';
import rectangle45 from '../../assets/images/home/sharing/Rectangle45.png';
// custom hooks
import { useCarousel } from '../customHooks/useCarousel';

// react icons
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const Home = () => {
	let { currentSlide, slides, nextSlide, prevSlide } = useCarousel();

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
					<button className='bg-secondary text-white text-lg font-bold py-3 px-8 rounded-md shadow-lg hover:bg-[#A8774B]'>
						BUY NOW
					</button>
				</div>
			</div>

			<div>
				<div className='flex flex-col items-center font-poppins'>
					<h2 className='font-bold text-2xl'>Browse The Range</h2>
					<p className='text-center'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					</p>
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
							<span className='absolute right-1/4 h-12 w-12 text-center py-3 my-10 justify-end text-white bg-[#E97171] rounded-full'>
								-30%
							</span>
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
							<span className='absolute right-1/4 h-12 w-12 text-center py-3 my-10 justify-end text-white bg-[#E97171] rounded-full'>
								-50%
							</span>
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
							<span className='absolute right-1/4 h-12 w-12 text-center py-3 my-10 justify-end text-white bg-[#2EC1AC] rounded-full'>
								New
							</span>
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
							<span className='absolute right-1/4 h-12 w-12 text-center py-3 my-10 justify-end text-white bg-[#2EC1AC] rounded-full'>
								New
							</span>
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
							<span className='absolute right-1/4 h-12 w-12 text-center py-3 my-10 justify-end text-white bg-[#E97171] rounded-full'>
								-50%
							</span>
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
							<span className='absolute right-1/4 h-12 w-12 text-center py-3 my-10 justify-end text-white bg-[#2EC1AC] rounded-full'>
								New
							</span>
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
				</div>
			</div>

			{/* Inspiration */}
			<div className='bg-inspiration w-full my-20 mx-auto'>
				<div className=' text-black font-poppins p-10 flex flex-row'>
					{/* left side (text section)*/}
					<div>
						<h2 className='font-bold text-3xl'>
							50+ Beautiful rooms <br />
							inspiration
						</h2>
						<p className='py-2'>
							Our designer already made a lot of beautiful <br /> prototype of
							rooms that inspire you
						</p>
						<button className='text-white font-semibold bg-secondary border-secondary px-8 my-6'>
							Explore More
						</button>
					</div>
					{/* right side (carousel) */}
					<div className='relative w-1/3 left-1/2 transform -translate-x-1/2'>
						<div className='overflow-hidden w-full h-96 rounded-lg'>
							<div
								className='flex transition-transform duration-700 ease-in-out'
								style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
								{slides.map((slide, index) => (
									<div key={index} className='min-w-full h-full'>
										<img
											src={slide.url}
											alt={slide.title}
											className='w-full h-full object-cover'
										/>
									</div>
								))}
							</div>
						</div>
						{/* Next/Prev Buttons */}
						<button
							onClick={prevSlide}
							className='absolute left-2 bg-white text-secondary p-2 rounded'>
							<IoIosArrowBack />
						</button>
						<button
							onClick={nextSlide}
							className='absolute  right-2 bg-white text-secondary p-2 rounded'>
							<IoIosArrowForward />
						</button>
					</div>
				</div>
			</div>

			{/* Sharing */}

			<div className='flex items-center flex-col font-poppins'>
				<p>Share your setup with</p>
				<h2 className='font-bold text-3xl'>#FuniroFurniture</h2>
			</div>
			<div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-9 gap-4 py-6'>
				<img src={rectangle36} alt='flower pot' className='' />
				<img src={rectangle37} alt='brown chair' className='' />
				<img src={rectangle38} alt='laptop on desk' className='' />
				<img src={rectangle39} alt='stools' className='' />
				<img src={rectangle40} alt='dining set' className='' />
				<img src={rectangle41} alt='photo frame' className='' />
				<img src={rectangle43} alt='bed' className='' />
				<img src={rectangle44} alt='kitchen backsplash' className='' />
				<img src={rectangle45} alt='outdoor dining set' className='' />
			</div>
			<div className='border-t border-gray-300 my-8'></div>
		</>
	);
};

export default Home;
