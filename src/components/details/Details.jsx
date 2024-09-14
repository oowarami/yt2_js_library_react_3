import React from 'react';
// cloudinary
import { Image } from 'cloudinary-react';
import { useParams } from 'react-router-dom';
import { useProducts } from '../customHooks/useProducts'; 
// import {products, sizes, colors } from '../../../data/product.json'

const Detail = () => {
	const { name } = useParams();
	// const { products, sizes, colors } = useProducts();



	// Find the specific product by its name
	const product = products.find((prod) => prod.name === name);

	if (!product) {
		return <div className='font-poppins flex h-[80vh] flex-col gap-4 items-center justify-center'>Product not found</div>;
	}

	return (
		<div className='min-h-screen flex items-center justify-center py-10 font-poppins'>
			<div className='max-w-7xl mx-auto p-10 flex gap-10'>
				{/* Left column: Product image */}
				<div className='flex flex-col gap-4'>
					{products.map((product) => (
						<Image
							id = {product.id}
							publicId={product.publicId}
							cloudName={product.cloudName}
							loading='lazy'
							className=''
						/>
					))}
				</div>

				{/* Right column: Product details */}
				<div className='flex-1'>
					<h1 className='text-3xl font-bold mb-4'>{products.name}</h1>
					<p className='text-xl text-gray-500 mb-4'>{products.price}</p>
					<p className='text-sm text-gray-700 mb-4'>{products.description}</p>

					{/* Size and Color Options */}
					<div className='mb-6'>
						<p className='mb-2'>Size:</p>
						<div className='flex gap-4'>
							{sizes.map((size, index) => (
								<button key={index} className='border px-3 py-1 rounded bg-[#F9F1E7] active:bg-secondary active:text-white'>
									{size}
								</button>
							))};
						</div>
					</div>

					<div className='mb-6'>
						<p className='mb-2'>Color:</p>
						<div className='flex gap-4'>
							{colors.map((color, index) => (
								<button
									key={index}
									style={{ backgroundColor: color }}
									className='w-8 h-8 rounded-full border'></button>
							))}
						</div>
					</div>

					{/* Add to Cart and Compare Buttons */}
					<div className='flex gap-4 mb-4'>
						<button className='border-primary px-6 py-2 rounded bg-transparent gap-x-2 '>
						<span>-</span>
						1
						<span>+</span>
						</button>
						<button className='border-primary px-6 py-2 rounded bg-transparent'>Add to Cart</button>
						<button className='border-primary px-6 py-2 rounded bg-transparent '><span>+</span>Compare</button>
					</div>

					{/* Product Details */}
					<p>SKU: {product.sku}</p>
					<p>Category: {product.category}</p>
					<p>Tags: {product.tags}</p>

					{/* Share Icons */}
					<div className='flex gap-4 mt-4'>
						<button>Facebook</button>
						<button>Twitter</button>
						<button>LinkedIn</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Detail;
