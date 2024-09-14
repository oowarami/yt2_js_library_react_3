import React, { useState } from 'react';
import { Image } from 'cloudinary-react';
import { useProducts } from '../customHooks/useProducts';
import ReactPaginate from 'react-paginate';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom'; // React Router hook

const ProductGridShop = () => {
  const { products } = useProducts(); // Fetch all products
  const itemsPerPage = 8; // Number of products per page

  // State for pagination
  const [currentPage, setCurrentPage] = useState(0);

  // Calculate the products to display on the current page
  const offset = currentPage * itemsPerPage;
  const currentProducts = products.slice(offset, offset + itemsPerPage);

  // Function to handle page change
  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
  };

	

  return (
    <div className="flex flex-col items-center p-10 mx-auto max-w-screen-xl text-primary"> {/* Center the entire grid */}
      {/* Product Grid */}
      <div className="py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 font-poppins">
        {currentProducts.map((product, index) => (
					

          <ProductCard key={index} product={product} />
		
        ))}
      </div>

      {/* Pagination Controls */}
      <ReactPaginate
				className='font-poppins flex flex-row gap-x-6 '
        // previousLabel={'Previous'}
        nextLabel={'Next'}
        breakLabel={'...'}
        pageCount={Math.ceil(products.length / itemsPerPage)} // Total pages
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={handlePageChange}
        containerClassName={'pagination'}
        activeClassName={'active'}
        pageClassName={'page-item'}
        pageLinkClassName={'page-link px-4 py-2 mx-1 bg-gray-300 rounded bg-box-light hover:bg-secondary hover:text-white text-black'}
        // previousClassName={'prev-item px-4 py-2 mx-1 bg-gray-300 rounded bg-box-light hover:bg-secondary hover:text-white text-black'}
        nextClassName={'next-item px-4 py-2 mx-1 bg-gray-300 rounded bg-box-light hover:bg-secondary hover:text-white text-black'}
        breakClassName={'break-item'}
      />

      {/* Toastify container for notifications */}
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />
    </div>
  );
};

const ProductCard = ({ product }) => {
  const [liked, setLiked] = useState(false);

  // Function to toggle like status and show toast notification
  const handleLike = () => {
    setLiked(!liked);
    if (!liked) {
      toast.success('Product liked!');
    } else {
      toast.info('Like removed!');
    }
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
    <div className="relative group w-full max-w-xs overflow-hidden rounded-lg shadow-lg bg-box transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
      {/* Discount Badge */}
      {product.discount && (
        <span className="absolute right-1/4 h-12 w-12 text-center py-3 my-10 justify-end text-white bg-[#E97171] rounded-full">
          {product.discount}
        </span>
      )}
      {/* New Badge */}
      {product.new === true && (
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
        <button className="bg-white text-[#C1975B] font-semibold py-2 px-14 rounded-md mb-4">
          Add to cart
        </button>
        <div className="flex space-x-6 text-white">
          {/* Share Button */}
          <button
            className="bg-transparent  text-white ho font-semibold py-2 px-4   rounded"
            onClick={handleShare}
          >
            Share
          </button>

          {/* Like Button */}
          <button
            className={`bg-transparent  text-white  font-semibold py-2 px-4  rounded ${liked ? 'text-red-500' : 'text-white'}`}
            onClick={handleLike}
          >
            {liked ? 'Liked' : 'Like'}
          </button>

          {/* Compare Button */}
          <button
            className="bg-transparent  text-white font-semibold py-2 px-4  rounded"
          >
            Compare
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
            <span className="line-through text-light-gray">
              {product.oldPrice}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductGridShop;
