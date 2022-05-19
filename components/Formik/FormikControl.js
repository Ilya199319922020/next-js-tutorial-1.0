import React from 'react'
import Input from './Input'

export default function FormikControl({ control, ...props }) {
	switch (control) {
		case 'input':
			return <Input {...props} />
		default: return null
	}
}
