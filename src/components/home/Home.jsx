import React, { useState } from 'react';
// hero image from cloudinary
import { hero } from '../../../data/home.json';
// browse range images from cloudinary
import { browse } from '../../../data/browse-range.json';
// our products images from cloudinary
import { product } from '../../../data/product.json';
// sharing images from cloudinary
import { sharing } from '../../../data/sharing.json';
// custom hooks
import { useCarousel } from '../customHooks/useCarousel';
// react icons
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
// cloudinary
import { Image } from 'cloudinary-react';

const Home = () => {
	let { currentSlide, slides, nextSlide, prevSlide } = useCarousel();

	return (
		<>
			<div className='relative w-full h-[70vh] md:h-screen'>
				{/* background image */}
				{/* <img src={scandanavian} alt='background image' /> */}
				<Image
					publicId={hero.scandinavian.publicId}
					cloudName={hero.scandinavian.cloudName}
					loading='lazy'
				/>

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
				<div className='flex flex-col items-center font-poppins py-10'>
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
							<Image
								className='w-full object-cover'
								publicId={product.slytherine.publicId}
								cloudName={product.slytherine.cloudName}
								loading='lazy'
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
							<Image
								className='w-full object-cover'
								publicId={product.leviosa.publicId}
								cloudName={product.leviosa.cloudName}
								loading='lazy'
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
							<Image
								className='w-full object-cover'
								publicId={product.lolito.publicId}
								cloudName={product.lolito.cloudName}
								loading='lazy'
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
							<Image
								className='w-full object-cover'
								publicId={product.respira.publicId}
								cloudName={product.respira.cloudName}
								loading='lazy'
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
							<Image
								className='w-full object-cover'
								publicId={product.grifo.publicId}
								cloudName={product.grifo.cloudName}
								loading='lazy'
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
							<Image
								className='w-full object-cover'
								publicId={product.muggo.publicId}
								cloudName={product.muggo.cloudName}
								loading='lazy'
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
							<Image
								className='w-full object-cover'
								publicId={product.pingky.publicId}
								cloudName={product.pingky.cloudName}
								loading='lazy'
							/>
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
							<Image
								className='w-full object-cover'
								publicId={product.potty.publicId}
								cloudName={product.potty.cloudName}
								loading='lazy'
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
				<div className=' text-black font-poppins p-10 flex flex-col lg:flex-row'>
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
						<div className='lg:overflow-hidden w-full h-96 rounded-lg'>
							<div
								className='overflow-hidden flex transition-transform duration-700 ease-in-out'
								style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
								{slides.map((slide, index) => (
									<div key={index} className='min-w-full h-full'>
										<Image
											className='w-full object-cover'
											publicId={slide.publicId}
											cloudName={slide.cloudName}
											loading='lazy'
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
				<Image
					publicId={sharing.rectangle36.publicId}
					cloudName={sharing.rectangle36.cloudName}
					loading='lazy'
				/>
				<Image
					publicId={sharing.rectangle37.publicId}
					cloudName={sharing.rectangle37.cloudName}
					loading='lazy'
				/>
				<Image
					publicId={sharing.rectangle38.publicId}
					cloudName={sharing.rectangle38.cloudName}
					loading='lazy'
				/>
				<Image
					publicId={sharing.rectangle39.publicId}
					cloudName={sharing.rectangle39.cloudName}
					loading='lazy'
				/>
				<Image
					publicId={sharing.rectangle40.publicId}
					cloudName={sharing.rectangle40.cloudName}
					loading='lazy'
				/>
				<Image
					publicId={sharing.rectangle41.publicId}
					cloudName={sharing.rectangle41.cloudName}
					loading='lazy'
				/>
				<Image
					publicId={sharing.rectangle43.publicId}
					cloudName={sharing.rectangle43.cloudName}
					loading='lazy'
				/>
				<Image
					publicId={sharing.rectangle44.publicId}
					cloudName={sharing.rectangle44.cloudName}
					loading='lazy'
				/>
				<Image
					publicId={sharing.rectangle45.publicId}
					cloudName={sharing.rectangle45.cloudName}
					loading='lazy'
				/>
			</div>
			<div className='border-t border-gray-300 my-8'></div>
		</>
	);
};

export default Home;
