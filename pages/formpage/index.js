import FormData from "../../components/Form/FormData";
import MainLayout from "../../components/MainLayout";
import styles from '../../styles/Home.module.scss';

export default function Home() {

	return (
		<MainLayout >
			<div className={styles.container}>
				<div className={styles.container__header} >
				</div>
				<div>
					<FormData />
				</div>
			</div>
		</MainLayout>

	)
}