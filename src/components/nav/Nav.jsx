import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// react icons for responsive view
import { FiMenu} from 'react-icons/fi';
import { IoClose } from 'react-icons/io5';
// nav images
import logo from '../../assets/images/nav/logo.png';
import accountAlert from '../../assets/images/nav/accountAlert.svg';
import search from '../../assets/images/nav/search.svg';
import heart from '../../assets/images/nav/heart.svg';
import shoppingCart from '../../assets/images/nav/shoppingCart.svg';

const Nav = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<>
			<nav className='fixed w-full top-0 z-50 bg-white shadow-md max-w-screen-2xl font-poppins'>
				<div className='flex justify-between items-center px-8 py-4'>
					{/* nav logo */}
					<div className='flex items-center'>
						<img src={logo} alt='logo' className='h-8' />
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
					<div
						className={`flex-col md:flex-row md:flex items-center space-y-4 md:space-y-0 md:space-x-6 
					${isMenuOpen ? 'flex' : 'hidden'} md:flex`}>
						{/* nav links */}
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
							to='/contact'>
							Contact
						</Link>

						{/* nav icons */}
						<div className='flex space-x-4'>
							<img src={accountAlert} alt='Account' />
							<img src={search} alt='Search' />
							<img src={heart} alt='Wishlist' />
							<img src={shoppingCart} alt='Cart' />
						</div>
					</div>
				</div>
			</nav>
		</>
	);
};

export default Nav;
