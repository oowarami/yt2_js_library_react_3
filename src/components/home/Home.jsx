import React, { useState } from 'react';

// Home components
import Hero from '../hero/Hero';
import Browse from '../browse/Browse';
import Products from '../products/Products';
import Inspirations from '../inspirations/Inspirations';
import Sharing from '../sharing/Sharing';

const Home = () => {
	return (
		<>
			<Hero/>
			<Browse/>
			<Products/>
			<Inspirations/>
			<Sharing/>
		</>
	);
};

export default Home;
