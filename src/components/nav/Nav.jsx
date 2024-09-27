import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// react icons for responsive view
import { FiMenu } from 'react-icons/fi';
import { IoClose } from 'react-icons/io5';
// nav images from cloudinary
import { nav } from '../../../data/nav.json';

// cloudinary
import { Image } from 'cloudinary-react';
import CartIcon from './cartIcon';

const Nav = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<>
			<nav className='fixed w-full top-0 z-50 bg-white shadow-md max-w-screen-2xl font-poppins'>
				<div className='flex justify-between items-center px-8 py-4'>
					{/* nav logo */}
					<div className='flex items-center'>
						<Image
							publicId={nav.logo.publicId}
							cloudName={nav.logo.cloudName}
							loading='lazy'
						/>
					</div>

					{/* Hamburger menu button for mobile (Top-right position in mobile view) */}
					<div className='absolute right-4 top-4 md:hidden lg:hidden'>
						<button
							onClick={() => setIsMenuOpen(!isMenuOpen)}
							className='focus:outline-none'>
							{/* Icon for hamburger menu */}
							{isMenuOpen ? (
								<span className='text-white text-2xl'>
									<IoClose />
								</span> // Close icon
							) : (
								<span className='text-white text-2xl'>
									<FiMenu />
								</span> // Hamburger icon
							)}
						</button>
					</div>

					{/*  nav links and icons for desktop and mobile views */}
					{/* nav links */}
					<div className='flex flex-row justify-center gap-x-6'>
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
						<div className='flex space-x-4'>
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
			</nav>
		</>
	);
};

export default Nav;
