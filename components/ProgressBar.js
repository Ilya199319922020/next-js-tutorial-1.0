import styles from '../styles/ProgressBar.module.scss'

export default function ProgressBar({ isInfo, isLogin }) {
	return (
		<div className={styles.progress}>
			
			<div className={isLogin ? styles.progress__item : ''}></div>
			<div ></div>
			<div></div>

		</div>
	)
}
