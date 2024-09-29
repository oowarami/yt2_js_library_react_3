import React from 'react'
import Header from '../reusableComponents/header/Header'
import CheckoutBody from './CheckoutBody'
import ShopBanner from '../reusableComponents/ShopBanner'

const Checkout = () => {
	return (
		<>
			<Header title='Checkout' breadcrumb='Checkout'/>
			<CheckoutBody/>
			<ShopBanner/>
		</>
	)
}

export default Checkout