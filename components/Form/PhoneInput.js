import React from 'react';
import { Field, ErrorMessage, useFormikContext } from 'formik';
import TextError from './TextError';
import InputMask from 'react-input-mask';


export default function PhoneInput({ placeholder, name, ...props }) {
	const { setFieldValue } = useFormikContext();

	return (
		<div className={'form-control'}>
			<Field
				name={name}
				id={name}
				{...props}
			>
				{() => {
					return (
						<InputMask
							mask="+7\ (999) 999-99-99"
							placeholder="+7(999) 999-99-99"
							type="text"
							onBlur={(e) => { setFieldValue('phone', e.target.value.replace(/\D/g, '')) }}
						/>
					);
				}}
			</Field>
			<ErrorMessage
				name={name} component={TextError}
			/>
		</div>
	);
};
