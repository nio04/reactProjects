export default function TravelItem({ item, onDeleteItem, onToggleItem }) {
	return (
		<li
			key={item.key}
			className={item.packed ? 'item__packed' : ''}>
			<input
				className='item__checkbox'
				type='checkbox'
				value={item.packed}
				onChange={() => onToggleItem(item.id)}
			/>

			<span className={item.packed ? 'item__packed' : {}}>
				<span className='item__description'>{item.description}</span>
				<span className='item__quantity'>{item.quantity}</span>
			</span>

			<button
				className='item__discard'
				onClick={() => onDeleteItem(item.id)}>
				X
			</button>
		</li>
	);
}
