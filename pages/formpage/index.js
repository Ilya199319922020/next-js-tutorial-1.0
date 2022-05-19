import FormikContainer from "../../components/Formik/FormikContainer";
import MainLayout from "../../components/MainLayout";
import styles from '../../styles/Home.module.scss';

export default function Home() {

	return (
		<MainLayout >
			<div className={styles.container}>
				<div className={styles.container__header} >
					{/* <ProgressBar isLogin={isLogin} isInfo={isInfo} /> */}
				</div>
				<div>
					<FormikContainer />
				</div>
			</div>
		</MainLayout>

	)
}