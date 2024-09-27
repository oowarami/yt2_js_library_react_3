import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Image } from 'cloudinary-react';
import { nav } from '../../../data/nav.json'; // nav images from cloudinary
import { useCart } from '../../context/CartContext';
import { useProducts } from '../customHooks/useProducts';

const CartDropdown = ({ cartOpen, toggleCart}) => {
  const navigate = useNavigate();
  const [subtotal, setSubtotal] = useState(0);
  const { showProducts } = useProducts(); // Get products from the custom hook
  const { cartItems, removeFromCart } = useCart(); // Get cart items from cart context


  useEffect(() => {
    const calculateSubtotal = () => {
      let subtotal = 0;
      cartItems.forEach((item) => {
        let product = showProducts.find((prod) => prod.id === item.id); // Find the product by ID
        if (product) {
          subtotal += item.quantity * parseFloat(product.price.replace(/[^\d.-]/g, '')); // Ensure price is a number
        }
      });
      setSubtotal(subtotal);
    };
    calculateSubtotal();
  }, [cartItems, showProducts]);

  // Handle product click and close the cart
  const handleProductClick = (productId) => {
    toggleCart(); // Close the cart
    navigate(`/shop/${productId}`); // Navigate to product details page
  };

  	// Navigate to the compare page with the product's ID
	const handleCompare = (productId) => {
		navigate(`/compare/${productId.id}`);
	};


  return (
    <div className='font-poppins '>
      {/* Overlay */}
      {cartOpen && (
        <div
          className='fixed inset-0 bg-black bg-opacity-50 z-40'
          onClick={toggleCart}></div>
      )}

      {/* Cart Sidebar */}
      <div
        className={`fixed top-0 right-0 w-1/3 h-3/4 bg-white shadow-lg transform transition-transform duration-300 z-50 ${
          cartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
        <div className='flex justify-between items-center p-4 border-b'>
          <h3 className='text-lg font-semibold'>Shopping Cart</h3>
          <button className='bg-transparent' onClick={toggleCart}>
            <Image
              publicId={nav.shoppingCart.publicId}
              cloudName={nav.shoppingCart.cloudName}
              loading='lazy'
            />
          </button>
        </div>

        <div className='flex flex-col h-3/4'>
          {/* Cart Items */}
          <div className='flex-1 overflow-y-auto p-4 space-y-4'>
            {cartItems.length === 0 ? (
              <p>Your cart is empty</p>
            ) : (
              cartItems.map((item) => {
                let product = showProducts.find((prod) => prod.id === item.id); // Find the product
                return product ? (
                  <div
                    key={item.id}
                    className='flex items-center justify-between cursor-pointer'
                    onClick={() => handleProductClick(product.id)}>
                    <Image
                      className='w-16 h-16 object-cover rounded'
                      publicId={product.publicId}
                      cloudName={product.cloudName}
                      loading='lazy'
                    />

                    <div className='flex-1 ml-4'>
                      <p className='font-medium'>{product.name}</p>
                      <p className='text-gray-600'>
                        {item.quantity} x{' '}
                        <span className='text-secondary font-bold'>
                          Rs. {product.price}
                        </span>
                      </p>
                    </div>
                    <button
                      className='bg-transparent'
                      onClick={(e) => {
                        e.stopPropagation(); // Prevent click event from propagating to parent div
                        removeFromCart(item.id); // Remove the item from the cart
                      }}>
                      <Image
                        publicId={nav.cancel.publicId}
                        cloudName={nav.cancel.cloudName}
                        loading='lazy'
                      />
                    </button>
                  </div>
                ) : null; // Render nothing if product is not found
              })
            )}
          </div>

          {/* Cart Footer */}
          <div className='p-6'>
            <div className='flex justify-between font-semibold mb-4'>
              <p>Subtotal</p>
              <p className='text-secondary font-bold '>Rs. {subtotal}</p>
            </div>
            <div className='border-t border-gray-300 my-8'></div>

            <div className='flex justify-center gap-x-2'>
              <button className=' bg-transparent text-primary py-2 border-primary rounded-full hover:bg-secondary transition duration-300'>
                Cart
              </button>
              <button className=' bg-transparent text-primary py-2 border-primary rounded-full hover:bg-secondary transition duration-300'>
                Checkout
              </button>
              <button className=' bg-transparent text-primary py-2 border-primary rounded-full hover:bg-secondary transition duration-300'
              onClick={handleCompare}
              >
                Comparison
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartDropdown;
