import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Nav from './components/nav/Nav';
import { Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Shop from './components/shop/Shop';
import Details from './components/details/Details';
import About from './components/about/About';
import Error from './components/error/Error';


function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<Nav />
			<Routes>
				<Route path='/home' element={<Home />} />
				<Route path='/shop' element={<Shop />} />
				{/* /shop/id*/}
				<Route path='/shop/:id' element={<Details />} />
				<Route path='/about' element={<About />} />
				{/* error page for any other route that is added that is not on our page */}
				<Route path='*' element={<Error />} />
			</Routes>
		</>
	);
}

export default App;
