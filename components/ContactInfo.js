import FormikControl from "./Formik/FormikControl"

export function ContactInfo({ setIsInfo }) {

	const onIsInfo = () => {
		setIsInfo(false)
	}

	return (
		<>
			<FormikControl control={'input'} type={'phone'}
				placeholder={'+7 (999) 999 99 99'} name={'phone'} />
			<FormikControl name={'email'} control={'input'} type={'email'}
				placeholder={'email@example.com'} />
			<button onClick={onIsInfo}>Далее</button>
		</>)
};