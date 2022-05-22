import React, { useRef, useState } from 'react'
import { Formik, Form } from 'formik';
import FormikControl from './FormikControl';
import Image from 'next/image';
import profilePic from '../../assets/image/name.png';
import styles from '../../styles/FormContainer.module.scss';
import { Stepper } from '../../assets/utils/stepper';
import { validateSchema } from '../../assets/Consts';

export default function FormData() {

	return (
		<FormikStepper>

			<FormikStep
				validationSchema={validateSchema.personal}
			>
				<FormikControl
					control={'input'}
					type={'text'}
					placeholder={'Фамилия'}
					name={'surname'}
				/>
				<FormikControl
					control={'input'}
					name={'firstname'}
					type={'text'}
					placeholder={'Имя'}
				/>
				<FormikControl
					control={'input'}
					type={'text'}
					placeholder={'Отчество'}
					name={'patronymic'}
				/>
			</FormikStep >

			<FormikStep
				validationSchema={validateSchema.contact}
			>
				<FormikControl
					control={'phoneInput'}
					name={'phone'}
					type={'phone'}
				/>
				<FormikControl
					control={'input'}
					name={'email'}
					type={'email'}
					placeholder={'email@example.com'}
				/>
			</FormikStep>

			<FormikStep
				validationSchema={validateSchema.photo}
			>
				<FormikControl
					control={'photoInput'}
					name={'photo'}
				/>

			</FormikStep>

		</FormikStepper>
	);
};

function FormikStep({ children }) {
	return <>
		{children}
	</>
};

function FormikStepper({ children, setFieldValue, ...props }) {
	const childrenArray = React.Children.toArray(children);
	const [step, setStep] = useState(0);
	const currentChild = childrenArray[step];

	const initialValues = () => {
		return (
			{
				surname: '',
				nafirstname: '',
				patronymic: '',
				phone: '',
				email: '',
				photo: ''
			}
		);
	};

	const onSubmit = async (values, helpers) => {
		// console.log(values)
		if (step === childrenArray.length - 1) {
			await props.onSubmit(values, helpers);
		} else {
			setStep(s => s + 1);
		}
	};

	return (<>
		<Stepper
			step={step}
		/>
		<Formik
			{...props}
			initialValues={initialValues}
			validationSchema={currentChild.props.validationSchema}
			onSubmit={onSubmit}
		>
			<Form
				autoComplete='off'
			>
				{currentChild}
				<button type='submit'>Далее</button>
			</Form>
		</Formik>
	</>);
};

