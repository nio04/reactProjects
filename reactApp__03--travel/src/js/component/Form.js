import { useState } from 'react';

export default function Form({ onAddItem }) {
	const [description, setDescription] = useState('');
	const [quantity, setQuantity] = useState(1);

	function handleSubmit(ev) {
		ev.preventDefault();

		if (!description) return;

		const newItem = {
			description,
			quantity,
			packed: false,
			id: Math.random() * 9000 + 1,
		};

		onAddItem(newItem);
		setDescription('');
		setQuantity(1);
	}

	return (
		<form
			className='form__container'
			onSubmit={handleSubmit}>
			<span>generate your desire items: </span>
			<select
				value={quantity}
				onChange={(ev) => setQuantity(Number(ev.target.value))}>
				{Array.from({ length: 15 }, (_, idx) => idx + 1).map((num) => (
					<option
						value={num}
						key={num}>
						{num}
					</option>
				))}
			</select>
			<input
				type='text'
				placeholder='items...'
				value={description}
				onChange={(ev) => setDescription(ev.target.value)}></input>
			<button>add</button>
		</form>
	);
}
