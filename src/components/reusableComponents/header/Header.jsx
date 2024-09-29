import React from 'react';
import { Image } from 'cloudinary-react';
import { useNavigate } from 'react-router-dom';

const Header = ({ title, breadcrumb }) => {
	return (
		<>
			<div className='relative h-70 w-full font-poppins'>
				{/* bg image */}
				<Image
					publicId='https://res.cloudinary.com/dbrqcasoo/image/upload/v1726867080/heroImage_abtoju.png'
					cloudName='dbrqcasoo'
					className='relative bg-cover py-8'
					loading='lazy'
				/>

				{/* text overlay */}
				<div className='absolute inset-0 flex flex-col items-center justify-center text-center text-primary bg-black bg-opacity-40'>
				<Image
					publicId='https://res.cloudinary.com/dbrqcasoo/image/upload/v1726867081/logoImage_jvyeec.svg'
					cloudName='dbrqcasoo'
					className=' '
					loading='lazy'
				/>
					{/* Title */}
					<h1 className='text-4xl font-semibold'>{title}</h1>
					{/* Breadcrumb */}
					<div className='text-sm mt-4'>
						<ul className='flex space-x-2'>
							<li className='hover:underline '>
								<a className='text-primary hover:text-secondary' href='/home'>Home</a>
							</li>
							<li>&gt;</li>
							<li>{breadcrumb}</li>
						</ul>
					</div>
				</div>
			</div>
		</>
	);
};

export default Header;
