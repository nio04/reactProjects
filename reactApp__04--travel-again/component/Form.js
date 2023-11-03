import { useState } from 'react';
import Button from './Button';

export default function Form({ quantity, onSetQuantity, onAddItem, children }) {
	const [itemName, setItemName] = useState('');

	function handleSubmit(ev) {
		ev.preventDefault();
		if (!itemName) return;

		setItemName('');
		onSetQuantity(1);
		const generatedItem = {
			itemName,
			quantity,
			packed: false,
			id: crypto.randomUUID(),
		};
		onAddItem(generatedItem);
	}

	return (
		<form
			className='form__container'
			onSubmit={handleSubmit}>
			<span className='form__msg'>generate items for pack</span>
			{children}
			<input
				type='text'
				className='form__input'
				placeholder='enter your items...'
				value={itemName}
				onChange={(e) => setItemName(e.target.value)}
			/>
			<Button
				className='btn'
				type='submit'>
				add
			</Button>
		</form>
	);
}
