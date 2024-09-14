import React from 'react';
import { useNavigate, Link } from 'react-router-dom'; // React Router hook
import { Image } from 'cloudinary-react';
import { useProducts } from '../customHooks/useProducts';
import { ToastContainer, toast } from 'react-toastify';
const ProductGridHome = () => {
	const { products } = useProducts();

	const navigate = useNavigate();

	// Limit products to 8 for the homepage
	const limitedProducts = products.slice(0, 8);

	// Navigate to the Shop page when 'Show More' is clicked
	const handleShowMore = () => {
		navigate('/shop'); // Make sure the route to the shop page is correctly set
	};

	// Function to copy the current page URL to the clipboard and show a toast notification
	// Copy the current URL to the clipboard
	const handleShare = () => {
		navigator.clipboard
			.writeText(window.location.href)
			.then(() => {
				// Show toast notification
				toast.success('Page URL copied!');
			})
			.catch((err) => {
				toast.error('Failed to copy URL');
			});
	};

	return (
		<div className='p-10 mx-8'>
			<div className='py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 font-poppins'>
				{limitedProducts.map((product, index) => (
					
					<div
						key={index}
						className='relative group w-full max-w-xs overflow-hidden rounded-lg shadow-lg bg-box transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl'>
						{/* Discount Badge */}
						{product.discount && (
							<span className='absolute right-1/4 h-12 w-12 text-center py-3 my-10 justify-end text-white bg-[#E97171] rounded-full'>
								{product.discount}
							</span>
						)}
						{/* New Badge */}
						{product.new === true && (
							<span className='absolute right-1/4 h-12 w-12 text-center py-3 my-10 justify-end text-white bg-[#2EC1AC] rounded-full'>
								New
							</span>
						)}
						<Image
							className='w-full object-cover'
							publicId={product.publicId}
							cloudName={product.cloudName}
							loading='lazy'
						/>
						{/* Overlay content */}
						<div className='absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
							<button className='bg-white text-[#C1975B] font-semibold py-2 px-14 rounded-md mb-4'>
								Add to cart
							</button>
							<div className='flex space-x-4 text-white'>
								<button
									onClick={handleShare}
									className='flex items-center space-x-2 text-sm bg-transparent'>
									Share
								</button>
								<button className='flex items-center space-x-2 text-sm bg-transparent'>
									Compare
								</button>
								<button className='flex items-center space-x-2 text-sm bg-transparent'>
									Like
								</button>
							</div>
						</div>
						{/* Product Information */}
						<div className='flex flex-col px-4 py-2'>
							<span className='font-semibold text-2xl'>{product.name}</span>
							<span className='text-med-gray py-2'>{product.description}</span>
							<div className='flex flex-row gap-x-2 py-3'>
								<span className='font-semibold'>{product.price}</span>
								{product.oldPrice && (
									<span className='line-through text-light-gray'>
										{product.oldPrice}
									</span>
								)}
							</div>
						</div>
					</div>
				
				))}
			</div>

			{/* Show More button */}
			<div className='flex justify-center mt-8'>
				<button
					onClick={handleShowMore}
					className='bg-[#C1975B] text-white font-semibold py-2 px-8 rounded-md hover:bg-[#A8804A] transition duration-300'>
					Show More
				</button>
			</div>

			{/* Toastify Container */}
			<ToastContainer
				position='top-right'
				autoClose={3000}
				hideProgressBar={false}
			/>
		</div>
	);
};

export default ProductGridHome;
