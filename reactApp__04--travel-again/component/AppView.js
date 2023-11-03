export default function AppView({ isShow, onShow }) {
	return (
		<button
			className='app-show--btn'
			onClick={() => onShow()}>
			{isShow ? '🔒' : '🔓'}
		</button>
	);
}
