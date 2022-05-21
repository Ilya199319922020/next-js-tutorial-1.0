import React, { useState } from 'react'
import { Formik, Form, useFormikContext } from 'formik';
import * as Yup from 'yup';
import FormikControl from './FormikControl';
import Image from 'next/image';
import profilePic from '../../public/name.png';
import styles from '../../styles/FormContainer.module.scss'

export default function FormikContainer() {
	const validate = {
		personal: Yup.object({
			surname: Yup.string('неверный формат поля').required('заполните поле'),
			firstname: Yup.string('неверный формат поля').required('заполните поле'),
			patronymic: Yup.string('неверный формат поля').required('заполните поле'),
		}),

		contact: Yup.object().shape({

			phone: Yup.number('неверный формат поля')
				.when('email', {
					is: (email) => !email || email.length === 0,
					then: Yup.number('неверный формат поля').required('заполните поле')
				}),

			email: Yup.string('неверный формат поля').email('неправильная валидация email')
				.when('phone', {
					is: (phone) => !phone || phone.length === 0,
					then: Yup.string('неверный формат поля').email('неправильная валидация email').required('заполните поле'),
				}),
		}, ['phone', 'email']),

		photo: Yup.object({ photo: '' }),

	}
	return (
		<FormikStepper>

			<FormikStep
				validationSchema={validate.personal}
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
				validationSchema={validate.contact}
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
				validationSchema={validate.photo}
			>
				<Image src={profilePic} />
				<FormikControl
					control={'input'}
					type={'file'}
					name={'photo'}
					placeholder={'photo'}
				/>
			</FormikStep>

		</FormikStepper>
	);
};

export function FormikStep({ children }) {
	return <>{children}</>
};

export function Stepper({ step }) {
	return (
		<div className={styles.stepper}>
			<ul className={styles.progressBar}>
				<li className={step >= 0 ? styles.active : ''}></li>
				<li className={step >= 1 ? styles.active : ''}></li>
				<li className={step >= 2 ? styles.active : ''}></li>
			</ul>
		</div>
	);
};

export function FormikStepper({ children, setFieldValue, ...props }) {
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
		console.log(values)
		if (step === childrenArray.length - 1) {
			await props.onSubmit(values, helpers)
		} else {
			setStep(s => s + 1);
		}
	}

	return (<>
		<Stepper step={step} />
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

