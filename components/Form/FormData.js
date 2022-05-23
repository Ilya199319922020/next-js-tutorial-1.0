import React, { useEffect, useState } from 'react';
import FormikControl from './FormikControl';
import styles from '../../styles/Form.module.scss';
import { Formik, Form } from 'formik';
import { Stepper } from '../../assets/utils/stepper';
import { validateSchema } from '../../assets/Consts';
import { useRouter } from 'next/router';

export default function FormData() {

	return (
		<FormikStepper>
			<FormikStep
				validationSchema={validateSchema.personal}
			>
				<FormikControl
					control={'input'}
					type={'text'}
					name={'surname'}
					placeholder={'Фамилия'}
				/>
				<FormikControl
					control={'input'}
					type={'text'}
					name={'firstname'}
					placeholder={'Имя'}
				/>
				<FormikControl
					control={'input'}
					type={'text'}
					name={'patronymic'}
					placeholder={'Отчество'}
				/>
			</FormikStep >
			<FormikStep
				validationSchema={validateSchema.contact}
			>
				<FormikControl
					control={'phoneInput'}
					type={'phone'}
					name={'phone'}
				/>
				<FormikControl
					control={'input'}
					type={'email'}
					name={'email'}
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

function FormikStepper({ children, ...props }) {
	const childrenArray = React.Children.toArray(children);
	const [step, setStep] = useState(0);
	const currentChild = childrenArray[step];
	const [message, setMessage] = useState(null);
	const router = useRouter();

	const initialValues = () => {
		return (
			{
				surname: '',
				nafirstname: '',
				patronymic: '',
				phone: '',
				email: '',
				photo: '',
			}
		);
	};

	const setData = async (values) => {
		const response = await fetch('/api/formPage', {
			method: 'POST',
			body: JSON.stringify(values),
			headers: {
				'Content-Type': 'application/json'
			}
		});
		const data = await response.json();
		setMessage(data.status);

	};

	const onSubmit = (values, helpers) => {
		if (step === childrenArray.length - 1) {
			setData(values);
		} else {
			setStep(s => s + 1);
		}
	};

	useEffect(() => {
		if (message === 1) {
			router.push('/infoPage');
		}
	}, [message]);

	return (
		<>
			<Formik
				{...props}
				initialValues={initialValues}
				validationSchema={currentChild.props.validationSchema}
				onSubmit={onSubmit}
			>
				<Form autoComplete='off'>
					<div className={styles.form}>
						<Stepper
							step={step}
						/>
						<div className={styles.form__container}>
							<HeaderText
								step={step}
							/>
							{currentChild}
						</div>
						<button type='submit'>
							Далее
						</button>
					</div>
				</Form>
			</Formik>
		</>
	);

};

function HeaderText({ step }) {
	return (
		<>
			{
				step === 0
					? <b>Личная информация</b>
					: step === 1
						? <b>Контактная информация</b>
						: <b>Фотография</b>
			}
		</>
	);
};
