import FormData from "../../components/Form/FormData";
import MainLayout from "../../components/MainLayout";
import styles from '../../styles/Home.module.scss';

export default function Home() {
	return (
		<MainLayout >
			<div className={styles.container}>
				<div className={styles.container__header} >
					<div className={styles.container__header_loadingIndikator}>
					</div>
				</div>
				<div className={styles.container__form}>
					<FormData />
				</div>
			</div>
		</MainLayout>
	);
};