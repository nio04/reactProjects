import { useState } from 'react';
import './styles.css';

const msg = [
	'get to know  react',
	'apply for react job',
	'icncome a lot by doing react related job',
];

export default function App() {
	const [step, setStep] = useState(1);
	function handlerPrevios() {
		if (step > 1) setStep(step - 1);
	}

	function handlerNext() {
		if (step < msg.length) setStep(step + 1);
	}
	return (
		<div className="step--container">
			<div className="step__number--container">
				<div className={step >= 1 ? 'active' : ''}>1</div>
				<div className={step >= 2 ? 'active' : ''}>2</div>
				<div className={step >= 3 ? 'active' : ''}>3</div>
			</div>
			<p className="step__msg">
				step {step} : {msg[step - 1]}
			</p>
			<div className="step__btn--container">
				<div
					className="step__btn"
					onClick={handlerPrevios}
				>
					Previous
				</div>
				<div
					className="step__btn"
					onClick={handlerNext}
				>
					Next
				</div>
			</div>
		</div>
	);
}
