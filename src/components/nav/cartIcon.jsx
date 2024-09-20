import React, {useState} from 'react';
import { useCart } from '../../context/CartContext'; // Import the CartContext
import CartDropdown from '../cartDropdown/cartDropdown';
// cloudinary
import { Image } from 'cloudinary-react';
// nav images from cloudinary
import { nav } from '../../../data/nav.json';
const CartIcon = () => {
	const { totalItems } = useCart(); // Get total items from CartContext
	const [cartOpen, setCartOpen] = useState(false);

  const toggleCart = () => {
    setCartOpen(!cartOpen);
  };

	return (
		<div className='relative'>
			<Image
				publicId={nav.cart.publicId}
				cloudName={nav.cart.cloudName}
				loading='lazy'
				alt='cart'
				onClick={toggleCart}
			/>
			{totalItems > 0 && (
				<span className='absolute top-0 right-0 bg-red-500 text-white rounded-full h-4 w-4 flex items-center justify-center'>
					{totalItems}
				</span>
			)}
			{/* Cart Dropdown */}
			<CartDropdown 
			cartOpen={cartOpen} 
			toggleCart={toggleCart} 

			/>
		</div>
	);
};

export default CartIcon;
