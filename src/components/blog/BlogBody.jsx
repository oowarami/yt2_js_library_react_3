import React, { useState } from 'react';
import { useBlogs } from '../customHooks/useBlogs';
import { Image } from 'cloudinary-react';
import ReactPaginate from 'react-paginate';
const BlogBody = () => {
	const { showBlogs, recentBlogs } = useBlogs(); //Fetch all blogs
	const itemsPerPage = 3; // Number of blogs per page

	// State for pagination
	const [currentPage, setCurrentPage] = useState(0);

	// Calculate the blogs to display on the current page
	const offset = currentPage * itemsPerPage;
	const currentBlogs = showBlogs.slice(offset, offset + itemsPerPage);

	// Function to handle page change
	const handlePageChange = (selectedPage) => {
		setCurrentPage(selectedPage.selected);
		console.log('page change');
	};
	return (
		<>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 font-poppins'>
				{/* Left Column */}
				<div className='px-4 lg:px-16 lg:py-16 w-full'>
					<div className='grid grid-cols-1 gap-5'>
						{currentBlogs.map((blog) => {
							return (
								<div key={blog.id} className='p-4 w-full '>
									<div className='w-full'>
										<Image
											className='w-full'
											cloudName={blog.cloudName}
											publicId={blog.publicId}
											alt={blog.name}
											loading='lazy'
										/>
									</div>

									<div className='mt-4'>
										<div className='flex flex-col lg:flex-row gap-4'>
											<span className='flex items-center gap-2'>
												{/* add author icon */}
												{blog.author}
											</span>
											<span className='calendar flex items-center gap-2'>
												{/* add calendar icon */}
												{blog.date}
											</span>
											<span className='wood flex items-center gap-2'>
												{/* add tag icon */}
												{blog.tag}
											</span>
										</div>
										<h3 className='blog-title font-semibold mt-2'>
											{blog.heading}
										</h3>
										<p className='description mt-2 text-sm text-light-gray'>
											{blog.description}
										</p>
										<button className='underline bg-transparent '>
											Read More
										</button>
									</div>
								</div>
							);
						})}
					</div>

					{/* Pagination Controls */}
					<ReactPaginate
						className='font-poppins flex flex-row items-center justify-end w-full gap-2 py-16 '
						nextLabel={'Next'}
						breakLabel={'...'}
						pageCount={Math.ceil(showBlogs.length / itemsPerPage)} // Total pages
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
				</div>

				{/* Right column */}
				{/* Search Box */}
				<div className='w-full lg:px-[97px] px-4 border-slate-800 py-16'>
					<div className='search-box flex items-center gap-2 border p-2 rounded w-80'>
						<input
							type='text'
							name='search box'
							placeholder='Search...'
							className='w-full p-2 border-none bg-transparent focus:outline-none'
						/>
						{/* add search icon */}
					</div>

					{/* Categories and Recent Posts */}
					<div className='ml-4'>
						<h2 className='font-poppins text-2xl mt-10 mb-10'>Categories</h2>
						<div className='text-med-gray'>
							{/* Categories List */}
							<div className='flex justify-between mb-[30px]'>
								<p>Crafts</p>
								<p>2</p>
							</div>
							<div className='flex justify-between mb-[30px]'>
								<p>Design</p>
								<p>8</p>
							</div>
							<div className='flex justify-between mb-[30px]'>
								<p>Interior</p>
								<p>1</p>
							</div>
							<div className='flex justify-between mb-[30px]'>
								<p>Wood</p>
								<p>6</p>
							</div>
						</div>

						{/* Recent Posts */}
						<h2 className='w-[250px] mb-[20px] text-2xl font-poppins font-semibold'>
							Recent Posts
						</h2>
						{/* Recent Post List */}
						{recentBlogs.map((blog) => {
							return (
								<div key={blog.id} className='flex flex-row gap-x-8 '>
							
										<Image
											className='mt-8'
											cloudName={blog.cloudName}
											publicId={blog.publicId}
											alt={blog.name}
											loading='lazy'
										/>
								
									<div className='mt-10'>
										<h3 className='font-semibold'>{blog.heading}</h3>
										<span>{blog.date}</span>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</>
	);
};

export default BlogBody;
