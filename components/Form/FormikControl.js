import React from 'react';
import Input from './Input';
import PhoneInput from './PhoneInput';
import FormPhoto from './FormPhoto';

export default function FormikControl({ control, ...props }) {
	switch (control) {
		case 'input':
			return <Input {...props} />
		case 'phoneInput':
			return <PhoneInput {...props} />
			case 'photoInput':
			return <FormPhoto {...props} />

		default: return null
	};
};
