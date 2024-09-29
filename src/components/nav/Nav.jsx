import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// react icons for responsive view
import { FiMenu } from 'react-icons/fi';
import { IoClose } from 'react-icons/io5';
// nav images from cloudinary
import { nav } from '../../../data/nav.json';

// cloudinary
import { Image } from 'cloudinary-react';
import CartIcon from '../reusableComponents/cartIcon';

const Nav = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<>
			<nav className='fixed w-full top-0 z-50 bg-white shadow-md max-w-screen-2xl font-poppins'>
				<div className='flex justify-between items-center px-8 py-4 max-w-screen-2xl mx-auto overflow-x-hidden'>
					{/* nav logo */}
					<div className='flex items-center'>
						<Image
							publicId={nav.logo.publicId}
							cloudName={nav.logo.cloudName}
							loading='lazy'
						/>
					</div>

					{/* Hamburger menu button for mobile (Top-right position in mobile view) */}
					<div className='absolute right-6 top-4 lg:hidden'>
						<button
							onClick={() => setIsMenuOpen(!isMenuOpen)}
							className='focus:outline-none'>
							{/* Icon for hamburger menu */}
							{isMenuOpen ? (
								<span className='text-white text-3xl'>
									<IoClose />
								</span> // Close icon
							) : (
								<span className='text-white text-3xl'>
									<FiMenu />
								</span> // Hamburger icon
							)}
						</button>
					</div>

					{/* Desktop nav links */}
					<div className='justify-center gap-x-6 hidden  md:flex md:flex-row space-x-6'>
						<Link
							className='hover:text-secondary hover:underline text-black'
							to='/home'>
							Home
						</Link>
						<Link
							className='hover:text-secondary hover:underline text-black'
							to='/shop'>
							Shop
						</Link>
						<Link
							className='hover:text-secondary hover:underline text-black'
							to='/about'>
							About
						</Link>
						<Link
							className='hover:text-secondary hover:underline text-black'
							to='/blog'>
							Blog
						</Link>
						<Link
							className='hover:text-secondary hover:underline text-black'
							to='/contact'>
							Contact
						</Link>
					</div>
					<div
						className={`flex-col md:flex-row md:flex items-center space-y-4 md:space-y-0 md:space-x-6 
					${isMenuOpen ? 'flex' : 'hidden'} md:flex`}>
						{/* nav icons */}
						<div className='hidden md:flex space-x-4'>
							<Image
								publicId={nav.account.publicId}
								cloudName={nav.account.cloudName}
								loading='lazy'
								alt='account'
							/>
							<Image
								publicId={nav.search.publicId}
								cloudName={nav.search.cloudName}
								loading='lazy'
								alt='search'
							/>
							<Image
								publicId={nav.heart.publicId}
								cloudName={nav.heart.cloudName}
								loading='lazy'
								alt='wishlist'
							/>

							<CartIcon />

							{/* Mobile menu dropdown with overlay */}
							{isMenuOpen && (
								<div className='md:hidden fixed inset-0 bg-black bg-opacity-50 z-40'>
									
									<div className='fixed inset-0 flex flex-col items-center justify-center bg-white space-y-6 z-50'>
										<Link
											onClick={() => setIsMenuOpen(false)}
											className='hover:text-secondary text-xl text-black'
											to='/home'>
											Home
										</Link>
										<Link
											onClick={() => setIsMenuOpen(false)}
											className='hover:text-secondary text-xl text-black'
											to='/shop'>
											Shop
										</Link>
										<Link
											onClick={() => setIsMenuOpen(false)}
											className='hover:text-secondary text-xl text-black'
											to='/about'>
											About
										</Link>
										<Link
											onClick={() => setIsMenuOpen(false)}
											className='hover:text-secondary text-xl text-black'
											to='/blog'>
											Blog
										</Link>
										<Link
											onClick={() => setIsMenuOpen(false)}
											className='hover:text-secondary text-xl text-black'
											to='/contact'>
											Contact
										</Link>

										{/* Mobile nav icons */}
										<div className='flex space-x-6'>
											<Image
												publicId={nav.account.publicId}
												cloudName={nav.account.cloudName}
												loading='lazy'
												alt='account'
											/>
											<Image
												publicId={nav.search.publicId}
												cloudName={nav.search.cloudName}
												loading='lazy'
												alt='search'
											/>
											<Image
												publicId={nav.heart.publicId}
												cloudName={nav.heart.cloudName}
												loading='lazy'
												alt='wishlist'
											/>
											<CartIcon />
										</div>
									</div>
								</div>
							)}
						</div>
					</div>
				</div>
			</nav>
		</>
	);
};

export default Nav;
