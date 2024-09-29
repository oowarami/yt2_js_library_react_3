import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// cloudinary
import { Image } from 'cloudinary-react';
import { useParams } from 'react-router-dom';
import { useProducts } from '../customHooks/useProducts';
import { ToastContainer, toast } from 'react-toastify';
// import ProductCard from '../products/ProductCard';
import comparisonTable from '../../../data/comparison.json';
import { CiStar } from 'react-icons/ci';
import Header from '../reusableComponents/header/Header';
import ShopBanner from '../reusableComponents/ShopBanner';

const Compare = () => {
	const navigate = useNavigate(); // For navigation
	const { showProducts, compareTable } = useProducts();

	// Limit products to 2 for the homepage
	const limitedProducts = showProducts.slice(0, 2);

	// Function to handle adding a product to the cart
	const handleAddToCart = (product) => {
		addToCart(product); // Add product to cart
		toast.success('Product added to cart!');
	};

	return (
		<>
			<Header title='Product Comparison' breadcrumb='Comparison'/>
			{/* Content */}
			<div className='grid lg:grid-cols-4 grid-cols-2 gap-6 font-poppins py-10'>
				{/* Left Section */}
				<div className='col-span-1 px-10'>
					<p className='text-lg font-semibold'>
						Go to Product <br /> page for more <br /> Products
					</p>
					<a
						href='/products'
						className='text-indigo-600 underline mt-2 inline-block'>
						View More
					</a>
				</div>

				{/* Product Comparison Section */}
				<div className='col-span-2 grid grid-cols-2 gap-6'>
					{limitedProducts.map((product, index) => (
						<div
							key={index}
							className='border p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow'>
							<Image
								publicId={product.publicId}
								cloudName={product.cloudName}
								className='w-full h-48 object-cover rounded-lg'
								loading='lazy'
							/>
							<div className='mt-4'>
								<h3 className='text-lg font-semibold'>{product.name}</h3>
								<p className='text-gray-700'>{product.price}</p>
								<div className='flex items-center mt-2'>
									<span className='text-yellow-500 font-bold'>
										{product.rating}
									</span>
									<div className='ml-2 flex items-center'>
										{Array.from({ length: 5 }, (_) => (
											<CiStar className='text-secondary' />
										))}
									</div>
								</div>
								<p className='text-gray-500 text-sm'>
									{product.reviews} Reviews
								</p>
							</div>
						</div>
					))}
				</div>

				{/* Add a Product Section */}
				<div className='col-span-1'>
					<h2 className='text-lg font-semibold'>Add A Product</h2>
					<button className='mt-4 bg-secondary text-white px-6 py-2 rounded-lg shadow hover:bg-yellow-600 transition-colors'>
						Choose a Product
					</button>
				</div>
			</div>

			{/* comparison table */}
			<div className='p-8 font-poppins'>
				<div className='overflow-x-auto'>
					<table className='min-w-full table-auto border-collapse border border-gray-300'>
						{/* Body */}
						<tbody>
							{compareTable.map((section, index) => (
								<React.Fragment key={index}>
									{/* Section Category */}
									<tr className='bg-transparent'>
										<td
											className='p-4 font-bold border border-gray-300'
											colSpan='3'>
											{section.category}
										</td>
									</tr>
									{/* Section Details */}
									{section.details.map((detail, i) => (
										<tr key={i}>
											<td className='p-4 border border-gray-300'>
												{detail.name}
											</td>
											<td className='p-4 border border-gray-300'>
												{detail.value1}
											</td>
											<td className='p-4 border border-gray-300'>
												{detail.value2}
											</td>
										</tr>
									))}
								</React.Fragment>
							))}
						</tbody>
					</table>
				</div>
				{/* Add to Cart Buttons */}
				<div className='flex justify-around mt-8'>
					<button className='px-6 py-3 bg-secondary text-white rounded hover:bg-yellow-600'>
						Add to Cart
					</button>
					<button className='px-6 py-3 bg-secondary text-white rounded hover:bg-yellow-600'>
						Add to Cart
					</button>
				</div>
			</div>
			<ShopBanner/> 
		</>
	);
};

export default Compare;
