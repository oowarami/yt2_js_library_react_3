import React from 'react';
import Header from '../header/Header';
import ShopBanner from '../footer/shopBanner';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { BsFillClockFill } from 'react-icons/bs';

const Contact = () => {
	// Formik and Yup component to validate the form
	const ContactSchema = Yup.object().shape({
		email: Yup.string().email('Invalid email').required('Required'),
		name: Yup.string()
			.min(2, 'Too Short!')
			.max(50, 'Too Long!')
			.required('Required'),
	});

	// custom component for the error message
	const CustomError = (props) => (
		<div className='text-red-500 text-sm mt-1'>{props.children}</div>
	);

	return (
		<>
			<Header title='Contact' breadcrumb='Contact' />
			<div className='font-poppins'>
				<div className='flex flex-col text-center py-8'>
					<h1 className='text-3xl font-semibold '>Get In Touch With Us</h1>
					<p className='text-med-gray py-2'>
						For More Information About Our Product & Services. Please Feel Free
						To Drop Us <br /> An Email. Our Staff Always Be There To Help You
						Out. Do Not Hesitate!
					</p>
				</div>
				<div className='grid grid-cols-1 lg:grid-cols-2'>
					{/* col 1 */}
					<div className='flex flex-col'>
						<div className='flex flex-col items-start px-60'>
						<div className='flex flex-row gap-x-8'>
							<FaMapMarkerAlt />
							<h3 className='font-semibold'>Address</h3>
						</div>
							<p className='px-12'>
								236 5th SE Avenue, New <br />
								York NY10000, United <br />
								States
							</p>
						</div>
						<div className='flex flex-col items-start px-60 py-6'>
						<div className='flex flex-row gap-x-8'>
							<FaPhoneAlt />
							<h3 className='font-semibold'>Phone</h3>
						</div>
							<p className='px-12'>
								Mobile: +(84) 546-6789 <br />
								Hotline: +(84) 456-6789
								<br />
							</p>
						</div>
						<div className='flex flex-col items-start px-60'>
							<div className='flex flex-row gap-x-8'>
								<BsFillClockFill />
								<h3 className='font-semibold my-auto'>Working Time</h3>
							</div>
							<p className='px-12'>
								Monday-Friday: 9:00 - 22:00 <br /> Saturday-Sunday: 9:00 - 21:00
							</p>
						</div>
					</div>
					{/* col 2 */}
					<div className='flex flex-col items-end px-36 py-2'>
						{/* Formik form */}
						<Formik
							initialValues={{ email: '' }}
							validationSchema={ContactSchema}
							onSubmit={(values, { resetForm }) => {
								toast.success('Messaged sent successfully!');
								resetForm(); // Reset form after submission
								console.log(values);
							}}>
							{({ errors, touched }) => (
								<Form className='flex flex-col mt-4 py-4'>
									<span className='font-semibold text-sm mb-2'>Your Name</span>
									<Field
										name='name'
										type='name'
										placeholder='Abc'
										className='bg-white border w-90 h-16 rounded border-light-gray p-2 mb-4'
									/>
									<span className='font-semibold text-sm mb-2'>
										Email address
									</span>
									<Field
										name='email'
										type='email'
										placeholder='Abc@def.com'
										className='bg-white border w-90 h-16 rounded border-light-gray p-2 mb-4'
									/>
									<span className='font-semibold text-sm mb-2'>Subject</span>
									<Field
										name='subject'
										type='textarea'
										placeholder='This is optional'
										className='bg-white border w-90 h-16 rounded border-light-gray p-2 mb-4 h-'
									/>
									<span className='font-semibold text-sm mb-2'>Message</span>
									<Field
										name='message'
										type='textarea'
										placeholder='This is optional'
										className='bg-white border w-90 h-36 rounded border-light-gray px-2 py-0 mb-4'
									/>

									{/* Custom styled error message */}
									<ErrorMessage name='email' component={CustomError} />

									<button
										type='submit'
										className='bg-white text-primary w-fit p-2 border-none hover:bg-[#A8774B] hover:text-white'>
										Submit
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
			</div>
			<ShopBanner />
		</>
	);
};

export default Contact;
