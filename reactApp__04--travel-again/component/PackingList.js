import { useState } from 'react';
import Button from './Button';
import Select from './Select';

export default function PackingList({
	items,
	onToggleItem,
	onDelete,
	sortedBy,
	children,
}) {
	let sortedItems;
	if (sortedBy === 'input') {
		sortedItems = items;
	} else if (sortedBy === 'description') {
		sortedItems = items.slice().sort((a, b) => a.itemName.localeCompare(b.itemName));
	} else {
		sortedItems = items.slice().sort((a, b) => a.packed - b.packed);
	}
	return (
		<section className='packing__container'>
			<ul>
				{sortedItems.map((item) => (
					<PackingItem
						item={item}
						onToggleItem={onToggleItem}
						onDelete={onDelete}
						key={crypto.randomUUID()}
					/>
				))}
			</ul>
			<section className='actions'>{children}</section>
		</section>
	);
}

function PackingItem({ item, onToggleItem, onDelete }) {
	return (
		<li className={item.packed ? 'line-through' : ''}>
			<input
				type='checkbox'
				value={item.packed}
				onChange={() => onToggleItem(item.id)}
			/>
			{item.quantity} {item.itemName}{' '}
			<Button
				className='sm-btn'
				onClick={() => onDelete(item.id)}>
				X
			</Button>
		</li>
	);
}
