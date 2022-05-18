export function Login({ setIsLogin }) {

	const onIsLogin = () => {
		setIsLogin(false);
	};

	return (
		<>
			<div>login</div>
			<button onClick={onIsLogin}></button>
		</>

	)
};