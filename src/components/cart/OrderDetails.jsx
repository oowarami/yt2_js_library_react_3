import React, { useState, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useCart } from '../../context/CartContext';
import { useProducts } from '../customHooks/useProducts';
import { useNavigate } from 'react-router-dom';

const OrderDetails = () => {
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

	const OrderSchema = Yup.object().shape({
		payment: Yup.string().required('Payment method is required'),
	});

		// custom component for the error message
		const CustomError = (props) => (
			<div className='text-red-500 text-sm mt-1'>{props.children}</div>
		);

	return (
		<div className='px-16 overflow-x-auto'>
			<table className='table-auto'>
				<thead>
					<tr className='font-semibold'>
						<th className='py-10 text-left'>Product</th>
						<th className='py-10 text-right'>Subtotal</th>
					</tr>
				</thead>
				{cartItems.map((item) => {
					let product = showProducts.find((prod) => prod.id === item.id); // Find the product
					return product ? (
						<tbody>
							<tr>
								<td key={item.id} cl>
									{product.name} x {item.quantity}
								</td>
								<td>
									<span className='text-right'>{subtotal}</span>
								</td>
							</tr>
							<tr>
								<td>
									<span>Subtotal</span>
									<span className='pb-6 md:pb-8 text-right text-sm md:text-lg'>
										Rs. {subtotal}.000.000
									</span>
								</td>
							</tr>
							<tr>
								<td>
									<span>Total</span>
									<span className='pb-6 md:pb-8 text-right text-sm md:text-lg font-bold text-secondary'>
										Rs. {subtotal}.000.000
									</span>
								</td>
							</tr>
						</tbody>
					) : null; // Render nothing if product is not found
				})}
			</table>
			<div className='border-t border-gray-300 '></div>
			{/* Formik form */}
			<Formik
				initialValues={{
					payment: '',
				}}
				validationSchema={OrderSchema}
				onSubmit={(values, { resetForm }) => {
					toast.success('Your Order is successfully sent!');
					resetForm(); // Reset form after submission
					console.log(values);
				}}>
				{() => (
					<Form>
						<ul className='list-disc list-inside text-primary mb-2 md:mb-4 py-4'>
							<li className='text-md md:text-md font-normal'>
								Direct Bank Transfer
							</li>
						</ul>
						<p className='text-sm md:text-lg text-justify text-dark-gray'>
							Make your payment directly into our bank account. Please use your
							Order ID as the payment reference. Your order will not be shipped
							until the funds have cleared in our account.
						</p>

						<div className='flex flex-col gap-y-4'>
							<div className='mt-4'>
								<Field
									name='Payment Policy'
									type='radio'
									value='Direct bank transfer'
									className=''
								/>
								<label className='ml-2 md:ml-4'>Direct Bank Transfer</label>
							</div>

							<div>
								<Field
									name='Payment Policy'
									type='radio'
									value='Cash on delivery'
									className=''
								/>
								<label className='ml-2 md:ml-4'>Cash On Delivery</label>
							</div>
						</div>

						<p className='text-2.5 md:text-4 text-justify mt-2.5 md:mt-8'>
							Your personal data will be used to support your experience
							throughout this website, to manage access to your account, and for
							other purposes described in our{' '}
							<span className='font-bold'>privacy policy.</span>
						</p>

						{/* Custom styled error message */}
						<ErrorMessage name='email' component={CustomError} />

						<div className='flex justify-center'>
							<button
								type='submit'
								className='px-4 py-2 text-primary text-sm md:text-lg rounded-md w-fit bg-transparent md:w-80 border-primary border mt-4 p-2'>
								Place order
							</button>
						</div>
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
	);
};

export default OrderDetails;
