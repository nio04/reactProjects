import { useState } from 'react';
import TravelItem from './TravelItem';

export default function PackingList({ items, onDeleteItem, onToggleItem, onClear }) {
	const [sortBy, setSortBy] = useState('input');

	let sortedItems;

	if (sortBy === 'input') {
		sortedItems = items;
	}

	if (sortBy === 'description') {
		sortedItems = items
			.slice()
			.sort((a, b) => a.description.localeCompare(b.description));
	}

	if (sortBy === 'packed') {
		sortedItems = items.slice().sort((a, b) => Number(a.packed) - Number(b.packed));
	}

	return (
		<>
			<ul className='packingList__container'>
				{sortedItems.map((el) => (
					<TravelItem
						item={el}
						key={el.id}
						onDeleteItem={onDeleteItem}
						onToggleItem={onToggleItem}
					/>
				))}
			</ul>
			<div className='actions'>
				<select
					value={sortBy}
					onChange={(e) => setSortBy(e.target.value)}>
					<option value='input'>sort by input order</option>
					<option value='description'>sort by description</option>
					<option value='packed'>sort by packed status</option>
				</select>
				<button onClick={onClear}>clear list</button>
			</div>
		</>
	);
}
