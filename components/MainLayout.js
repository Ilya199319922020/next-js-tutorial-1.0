import Head from 'next/head'
import style from '../styles/MainLayout.module.scss'
//добавить размеры и стили общего окна и componentlayout
export default function MainLayout({ children }) {
	return (
		<div className={style.mainLayout}>
			<Head>
				<title>Form Page</title>
			</Head>
			<main className={style.mainLayout__item}>{children}</main>
		</div>
	)
};
