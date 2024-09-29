import React from 'react';
// cloudinary
import { Image } from 'cloudinary-react';
// sharing images from cloudinary
import {sharing} from '../../../data/sharing.json';
const Sharing = () => {
	return (
		<>
			<div className='flex items-center flex-col font-poppins'>
				<p>Share your setup with</p>
				<h2 className='font-bold text-3xl'>#FuniroFurniture</h2>
			</div>

		{/* The Grid */}
		<div className='lg:w-[90%]  grid  grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-2 justify-center place-items-center m-auto container'>
					{/* Left side */}
					<div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-2 justify-center place-items-center m-auto'>
						<div className='w-full'>
							<Image
								className='w-fit mb-4'
								publicId={sharing.rectangle36.publicId}
								cloudName={sharing.rectangle36.cloudName}
								loading='lazy'
							/>
							<Image
								className='w-fit '
								publicId={sharing.rectangle37.publicId}
								cloudName={sharing.rectangle37.cloudName}
								loading='lazy'
							/>
						</div>
						<div className='md:w-full w-fit'>
							<Image
								className='w-fit'
								publicId={sharing.rectangle38.publicId}
								cloudName={sharing.rectangle38.cloudName}
								loading='lazy'
							/>
							<Image
								className='w-fit '
								publicId={sharing.rectangle39.publicId}
								cloudName={sharing.rectangle39.cloudName}
								loading='lazy'
							/>
						</div>
					</div>
					{/* middle image */}
					<div className='w-full'>
						<Image
							className='lg:w-full w-fit px-16'
							publicId={sharing.rectangle40.publicId}
							cloudName={sharing.rectangle40.cloudName}
							loading='lazy'
						/>
					</div>
					{/* Right side */}
					<div className='grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-2 justify-center place-items-center m-auto'>
						<div className='lg:w-full w-fit'>
							<Image
								className='w-fit'
								publicId={sharing.rectangle41.publicId}
								cloudName={sharing.rectangle41.cloudName}
								loading='lazy'
							/>
							<Image
								className='w-fit mb-6 h-80'
								publicId={sharing.rectangle43.publicId}
								cloudName={sharing.rectangle43.cloudName}
								loading='lazy'
							/>
						</div>
						<div className='md:w-full w-fit'>
							<Image
								className='w-fit mb-4'
								publicId={sharing.rectangle44.publicId}
								cloudName={sharing.rectangle44.cloudName}
								loading='lazy'
							/>
							<Image
								className='md:w-full w-fit mb-6'
								publicId={sharing.rectangle45.publicId}
								cloudName={sharing.rectangle45.cloudName}
								loading='lazy'
							/>
						</div>
					</div>
				</div>	
		</>
	);
};

export default Sharing;
