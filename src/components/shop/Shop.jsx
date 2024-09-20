import React from 'react'
import ProductGridShop from '../products/ProductGridShop'
import ShopBanner from '../footer/shopBanner';

const Shop = () => {
	return (
		<div className='text-primary py-10 mx-20'>
			<ProductGridShop/>
			<ShopBanner/>
		</div>
	)
}

export default Shop