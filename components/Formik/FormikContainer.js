import React, { useState } from 'react'
import { Formik, Form, Field, ErrorMessage, } from 'formik';
import * as Yup from 'yup';
import { PersonalInfo } from '../PersonalInfo';
import { ContactInfo } from '../ContactInfo';
import { Photo } from '../Photo';

export default function FormikContainer() {
	const [isLogin, setIsLogin] = useState(true);
	const [isInfo, setIsInfo] = useState(true);
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
		)
	};


	const onSubmit = (values) => {
		console.log(values)
	};

	const validationSchema = () => Yup.object({
		surname: Yup.string().required('заполните поле'),
		firstname: Yup.string().required('заполните поле'),
		patronymic: Yup.string().required('заполните поле'),
		phone: Yup.string().email('неправильная валидация email').required('заполните поле'),
		email: Yup.string().required('заполните поле'),
		photo: ''
	})
	return (
		<Formik
			initialValues={initialValues}
			onSubmit={onSubmit}
			validationSchema={validationSchema}
		>
			{formik => {
				return (
					<Form >
						{isLogin ? <PersonalInfo  setIsLogin={setIsLogin} />
							: isInfo ? <ContactInfo setIsInfo={setIsInfo} />
								: <Photo />}
						
					</Form>)
			}
			}
		</Formik>
	)
}
