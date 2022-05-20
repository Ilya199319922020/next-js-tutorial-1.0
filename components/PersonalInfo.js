import FormikControl from "./Formik/FormikControl"

export function PersonalInfo({ setIsLogin }) {

	const onIsLogin = () => {
		setIsLogin(false)
	}



	return (
		<>
			<FormikControl control={'input'} type={'text'}
				placeholder={'Фамилия'} name={'surname'}  />
			<FormikControl name={'firstname'} control={'input'} type={'text'}
				placeholder={'Имя'} />
			<FormikControl control={'input'} type={'text'}
				placeholder={'Отчество'} name={'patronymic'} />
			<button type='submit' onClick={onIsLogin} >Далее</button>
		</>

	)
};