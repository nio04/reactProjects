export default function Footer({ item }) {
	const fullList = item.length;
	const packed = item.filter((item) => item.packed).length;
	const unPacked = item.filter((item) => item.packed);

	return (
		<footer className='footer__container'>
			<p>
				{fullList === 0
					? `add items for packing...`
					: fullList === packed
					? 'congratulations! you have complete your packinng'
					: packed > 0
					? `you packed ${packed}, yet to pack ${fullList - packed}`
					: ''}
			</p>
		</footer>
	);
}
