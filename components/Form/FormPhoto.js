import Image from "next/image";
import { Field, ErrorMessage, useFormikContext } from 'formik';
import profilePic from '../../assets/image/ava.jpg';
import TextError from "./TextError";
import styles from '../../styles/Form.module.scss';

export default function FormPhoto({ name }) {
	const { setFieldValue } = useFormikContext();

	const handleChange = function loadFile(event) {
		if (event.target.files.length > 0) {
			const file = event.target.files[0];
			setFieldValue(file);
		}
	};
	return (
		<div >
			<Field name={name}
				type="file"
				onBlur={handleChange}
				id="upload"
				style={{ display: "none" }}
			/>
			<label htmlFor="upload">
				{
					<div className={styles.form__container_photo}>
						<Image
							width={100}
							height={100}
							border-radius={50}
							src={profilePic}
						/>
					</div>
				}
			</label>
			<label htmlFor="avatar" />
			<ErrorMessage
				name={name} component={TextError}
			/>
		</div>
	);
};

