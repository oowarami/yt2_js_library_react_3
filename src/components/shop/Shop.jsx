import React from 'react'
import ProductGridShop from '../products/ProductGridShop'
import ShopBanner from '../footer/shopBanner';

const Shop = () => {
	return (
		<div className=''>
		<div className='text-primary py-10 mx-20'>
			<ProductGridShop/>
		</div>
			<ShopBanner/>
		</div>
	)
}

export default Shop