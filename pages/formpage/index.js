import FormContainer from "../../components/Formik/FormContainer";
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
					{/* <FormikContainer /> */}
					<FormContainer/>
				</div>
			</div>
		</MainLayout>

	)
}