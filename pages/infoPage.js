import MainLayout from "../components/MainLayout";
import styles from '../styles/Home.module.scss';

export default function infoPage() {
	return (
		<MainLayout>
			<div className={styles.message}>
				Готово!
			</div>
		</MainLayout>
	);
};
