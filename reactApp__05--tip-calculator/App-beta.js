import { useState } from 'react';

export default function App() {
	const [friendsNumber, setFriendsNumber] = useState(2);
	const [bill, setBill] = useState('');
	const [feedback, setFeedback] = useState(0);
	const [feedbackFriend1, setFeedbackFriend1] = useState(0);
	const [feedbackFriend2, setFeedbackFriend2] = useState(0);
	const [feedbackFriend3, setFeedbackFriend3] = useState(0);
	const [feedbackFriend4, setFeedbackFriend4] = useState(0);
	const [feedbackFriend5, setFeedbackFriend5] = useState(0);
	let maxFriendsNumber = new Array(friendsNumber);
	let feedbackFriend = '';
	let setFeedbackFriend = '';

	function handleReset() {
		setFriendsNumber(1);
		setBill('');
		setFeedback('');
		setFeedbackFriend1('');
		setFeedbackFriend2('');
		setFeedbackFriend3('');
		setFeedbackFriend4('');
		setFeedbackFriend5('');
	}

	console.log(maxFriendsNumber);
	return (
		<div>
			<Logo />
			<FriendsNumber
				value={friendsNumber}
				onSetFriends={setFriendsNumber}
			/>
			<BillInfo
				bill={bill}
				onSetBill={setBill}
			/>

			<Feedback
				value={feedback}
				onFeedback={setFeedback}>
				how do you like the service?
			</Feedback>
			{/* FOR GENERATING FRIENDS */}
			{/* {maxFriendsNumber.map((_, idx) => {
				return (
					<Feedback
						value={feedbackFriend1}
						onFeedback={setFeedbackFriend1}
						key={idx}>
						how do your friend{idx + 1} liked the service?
					</Feedback>
				);
			})} */}

			{/* PLEASE LOOK OVER HERE */}
			{[...Array(friendsNumber)].map((_, idx) => (
				<Feedback
					value={`feedbackFriend${idx}`}
					onFeedback={`setFeedbackFriend${idx}`}
					key={idx}>
					how do your friend{idx + 1} liked the service?
				</Feedback>
			))}

			<TipCalculation
				bill={bill}
				tipUser={feedback}
				tipFriend1={feedbackFriend1}
				tipFriend2={feedbackFriend2}
				tipFriend3={feedbackFriend3}
				tipFriend4={feedbackFriend4}
				tipFriend5={feedbackFriend5}
			/>
			<ResetForm onReset={handleReset} />
		</div>
	);
}

function Logo() {
	return <h1 className='logo'>Tip Calculator</h1>;
}

function FriendsNumber({ value, onSetFriends }) {
	return (
		<div className='selecting-friends__container'>
			<label>how many friends?</label>
			<select
				value={value}
				onChange={(e) => onSetFriends(Number(e.target.value))}>
				<option value='1'>1</option>
				<option value='2'>2</option>
				<option value='3'>3</option>
				<option value='4'>4</option>
				<option value='5'>5</option>
			</select>
		</div>
	);
}

function BillInfo({ bill, onSetBill }) {
	return (
		<div className='bill-info'>
			<span>how much was the bill?</span>
			<input
				type='number'
				value={bill}
				onChange={(e) => onSetBill(Number(e.target.value))}
			/>
		</div>
	);
}

function Feedback({ value, onFeedback, children }) {
	return (
		<div className='feedback__container'>
			<span>{children}</span>
			<select
				value={value}
				className='select-form'
				onChange={(e) => onFeedback(Number(e.target.value))}>
				<option value='0'>Dissatisfied(0%)</option>
				<option value='5'>It was Okay(5%)</option>
				<option value='10'>It was Good(10%)</option>
				<option value='20'>Absolutely Amazing(20%)</option>
			</select>
		</div>
	);
}

function TipCalculation({ bill, tipUser, tipFriend }) {
	const tip = (bill * (tipUser + tipFriend)) / 2 / 100;
	if (!bill) return;
	return (
		<div className='tip-calc'>
			<h2>
				pay {bill + tip}$, (main bill: ${bill}, tip: ${tip})
			</h2>
		</div>
	);
}
function ResetForm({ onReset }) {
	return <button onClick={onReset}>Reset</button>;
}
