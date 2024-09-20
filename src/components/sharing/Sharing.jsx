import React from 'react';
// cloudinary
import { Image } from 'cloudinary-react';
// sharing images from cloudinary
import sharingData from '../../../data/sharing.json';
const Sharing = () => {
	let imageCollage = Object.entries(sharingData.sharing || []);
	return (
		<>
			<div className='flex items-center flex-col font-poppins'>
				<p>Share your setup with</p>
				<h2 className='font-bold text-3xl'>#FuniroFurniture</h2>
			</div>
			{/* <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-9 gap-4 py-6'>
				<Image
					alt={sharing.name}
					publicId={sharing.publicId}
					cloudName={sharing.cloudName}
					loading='lazy'
				/>
				<Image
					publicId={sharing.rectangle37.publicId}
					cloudName={sharing.rectangle37.cloudName}
					loading='lazy'
				/>
				<Image
					publicId={sharing.rectangle38.publicId}
					cloudName={sharing.rectangle38.cloudName}
					loading='lazy'
				/>
				<Image
					publicId={sharing.rectangle39.publicId}
					cloudName={sharing.rectangle39.cloudName}
					loading='lazy'
				/>
				<Image
					publicId={sharing.rectangle40.publicId}
					cloudName={sharing.rectangle40.cloudName}
					loading='lazy'
				/>
				<Image
					publicId={sharing.rectangle41.publicId}
					cloudName={sharing.rectangle41.cloudName}
					loading='lazy'
				/>
				<Image
					publicId={sharing.rectangle43.publicId}
					cloudName={sharing.rectangle43.cloudName}
					loading='lazy'
				/>
				<Image
					publicId={sharing.rectangle44.publicId}
					cloudName={sharing.rectangle44.cloudName}
					loading='lazy'
				/>
				<Image
					publicId={sharing.rectangle45.publicId}
					cloudName={sharing.rectangle45.cloudName}
					loading='lazy'
				/>
			</div> */}

			{/* {imageCollage.map(([key, image], index) => (
					<Image
						key={key}
						publicId={image.publicId}
						cloudName={image.cloudName}
						alt={`Collage ${index + 1}`}
						className={`object-cover w-full h-full ${
            // Make the layout more dynamic with different spans
            index === 0
              ? 'col-span-2 row-span-2'
              : index === 1
              ? 'col-span-2 row-span-1'
              : index === 2
              ? 'col-span-1 row-span-2'
              : index === 3
              ? 'col-span-3 row-span-2'
              : 'col-span-1 row-span-1'
          }`}
						loading='lazy'
					/> */}

			<div className='max-w-7xl mx-auto p-8'>
				<div className='grid grid-cols-9 grid-rows-2 gap-4'>
					{/* Left 2x2 grid */}
					<div className='col-span-2 row-span-2 grid grid-cols-2 grid-rows-2 gap-6'>
						{imageCollage.slice(0, 4).map(([key, image], index) => (
							<Image
								key={key}
								publicId={image.publicId}
								cloudName={image.cloudName}
								alt={`Collage ${index + 1}`}
								className='object-cover w-full h-full'
								loading='lazy'
							/>
						))}
					</div>

					{/* Center large image */}
					<div className='col-span-5 row-span-2'>	
							<Image
								key = {imageCollage.key = 'rectangle39'}
								id = {imageCollage.id = 4}
								publicId={imageCollage.publicId}
								cloudName={imageCollage.cloudName}
								alt='Center Image'
								className='object-cover w-full h-full'
								loading='lazy'
							/>
					</div>

					{/* Right 2x2 grid */}
					<div className='col-span-2 row-span-2 grid grid-cols-2 grid-rows-2 gap-6'>
						{imageCollage.slice(5).map(([key, image], index) => (
							<Image
								key={key}
								publicId={image.publicId}
								cloudName={image.cloudName}
								alt={`Collage ${index + 1}`}
								className='object-cover w-full h-full'
								loading='lazy'
							/>
						))}
					</div>
				</div>
			</div>

			
		</>
	);
};

export default Sharing;
