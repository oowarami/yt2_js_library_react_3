import React from 'react'
import Header from '../reusableComponents/header/Header';
import BlogBody from './BlogBody';
import ShopBanner from '../reusableComponents/ShopBanner';


const Blog = () => {
	return (
		<>
			<Header title='Blog' breadcrumb='Blog'/>
			<BlogBody/>
			<ShopBanner/>
		</>
	)
}

export default Blog