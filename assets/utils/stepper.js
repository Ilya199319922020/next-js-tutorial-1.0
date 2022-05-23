import styles from '../../styles/Form.module.scss'

export function Stepper({ step }) {
	return (
		<div className={styles.stepper}>
			<ul className={styles.progressBar}>
				<li
					className={step >= 0
						? styles.active
						: ''}
				>
				</li>
				<li
					className={step === 1
						? styles.animation
						: step >= 1 ? styles.active : ''}
				>
				</li>
				<li
					className={step === 2
						? styles.animation
						: step >= 2 ? styles.active : ''}
				>
				</li>
			</ul>
		</div>
	);
};
