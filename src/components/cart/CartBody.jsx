import React, { useState, useEffect } from 'react';
import { Image } from 'cloudinary-react';
import { useCart } from '../../context/CartContext';
import { useProducts } from '../customHooks/useProducts';
import { useNavigate } from 'react-router-dom';
const CartBody = () => {
	const { cartItems, removeFromCart } = useCart(); // Get cart items from cart context
	const [subtotal, setSubtotal] = useState(0);
	const { showProducts } = useProducts(); // Get products from the custom hook
	const navigate = useNavigate();

	useEffect(() => {
		const calculateSubtotal = () => {
			let subtotal = 0;
			cartItems.forEach((item) => {
				let product = showProducts.find((prod) => prod.id === item.id); // Find the product by ID
				if (product) {
					subtotal +=
						item.quantity * parseFloat(product.price.replace(/[^\d.-]/g, '')); // Ensure price is a number
				}
			});
			setSubtotal(subtotal);
		};
		calculateSubtotal();
	}, [cartItems, showProducts]);

	// Handle product click and close the cart
	const handleProductClick = (productId) => {
		navigate(`/shop/${productId}`); // Navigate to product details page
	};

	// Navigate to the checkout page with the product's ID
	const handleCheckout = () => {
		navigate(`/checkout/`);
	};


	return (
		<div className='w-full font-poppins  mt-8 flex flex-col lg:flex-row gap-10 min-h-[500px] m-auto overflow-hidden'>
			{/* Left Column- Product Table */}
			<div className='w-full  flex flex-col overflow-x-auto lg:mx-16'>
				<table className='min-w-full table-auto'>
					<thead className='hidden lg:table-header-group'>
						{/* Display for large screen */}
						<tr className='bg-box-light lg:mx-16'>
							<th className='w-1/2 lg:w-1/3 px-6 py-2  text-left text-sm font-medium text-gray-900 '>
								Product
							</th>
							<th className='w-1/6 px-4 py-2 text-left text-sm font-medium text-gray-900'>
								Price
							</th>
							<th className='w-1/6 px-4 py-2 text-left text-sm font-medium text-gray-900'>
								Quantity
							</th>
							<th className='w-1/6 px-4 py-2 text-left text-sm font-medium text-gray-900'>
								Subtotal
							</th>
							<th className='w-1/12 px-4 py-2'></th>
						</tr>
					</thead>
						{cartItems.map((item) => {
							let product = showProducts.find((prod) => prod.id === item.id); // Find the product
							return product ? (
					<tbody>
								<tr>
									<td
										key={item.id}
										onClick={() => handleProductClick(product.id)}>
										<Image
											className='w-16 h-16 object-cover rounded mt-8'
											publicId={product.publicId}
											cloudName={product.cloudName}
											alt={product.name}
										/>
									</td>
									<td>
										<span>{product.price}</span>
									</td>
									<td>
										<span>{item.quantity} x{' '}</span>
									</td>
									<td>
										<span>Rs. {subtotal}.000.000</span>
									</td>
								</tr>
					</tbody>
							):null // Render nothing if product is not found
						})}
				</table>
			</div>

			{/* Cart Total */}
			<div className='colB w-full flex flex-col lg:w-[35%] bg-[#F9F1E7] lg:p-8'>
				<div className='mb-6 text-center'>
					<p className='font-bold text-lg'>Cart Totals</p>
				</div>
				<div className='flex flex-col lg:flex-row justify-between mb-4 px-2'>
					<p className='font-bold'>Subtotal</p>
					<p className='text-gray-500'> Rs. {subtotal}.000.000</p>
				</div>
				<div className='flex flex-col lg:flex-row justify-between mb-12 px-2'>
					<p className='font-bold'>Total</p>
					<p className='text-secondary font-bold'> Rs. {subtotal}.000.000</p>
				</div>
				<button className='w-full lg:w-2/3 mx-auto p-2 bg-black text-white rounded-lg font-semibold'
				onClick={handleCheckout}
				>
					Check Out
				</button>
			</div>
		</div>
	);
};

export default CartBody;
