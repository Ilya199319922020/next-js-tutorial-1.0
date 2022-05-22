import styles from '../../styles/ErrorValidation.module.scss';

export default function TextError(props) {
	return (
		<div className={styles.error}>
			{props.children}
		</div>
	)
}
