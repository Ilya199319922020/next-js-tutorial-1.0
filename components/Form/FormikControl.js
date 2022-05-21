import React from 'react';
import Input from './Input';
import PhoneInput from './PhoneInput';

export default function FormikControl({ control, ...props }) {
	switch (control) {
		case 'input':
			return <Input {...props} />
		case 'phoneInput':
			return <PhoneInput {...props} />
		default: return null
	};
};
