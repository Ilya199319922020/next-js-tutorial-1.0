import Image from "next/image";
import { Field, ErrorMessage, useFormikContext } from 'formik';
import profilePic from '../../assets/image/name.png';
import TextError from "./TextError";

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
			<Field name={name} type="file" onChange={handleChange} id="upload" accept="image/*" style={{ display: "none" }} />
			<label htmlFor="upload">
				{
					<Image
						src={profilePic}
					/>
				}
			</label>
			<label htmlFor="avatar" />
			<ErrorMessage
				name={name} component={TextError}
			/>
		</div>
	);
};