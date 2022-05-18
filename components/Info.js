export function Info({ setIsInfo }) {

	const onIsInfo = () => {
		setIsInfo(false);
	}

	return (
		<>
			<div>info</div>
			<button onClick={onIsInfo}></button>
		</>)
};