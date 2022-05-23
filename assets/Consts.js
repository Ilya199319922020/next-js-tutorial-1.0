import * as Yup from 'yup';

export const validateSchema = {
	personal: Yup.object({
		surname: Yup.string('неверный формат поля').required('заполните поле'),
		firstname: Yup.string('неверный формат поля').required('заполните поле'),
		patronymic: Yup.string('неверный формат поля').required('заполните поле'),
	}),

	contact: Yup.object().shape({

		phone: Yup.number('неверный формат поля')
			.when('email', {
				is: (email) => !email || email.length === 0,
				then: Yup.number('неверный формат поля').required('заполните поле')
			}),

		email: Yup.string('неверный формат поля').email('неправильная валидация email')
			.when('phone', {
				is: (phone) => !phone || phone.length === 0,
				then: Yup.string('неверный формат поля').email('неправильная валидация email').required('заполните поле'),
			}),
	}, ['phone', 'email']),

	photo: Yup.object(),
};