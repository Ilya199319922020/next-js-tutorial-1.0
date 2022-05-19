import React from 'react'
import { Field, ErrorMessage, } from 'formik';
import TextError from './TextError';

export default function Input({ placeholder, name, ...props }) {
	return (
		<div className={'form-control'}>
			<Field placeholder={placeholder} id={name} name={name}{...props} />
			<ErrorMessage name={name} component={TextError} />
		</div>
	)
}
