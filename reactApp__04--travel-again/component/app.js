import { useState } from 'react';

import TravelParentView from './TravelParentView';
import AppView from './AppView';
import Logo from './Logo';
import Form from './Form';
import PackingList from './PackingList';
import Footer from './Footer';
import Button from './Button';
import Select from './Select';

export default function App() {
	const [isShow, setIsShow] = useState(false);
	const [newItems, setNewItems] = useState([]);
	const [quantity, setQuantity] = useState(1);
	const [sortedBy, setSortedBy] = useState('');

	function handleShow() {
		setIsShow((show) => !show);
	}

	function handleAddItem(item) {
		setNewItems((items) => [...items, item]);
	}

	function handleToggleCheckedItem(id) {
		setNewItems((items) =>
			items.map((item) =>
				item.id === id ? { ...item, packed: !item.packed } : item
			)
		);
	}

	function handleDeleteItem(id) {
		setNewItems((items) => items.filter((item) => item.id !== id));
	}

	function handleClearList() {
		if (newItems.length > 0 && window.confirm('clear all  the items?')) {
			setNewItems([]);
		}
	}

	return (
		<>
			<AppView
				isShow={isShow}
				onShow={handleShow}
			/>
			<TravelParentView>
				{isShow && (
					<>
						<Logo />
						<Form
							quantity={quantity}
							onSetQuantity={setQuantity}
							onAddItem={handleAddItem}>
							<Select
								className='form__select'
								value={quantity}
								onChange={(num) => setQuantity(Number(num.target.value))}>
								{Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
									<option
										value={num}
										key={num}>
										{num}
									</option>
								))}
							</Select>
						</Form>
						<PackingList
							items={newItems}
							onToggleItem={handleToggleCheckedItem}
							onDelete={handleDeleteItem}
							sortedBy={sortedBy}
							onSetSortedBy={setSortedBy}>
							<Select
								value={sortedBy}
								onChange={(ev) => setSortedBy(ev.target.value)}>
								<>
									<option value='input'>sort by input</option>
									<option value='description'>sort by description</option>
									<option value='packed'>sort by packed</option>
								</>
							</Select>
							<Button
								className='btn'
								onClick={() => handleClearList()}>
								clear All list
							</Button>
						</PackingList>
						<Footer item={newItems} />
					</>
				)}
			</TravelParentView>
		</>
	);
}
