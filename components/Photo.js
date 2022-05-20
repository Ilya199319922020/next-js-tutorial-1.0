import FormikControl from "./Formik/FormikControl"
import profilePic from '../public/name.png'
import Image from 'next/image'

export function Photo() {
	return (
		<div>
			<Image src={profilePic} />
			<FormikControl control={'input'} type={'file'}
				name={'photo'} placeholder={'photo'} />
			<button>Далее</button>
		</div>
	)
}
