import React from 'react'
import { Image } from 'cloudinary-react'

const ShopBanner = () => {
	return (
		<>
	<div className='bg-box-light py-4 font-poppins mt-20 mb-0'>
			<div className='container mx-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 '>
				{/*  First Column */}
				<div className='font-bold flex flex-row gap-x-4'>
					<Image
						publicId= 'https://res.cloudinary.com/dbrqcasoo/image/upload/v1726850865/warranty_ykrzu6.svg'
						cloudName ='dbrqcasoo'
						alt= 'trophy'
					/>
					<div className='flex flex-col'>
					<span>High Quality</span>
					<span className='text-med-gray font-normal'>crafted from top materials</span>
					</div>
				</div>

				{/* Second Column: Links  */}
				<div className='font-bold flex flex-row gap-x-4'>
					<Image
						publicId= 'https://res.cloudinary.com/dbrqcasoo/image/upload/v1726850865/warranty_ykrzu6.svg'
						cloudName ='dbrqcasoo'
						alt= 'warranty'
					/>
					<div className='flex flex-col'>
					<span>Warranty Protection</span>
					<span className='text-med-gray font-normal'>Over 2 years</span>
					</div>
				</div>

				{/* Third Column: Help  */}
				<div className='font-bold flex flex-row gap-x-4'>
					<Image
						publicId= 'https://res.cloudinary.com/dbrqcasoo/image/upload/v1726850864/shipping_rntqes.svg'
						cloudName ='dbrqcasoo'
						alt= 'shipping'
					/>
					<div className='flex flex-col'>
					<span>Free Shipping</span>
					<span className='text-med-gray font-normal'>Order over 150 $</span>
					</div>
				</div>

				{/* Fourth Column: Newsletter  */}
				<div className='font-bold flex flex-row gap-x-4'>
					<Image
						publicId= 'https://res.cloudinary.com/dbrqcasoo/image/upload/v1726850864/customer-support_ynvvgr.svg'
						cloudName ='dbrqcasoo'
						alt= 'customer support'
					/>
					<div className='flex flex-col'>
					<span>24 / 7 Support</span>
					<span className='text-med-gray font-normal'>Dedicated support</span>
					</div>
				</div>
			</div>
		</div>
		</>
	)
}

export default ShopBanner;