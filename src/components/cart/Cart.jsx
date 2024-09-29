import React from 'react'
import Header from '../reusableComponents/header/Header'
import ShopBanner from '../reusableComponents/ShopBanner'
import CartBody from './CartBody'


const Cart = () => {
	return (
		<>
			<Header title='Cart' breadcrumb='Cart'/>
			<CartBody/>
			<ShopBanner/>
		</>
	)
}

export default Cart