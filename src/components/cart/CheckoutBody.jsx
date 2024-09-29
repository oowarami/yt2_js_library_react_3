import React, { useState, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useCart } from '../../context/CartContext';
import { useProducts } from '../customHooks/useProducts';
import { useNavigate } from 'react-router-dom';
import OrderDetails from './OrderDetails';

const CheckoutBody = () => {
	const { cartItems } = useCart(); // Get cart items from cart context
	const [subtotal, setSubtotal] = useState(0);
	const { showProducts } = useProducts(); // Get products from the custom hook
	const navigate = useNavigate();

	useEffect(() => {
		const calculateSubtotal = () => {
			let subtotal = 0;
			cartItems.forEach((item) => {
				let product = showProducts.find((prod) => prod.id === item.id); // Find the product by ID
				if (product) {
					subtotal +=
						item.quantity * parseFloat(product.price.replace(/[^\d.-]/g, '')); // Ensure price is a number
				}
			});
			setSubtotal(subtotal);
		};
		calculateSubtotal();
	}, [cartItems, showProducts]);


	// Formik and Yup component to validate the form
	const billingSchema = Yup.object().shape({
		firstName: Yup.string().required('First Name is required'),
		lastName: Yup.string().required('Last Name is required'),
		company: Yup.string(),
		countryRegion: Yup.string().required('Country Name is required'),
		streetAddress: Yup.string().required('Street/ Address is required'),
		town: Yup.string().required('Town is required'),
		province: Yup.string().required('Province is required'),
		zipCode: Yup.string().required('Zip Code is required'),
		phone: Yup.string().required('Phone is required'),
		email: Yup.string()
			.email('Invalid email address')
			.required('Email is required'),
		addInformation: Yup.string(),
	});

	

	// custom component for the error message
	const CustomError = (props) => (
		<div className='text-red-500 text-sm mt-1'>{props.children}</div>
	);
	return (
		<>
			<div className='font-poppins grid lg:grid-cols-2 grid-cols-1'>
				{/* Column one */}
				<div>
					<h3 className='text-2xl font-semibold py-10 px-16'>
						Billing details
					</h3>
					{/* Formik form */}
					<Formik
						initialValues={{
							firstName: '',
							lastName: '',
							company: '',
							countryRegion: '',
							streetAddress: '',
							town: '',
							province: '',
							zipCode: '',
							phone: '',
							email: '',
							addInformation: '',
						}}
						validationSchema={billingSchema}
						onSubmit={(values, { resetForm }) => {
							toast.success('Details submitted successfully!');
							resetForm(); // Reset form after submission
							console.log(values);
						}}>
						{() => (
							<Form className='flex flex-col mt-4 py-12 w-fit px-16'>
								<div className='flex flex-row gap-x-40 py-2'>
									<label className='font-semibold text-sm mt-2'>
										First Name
									</label>
									<label className='font-semibold text-sm mt-2'>
										Last Name
									</label>
								</div>
								<div className='flex flex-row gap-x-6'>
									<Field
										name='First name'
										type='name'
										className='bg-white border w-90 h-16 rounded border-light-gray p-2 mb-4 w-full min-h-[55px] px-3 py-2'
									/>
									<Field
										name='Last name'
										type='name'
										className='bg-white border w-90 h-16 rounded border-light-gray p-2 mb-4'
									/>
								</div>
								<label className='font-semibold text-sm mb-2'>
									Company Name (optional)
								</label>
								<Field
									name='Company name'
									type='text'
									className='bg-white border w-90 h-16 rounded border-light-gray p-2 mb-4'
								/>
								<label className='font-semibold text-sm mb-2'>
									Country / Region
								</label>
								<select
									name='Country Region'
									className='bg-white border w-90 h-16 rounded border-light-gray p-2 mb-4'>
									<option>select one</option>
									<option name='Nigeria'>Nigeria</option>
									<option name='United States'>United States</option>
									<option name='United Kingdom'>United Kingdom</option>
									<option name='Singapore'>Singapore</option>
								</select>

								<label className='font-semibold text-sm mb-2'>
									Street Address
								</label>
								<Field
									name='Street'
									type='text'
									className='bg-white border w-90 h-16 rounded border-light-gray p-2 mb-4'
								/>
								<label className='font-semibold text-sm mb-2'>Town/City</label>
								<Field
									name='Town/City'
									type='text'
									className='bg-white border w-90 h-16 rounded border-light-gray p-2 mb-4'
								/>

								<label className='font-semibold text-sm mb-2'>Province</label>
								<select
									name='Province'
									className='bg-white border w-90 h-16 rounded border-light-gray p-2 mb-4'>
									<option>select one</option>
									<option name='Western province'>Western Province</option>
									<option name='Southern province'>Southern Province</option>
								</select>

								<label className='font-semibold text-sm mb-2'>ZIP Code</label>
								<Field
									name='Zip code'
									type='text'
									className='bg-white border w-90 h-16 rounded border-light-gray p-2 mb-4'
								/>

								<label className='font-semibold text-sm mb-2'>
									Email address
								</label>
								<Field
									name='email'
									type='email'
									className='bg-white border w-90 h-16 rounded border-light-gray p-2 mb-4'
								/>

								<Field
									name='Additional information'
									type='Additional information'
									placeholder='Additional information'
									className='bg-white border w-90 h-16 rounded border-light-gray p-2 mb-4'
									style={{ textAlign: 'left', verticalAlign: 'top' }}
								/>
								{/* Custom styled error message */}
								<ErrorMessage name='email' component={CustomError} />
							</Form>
						)}
					</Formik>

				</div>
				{/* Column two */}
						<OrderDetails/>
			</div>
		</>
	);
};

export default CheckoutBody;
