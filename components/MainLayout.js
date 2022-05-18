import Head from 'next/head'

//добавить размеры и стили общего окна и componentlayout
export default function MainLayout({ children }) {
	return (
		<>
			<Head>
				<title>Form Page</title>
			</Head>
			<main>{children}</main>
		</>
	)
};
