import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // React Router hook
import { Image } from 'cloudinary-react';
import { useProducts } from '../customHooks/useProducts';
import { ToastContainer, toast } from 'react-toastify';
import { useCart } from '../../context/CartContext'; // Import CartContext
import ProductCard from './ProductCard';

const ProductGridHome = () => {
	const { showProducts } = useProducts();
	const navigate = useNavigate();
	const [likedProducts, setLikedProducts] = useState({}); // State to track liked status for each product
	const { addToCart } = useCart(); // Use CartContext

	// Limit products to 8 for the homepage
	const limitedProducts = showProducts.slice(0, 8);

	// Function to handle adding a product to the cart
	const handleAddToCart = (product) => {
		addToCart(product); // Add product to cart
		toast.success('Product added to cart!');
	};


	// Function to toggle like status for a specific product
	const handleLike = (productId) => {
		setLikedProducts((prevLikedProducts) => {
			const isLiked = prevLikedProducts[productId];
			// Toggle the liked state for the specific product
			const updatedLikedProducts = {
				...prevLikedProducts,
				[productId]: !isLiked,
			};

			// Display toast notification
			if (!isLiked) {
				toast.success('Product liked!');
			} else {
				toast.info('Like removed!');
			}

			return updatedLikedProducts;
		});
	};


	// Navigate to the Shop page when 'Show More' is clicked
	const handleShowMore = () => {
		navigate('/shop'); 
	};

	return (
		<div className='p-10 mx-8'>
			<div className='py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 font-poppins'>
				{limitedProducts.map((product) => (
				
					<ProductCard
            key={product.id}
            product={product}
            liked={likedProducts[product.id]}
            handleAddToCart={handleAddToCart}
            handleLike={handleLike}
						
          />
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

			{/* Toastify container for notifications */}
			<ToastContainer
				position='top-right'
				autoClose={2000}
				hideProgressBar={false}
				closeOnClick
				pauseOnHover
				draggable
				pauseOnFocusLoss
			/>
		</div>
	);
};

export default ProductGridHome;
