import React, { useState }  from 'react';
import { useNavigate } from 'react-router-dom';
import { Image } from 'cloudinary-react';
import { toast } from 'react-toastify';
import { useCart } from '../../context/CartContext'; // Import CartContext

const ProductCard = ({ product }) => {
  const [liked, setLiked] = useState(false); // Manage individual product like state
  const { addToCart } = useCart(); // Use CartContext
  const navigate = useNavigate(); // For navigation

  // Function to handle adding a product to the cart
  const handleAddToCart = (product) => {
    addToCart(product); // Add product to cart
    toast.success('Product added to cart!');
  };

  // Function to handle sharing
  const handleShare = () => {
    navigator.clipboard
      .writeText(window.location.href)
      .then(() => {
        toast.success('Page URL copied!');
      })
      .catch(() => {
        toast.error('Failed to copy URL');
      });
  };

  // Function to toggle like status and show toast notification
  const handleLike = () => {
    setLiked(!liked);
    if (!liked) {
      toast.success('Product liked!');
    } else {
      toast.info('Like removed!');
    }
  };

  // Navigate to the compare page with the product's ID
  const handleCompare = () => {
    navigate(`/compare/${product.id}`); // Add product ID for navigation
  };

	// Navigate to the Details page when a card is clicked
	const handleDetail = () => {
		navigate(`/shop/${product.id}`); 
	}

  return (
    <div className="relative group w-full max-w-xs overflow-hidden rounded-lg shadow-lg bg-box transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
      {/* Discount Badge */}
      {product.discount && (
        <span className="absolute right-1/4 h-12 w-12 text-center py-3 my-10 justify-end text-white bg-[#E97171] rounded-full">
          {product.discount}
        </span>
      )}
      {/* New Badge */}
      {product.new && (
        <span className="absolute right-1/4 h-12 w-12 text-center py-3 my-10 justify-end text-white bg-[#2EC1AC] rounded-full">
          New
        </span>
      )}
      <Image
        className="w-full object-cover"
        publicId={product.publicId}
        cloudName={product.cloudName}
        loading="lazy"
      />

      {/* Overlay content */}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button
          className="bg-white text-[#C1975B] font-semibold py-2 px-14 rounded-md mb-4"
          onClick={() => handleAddToCart(product)}
        >
          Add to Cart
        </button>

        <div className="flex flex-col">
					<div className='flex space-x-4 text-white'>
						{/* Share Button */}
						<button
							className="flex items-center space-x-2 text-sm bg-transparent"
							onClick={handleShare}
						>
							Share
						</button>

						{/* Like Button */}
						<button
							className={`flex items-center space-x-2 text-sm bg-transparent ${
								liked ? 'text-red-500' : 'text-white'
							}`}
							onClick={handleLike}
						>
							{liked ? 'Liked' : 'Like'}
						</button>

						{/* Compare Button */}
						<button
							className="flex items-center space-x-2 text-sm bg-transparent"
							onClick={handleCompare}
						>
							Compare
						</button>
					</div>
					<button 
					className=" text-center text-sm bg-transparent rounded-md  text-white "
					onClick={handleDetail}>
					View
					</button>
        </div>
      </div>

      {/* Product Information */}
      <div className="flex flex-col px-4 py-2">
        <span className="font-semibold text-2xl">{product.name}</span>
        <span className="text-med-gray py-2">{product.description}</span>
        <div className="flex flex-row gap-x-2 py-3">
          <span className="font-semibold">{product.price}</span>
          {product.oldPrice && (
            <span className="line-through text-light-gray">{product.oldPrice}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
