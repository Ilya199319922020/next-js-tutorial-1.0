import React from 'react';
import { Field, ErrorMessage, } from 'formik';
import TextError from './TextError';
import InputMask from 'react-input-mask';


export default function PhoneInput({ placeholder, name, ...props }) {
	return (
		<div className={'form-control'}>
			<Field
				name={name}
				id={name}
				render={(field) => (
					<InputMask
						{...field}
						mask="+7\ (999) 999-9999"
						placeholder="Номер телефона"
						type="text"
						alwaysShowMask="true"
					/>
				)}
				{...props}
			/>
			<ErrorMessage
				name={name} component={TextError}
			/>
		</div>
	);
};
