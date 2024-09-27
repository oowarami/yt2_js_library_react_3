import React from 'react';
// import { useEmail } from '../customHooks/useEmail';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Formik and Yup component to validate the form
const SubscribeSchema = Yup.object().shape({
	email: Yup.string().email('Invalid email').required('Required'),
});

// custom component for the error message
const CustomError = (props) => (
	<div className='text-red-500 text-sm mt-1'>{props.children}</div>
);

const Footer = () => {
	return (
		<footer className='bg-white  font-poppins'>
		<div className='border-t border-gray-300 '></div>
			<div className='container mx-auto grid grid-cols-1 md:grid-cols-4 gap-x-6'>
				{/*  First Column: Company Info  */}
				<div className='py-4 gap-y-6'>
					<h2 className='text-lg font-bold'>Funiro.</h2>
					<p className='text-gray-500 py-6'>
						400 University Drive Suite 200 Coral Gables,
						<br />
						FL 33134 USA
					</p>
				</div>

				{/* Second Column: Links  */}
				<div className='py-4 gap-y-6'>
					<h3 className='text-gray-500 font-semibold'>Links</h3>
					<ul className='py-6'>
						<li>
							<a href='#' className='text-black hover:underline'>
								Home
							</a>
						</li>
						<li>
							<a href='#' className='text-black hover:underline'>
								Shop
							</a>
						</li>
						<li>
							<a href='#' className='text-black hover:underline'>
								About
							</a>
						</li>
						<li>
							<a href='#' className='text-black hover:underline'>
								Contact
							</a>
						</li>
					</ul>
				</div>

				{/* Third Column: Help  */}
				<div className='py-4 gap-y-6'>
					<h3 className='text-gray-500 font-semibold'>Help</h3>
					<ul className='py-6'>
						<li>
							<a href='#' className='text-black hover:underline'>
								Payment Options
							</a>
						</li>
						<li>
							<a href='#' className='text-black hover:underline'>
								Returns
							</a>
						</li>
						<li>
							<a href='#' className='text-black hover:underline'>
								Privacy Policies
							</a>
						</li>
					</ul>
				</div>

				{/* Fourth Column: Newsletter  */}
				<div className='py-4 gap-y-6'>
					<h3 className='text-gray-500 font-semibold'>Newsletter</h3>
					{/* Formik form */}
					<Formik
						initialValues={{ email: '' }}
						validationSchema={SubscribeSchema}
						onSubmit={(values, { resetForm }) => {
							toast.success('Subscribed successfully!');
							resetForm(); // Reset form after submission
							console.log(values);
						}}>
						{({ errors, touched }) => (
							<Form className='flex flex-col mt-4 py-6'>
								<Field
									name='email'
									type='email'
									placeholder='Enter Your Email Address'
									className='bg-white border border-gray-300 p-2 mb-4'
								/>
								
								{/* Custom styled error message */}
								<ErrorMessage name='email' component={CustomError} />

								<button
									type='submit'
									className='bg-white text-primary w-fit p-2 border-none hover:bg-[#A8774B] hover:text-white'>
									Subscribe
								</button>
							</Form>
						)}
					</Formik>

					{/* Toastify Container */}
					<ToastContainer
						position='top-right'
						autoClose={3000}
						hideProgressBar={false}
					/>
				</div>
			</div>

			{/*  Bottom Divider Line  */}
			<div className='w-full border-t border-gray-300 mt-8'></div>

			{/* Footer Bottom Text  */}
			<div className='text-center py-4 text-gray-500 text-sm'>
				© 2023 Funiro. All rights reserved.
			</div>
		</footer>
	);
};

export default Footer;
