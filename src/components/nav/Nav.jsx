import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/nav/logo.png';

const Nav = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<>
			<nav className="fixed w-full top-0 z-50 bg-white shadow-md max-w-screen-2xl font-poppins">
				<div className="flex justify-between items-center px-8 py-4">
					{/* nav logo */}
					<div className="flex items-center">
						<img src={logo} alt='logo' className="h-8"/>
					</div>

					{/* Hamburger menu button for mobile */}
					<div className="md:hidden lg:hidden">
						<button onClick={() => setIsMenuOpen(!isMenuOpen)} className="focus:outline-none lg:hidden">
							{/* Icon for hamburger menu */}
							{isMenuOpen ? (
								<span className='text-white'>react icon</span> // Close icon
							) : (
								<span className='text-white'>react icon</span> // Hamburger icon
							)}
						</button>
					</div>

					{/* nav links */}
					<div className={`flex-col md:flex-row md:flex space-y-4 md:space-y-0 md:space-x-6 ${isMenuOpen ? 'flex' : 'hidden'} md:flex`}>
						<Link className='hover:text-secondary hover:underline text-black' to='/home'>
							Home
						</Link>
						<Link className='hover:text-secondary hover:underline text-black' to='/shop'>
							Shop
						</Link>
						<Link className='hover:text-secondary hover:underline text-black' to='/about'>
							About
						</Link>
						<Link className='hover:text-secondary hover:underline text-black' to='/contact'>
							Contact
						</Link>
					</div>

					{/* nav icons */}
					<div className={`flex-row md:flex-row md:flex space-y-4 md:space-y-0 md:space-x-4 ${isMenuOpen ? 'flex' : 'hidden'} md:flex`}>
						<a href="#">Account Alert Icon</a>
						<a href="#">Search Icon</a>
						<a href="#">Heart Icon</a>
						<a href="#">Cart Icon</a>
					</div>
				</div>
			</nav>
		</>
	);
};

export default Nav;