export default function Stats({ items }) {
	if (!items.length)
		return (
			<footer className='stats__container'>
				<em>you have yet to add packing items in your packing list</em>
			</footer>
		);
	const numItems = items.length;
	const numPacked = items.filter((item) => item.packed).length;
	const packagePercentage = Math.round((numPacked / numItems) * 100);

	return (
		<footer className='stats__container'>
			<em>
				{packagePercentage === 100
					? 'you packed everything & now ready to go '
					: `you have ${numItems} items on your list, and you already packed ${numPacked} =>
				(${packagePercentage}%)`}
			</em>
		</footer>
	);
}
