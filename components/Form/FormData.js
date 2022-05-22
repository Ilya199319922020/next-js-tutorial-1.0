import React, { useState } from 'react';
import FormikControl from './FormikControl';
import styles from '../../styles/FormContainer.module.scss';
import { Formik, Form } from 'formik';
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
				<div className={styles.form}>
					<div className={styles.form__container}>
						{
							step === 0
								? <b>Личная информация</b>
								: step === 1
									? <b>контактная информация</b>
									: <b>Фотография</b>
						}
						{currentChild}
					</div>
					<button type='submit'>
						Далее
					</button>
				</div>
			</Form>
		</Formik>
	</>);
};

