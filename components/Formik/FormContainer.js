import React, { useState } from 'react'
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FormikControl from './FormikControl';
import Image from 'next/image';
import profilePic from '../../public/name.png'

export default function FormikContainer() {

	return (
		<FormikStepper>
			<FormikStep validationSchema={Yup.object({
				surname: Yup.string().required('заполните поле'),
				firstname: Yup.string().required('заполните поле'),
				patronymic: Yup.string().required('заполните поле'),
			})}>
				<FormikControl control={'input'} type={'text'}
					placeholder={'Фамилия'} name={'surname'} />
				<FormikControl name={'firstname'} control={'input'} type={'text'}
					placeholder={'Имя'} />
				<FormikControl control={'input'} type={'text'}
					placeholder={'Отчество'} name={'patronymic'} />
			</FormikStep >

			<FormikStep validationSchema={Yup.object({
				phone: Yup.string().email('неправильная валидация email').required('заполните поле'),
				email: Yup.string().required('заполните поле'),
			})}>
				<FormikControl control={'input'} type={'phone'}
					placeholder={'+7 (999) 999 99 99'} name={'phone'} />
				<FormikControl name={'email'} control={'input'} type={'email'}
					placeholder={'email@example.com'} />
			</FormikStep>

			<FormikStep validationSchema={Yup.object({
				photo: ''
			})}>
				<Image src={profilePic} />
				<FormikControl control={'input'} type={'file'}
					name={'photo'} placeholder={'photo'} />
			</FormikStep>

		</FormikStepper>
	);
};



export function FormikStep({ children }) {
	return <>{children}</>
};


export function FormikStepper({ children, ...props }) {
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

	return (
		<Formik {...props}
			initialValues={initialValues}
			validationSchema={currentChild.props.validationSchema}

			onSubmit={async (values, helpers) => {
				if (step === childrenArray.length - 1) {
					await props.onSubmit(values, helpers)
				} else {
					setStep(s => s + 1);
				}
			}}>
			<Form autoComplete='off'>
				{currentChild}
				<button type='submit'>Далее</button>
			</Form>
		</Formik>);
};