import React, { useState } from 'react';
import { useProducts } from '../customHooks/useProducts';
import ReactPaginate from 'react-paginate';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProductCard from './ProductCard';


const ProductGridShop = () => {
	const { showProducts } = useProducts(); // Fetch all products
	const itemsPerPage = 8; // Number of products per page

	// State for pagination
	const [currentPage, setCurrentPage] = useState(0);

	// Calculate the products to display on the current page
	const offset = currentPage * itemsPerPage;
	const currentProducts = showProducts.slice(offset, offset + itemsPerPage);

	// Function to handle page change
	const handlePageChange = (selectedPage) => {
		setCurrentPage(selectedPage.selected);
	};

	return (
		<div className='flex flex-col items-center p-10 mx-auto max-w-screen-xl text-primary'>
			{' '}
			{/* Center the entire grid */}
			{/* Product Grid */}
			<div className='py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 font-poppins'>
				{currentProducts.map((product) => (
					<ProductCard key={product.id} product={product} />
				))}
			</div>
			{/* Pagination Controls */}
			<ReactPaginate
				className='font-poppins flex flex-row gap-x-6 '
				nextLabel={'Next'}
				breakLabel={'...'}
				pageCount={Math.ceil(showProducts.length / itemsPerPage)} // Total pages
				marginPagesDisplayed={2}
				pageRangeDisplayed={3}
				onPageChange={handlePageChange}
				containerClassName={'pagination'}
				activeClassName={'active'}
				pageClassName={'page-item'}
				pageLinkClassName={
					'page-link px-4 py-2 mx-1 bg-box-light rounded bg-box-light hover:bg-secondary hover:text-white text-black'
				}
				nextClassName={
					'next-item px-4 py-2 mx-1 bg-box-light rounded bg-box-light hover:bg-secondary hover:text-white text-black'
				}
				breakClassName={'break-item'}
			/>
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





export default ProductGridShop;
