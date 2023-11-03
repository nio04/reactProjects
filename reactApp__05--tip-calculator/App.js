import { useState } from 'react';

export default function App() {
	const [isShow, setisShow] = useState(false);
	const [bill, setBill] = useState('');
	const [feedbackUser, setFeedbackUser] = useState(0);
	const [feedbackFriend, setFeedbackFriend] = useState(0);

	function handleView(view) {
		setisShow((view) => !view);
	}

	function handleReset() {
		setBill('');
		setFeedbackUser('');
	}

	return (
		<>
			<TipCalculationParent>
				<AppView
					open={isShow}
					view={isShow}
					onView={handleView}
				/>

				{isShow && (
					<>
						<Logo open={isShow} />
						<BillInfo
							open={isShow}
							bill={bill}
							onSetBill={setBill}
						/>
						<Feedback
							open={isShow}
							value={feedbackUser}
							onFeedback={setFeedbackUser}>
							how do you like the service?
						</Feedback>
						<Feedback
							open={isShow}
							value={feedbackFriend}
							onFeedback={setFeedbackFriend}>
							how do your friend liked the service?
						</Feedback>
						<TipCalculation
							open={isShow}
							bill={bill}
							tipUser={feedbackUser}
							tipFriend={feedbackFriend}
						/>
						<ResetForm
							open={isShow}
							onReset={handleReset}
						/>
					</>
				)}
			</TipCalculationParent>
		</>
	);
}

function TipCalculationParent({ children }) {
	return <>{children}</>;
}

function AppView({ view, onView }) {
	return (
		<button
			className='app-view--btn'
			onClick={() => onView()}>
			{view ? '🔒' : '🔓'}
		</button>
	);
}

function Logo({ open }) {
	return open && <h1 className='logo'>Tip Calculator</h1>;
}

function BillInfo({ open, bill, onSetBill }) {
	return (
		open && (
			<div className='bill-info'>
				<span>how much was the bill?</span>
				<input
					type='number'
					value={bill}
					onChange={(e) => onSetBill(Number(e.target.value))}
				/>
			</div>
		)
	);
}

function Feedback({ open, value, onFeedback, children }) {
	return (
		open && (
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
		)
	);
}

function TipCalculation({ open, bill, tipUser, tipFriend }) {
	const tip = (bill * (tipUser + tipFriend)) / 2 / 100;
	if (!bill) return;
	return (
		open && (
			<div className='tip-calc'>
				<h2>
					pay {bill + tip}$, (main bill: ${bill}, tip: ${tip})
				</h2>
			</div>
		)
	);
}
function ResetForm({ open, onReset }) {
	return open && <button onClick={onReset}>Reset</button>;
}
