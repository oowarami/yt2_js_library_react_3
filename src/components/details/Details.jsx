import React, {useState}from 'react';
import { useNavigate } from 'react-router-dom';
// cloudinary
import { Image } from 'cloudinary-react';
import { useParams } from 'react-router-dom';
import { useProducts } from '../customHooks/useProducts';
import { FaFacebook } from 'react-icons/fa';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { FaLinkedin } from 'react-icons/fa6';
import { ToastContainer, toast } from 'react-toastify';
import ProductCard from '../products/ProductCard';

const Detail = () => {
	const { id } = useParams();
	let numId = Number(id);
	const navigate = useNavigate(); // For navigation
	const { showProducts, productSize, productColor } = useProducts();
	const [likedProducts, setLikedProducts] = useState({}); // State to track liked status for each product
	// Find the specific product by its id
	const product = showProducts.find((obj) => obj.id == numId);

	if (!product) {
		return (
			<div className='font-poppins flex h-[80vh] flex-col gap-4 items-center justify-center'>
				Product not found
			</div>
		);
	}

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

	// Navigate to the compare page with the product's ID
	const handleCompare = () => {
		navigate(`/compare/${product.id}`); // Add product ID for navigation
	};

	// Navigate to the Shop page when 'Show More' is clicked
	const handleShowMore = () => {
		navigate('/shop'); 
	};

	// Limit products to 4 for the homepage
	const limitedProducts = showProducts.slice(0, 4);
	return (
		<>
			<div className='min-h-screen flex items-center justify-center py-10 font-poppins'>
				<div className='max-w-7xl mx-auto p-10 flex gap-10'>
					{/* Left column: Product image */}
					<Image
						key={product.id}
						publicId={product.publicId}
						cloudName={product.cloudName}
						loading='lazy'
						className=''
					/>

					{/* Right column: Product details */}
					<div className='flex-1'>
						<h1 className='text-3xl font-bold mb-4'>{showProducts.name}</h1>
						<p className='text-xl text-gray-500 mb-4'>{showProducts.price}</p>
						<p className='text-sm text-gray-700 mb-4'>
							{showProducts.description}
						</p>

						{/* Size and Color Options */}
						<div className='mb-6'>
							<p className='mb-2 text-[#9F9F9F] font-normal'>Size:</p>
							<div className='flex gap-4 '>
								{productSize.map((size, index) => (
									<button
										key={index}
										className='border px-3 py-1 rounded bg-[#F9F1E7] active:bg-secondary active:text-white'>
										{size}
									</button>
								))}
								;
							</div>
						</div>

						<div className='mb-6'>
							<p className='mb-2 text-[#9F9F9F] font-normal'>Color:</p>
							<div className='flex gap-4'>
								{productColor.map((color, index) => (
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
								<span>-</span>1<span>+</span>
							</button>
							<button className='border-primary px-6 py-2 rounded bg-transparent'>
								Add to Cart
							</button>
							<button
								className='border-primary px-6 py-2 rounded bg-transparent '
								onClick={handleCompare}>
								<span>+</span>Compare
							</button>
						</div>
						{/* separator */}
						<div className='border-t border-gray-300 my-8'></div>

						{/* Product Details */}
						<div className='font-poppins text-[#9F9F9F] font-normal py-2'>
							<p>SKU: {product.sku}</p>
							<p>Category: {product.category}</p>
							<p>Tags: {product.tags}</p>
							{/* Share Icons */}
							<div className='flex flex-row '>
								<p className=''>Share: </p>
								<div className='flex gap-x-4 text-primary px-2 py-0'>
									<FaFacebook />
									<FaLinkedin />
									<AiFillTwitterCircle />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* separator */}
			<div className='border-t border-gray-300 my-8'></div>

			<div className='flex flex-col font-poppins px-32 items-center'>
				<div className='flex flex-row gap-x-6'>
					<p>Description</p>
					<p className='text-light-gray'>Additional Information</p>
					<p className='text-light-gray'>Reviews [5]</p>
				</div>
				<div className='flex flex-col text-light-gray py-8'>
					<p>
						Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn
						portable active stereo speaker takes the unmistakable look and sound
						of Marshall, unplugs the chords, and takes the show on the road.
					</p>
					<p className='py-6'>
						Weighing in under 7 pounds, the Kilburn is a lightweight piece of
						vintage styled engineering. Setting the bar as one of the loudest
						speakers in its class, the Kilburn is a compact, stout-hearted hero
						with a well-balanced audio which boasts a clear midrange and
						extended highs for a sound that is both articulate and pronounced.
						The analogue knobs allow you to fine tune the controls to your
						personal preferences while the guitar-influenced leather strap
						enables easy and stylish travel.
					</p>
					<div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
						<Image
							alt='3 seater'
							publicId='https://res.cloudinary.com/dbrqcasoo/image/upload/v1726858666/3-seater-no-ottoman_wznmtj.png'
							cloudName='dbrqcasoo'
						/>
						<Image
							alt='3 seater'
							publicId='https://res.cloudinary.com/dbrqcasoo/image/upload/v1726858666/3-seater-ottoman_f5mg07.png'
							cloudName='dbrqcasoo'
						/>
					</div>
				</div>
			</div>
			{/* separator */}
			<div className='border-t border-gray-300 my-8'></div>
			<div className='font-poppins'>
				<h2 className='text-center text-2xl font-semi-bold'>Related Products</h2>
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
			</div>
		</>
	);
};

export default Detail;
