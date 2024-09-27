import { Suspense, lazy } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Nav from './components/nav/Nav';
import Footer from './components/footer/Footer';
import { Routes, Route } from 'react-router-dom';
const Home = lazy(() => import('./components/home/Home'));
const Shop = lazy(() => import('./components/shop/Shop'));
const Details = lazy(() => import('./components/details/Details'));
const About = lazy(() => import('./components/about/About'));
const Contact = lazy(() => import('./components/contact/Contact'));
const Error = lazy(() => import('./components/error/Error'));
const Compare = lazy(() => import('./components/compare/Compare'));
const Blog = lazy(() => import('./components/blog/Blog'));
import { CartProvider } from './context/CartContext';

function App() {
	return (
		<>
			<CartProvider>
				<Nav />
				<Suspense fallback={<div>loading...</div>}>
					<Routes>
						<Route path='/home' element={<Home />} />
						<Route path='/shop' element={<Shop />} />
						{/* /shop/id*/}
						<Route path='/shop/:id' element={<Details />} />
						<Route path='/about' element={<About />} />
						<Route path='/blog' element={<Blog />} />
						<Route path='/contact' element={<Contact />} />
						{/* /compare/id*/}
						<Route path='/compare/:productId' element={<Compare />} />

						{/* error page for any other route that is added that is not on our page */}
						<Route path='*' element={<Error />} />
					</Routes>
				</Suspense>
				<Footer />
			</CartProvider>
		</>
	);
}

export default App;
