import React from 'react';
import ReactDOM from 'react-dom/client';

// import App from './App';
import './component/UI/base.scss';
import './component/UI/typhography.scss';

const pizzaData = [
	{
		name: 'pizza 01',
		photo: 'userOne.jpg',
		description: 'hellow! i am pizza number 0ne. And i am the best pizza',
		price: '10',
		soldOut: false,
	},
	{
		name: 'pizza 02',
		photo: 'userOne.jpg',
		description: 'hellow! i am pizza number two. And i am the best pizza',
		price: '20',
		soldOut: true,
	},
	{
		name: 'pizza 03',
		photo: 'userTwo.jpg',
		description: 'hellow! i am pizza number three. And i am the best pizza',
		price: '30',
		soldOut: false,
	},
	{
		name: 'pizza 04',
		photo: 'userOne.jpg',
		description: 'hellow! i am pizza number four. And i am the best pizza',
		price: '10',
		soldOut: true,
	},
	{
		name: 'pizza 05',
		photo: 'userTwo.jpg',
		description: 'hellow! i am pizza number five. And i am the best pizza',
		price: '20',
		soldOut: false,
	},
];

function Header() {
	return <h1 className="pizza--header">Pizza company</h1>;
}

function Menu() {
	const pizzas = pizzaData;
	const pizzaNums = pizzas.length;
	return (
		<div className="pizza--menu">
			<h2 className="pizza--menu__header">our menu</h2>
			{pizzaNums > 0 ? (
				<ul className="pizza__section--container">
					{pizzaData.map((el) => {
						return (
							<Pizza
								pizzaObj={el}
								key={el.name}
							/>
						);
					})}
				</ul>
			) : (
				'we are currently out of pizzas. sorry, come back later again please'
			)}
		</div>
	);
}

function Order({ openHour, closeHour }) {
	return (
		<div>
			<p>
				we are currently open for {openHour}:00 till {closeHour}:00
			</p>
			<button className="pizza--footer__btn">order</button>
		</div>
	);
}

function Footer() {
	const hour = new Date().getHours();
	const openHour = 0;
	const closeHour = 24;
	const isOpen = hour >= openHour && hour <= closeHour;

	return (
		<footer className="pizza--footer">
			{isOpen ? (
				<Order
					openHour={openHour}
					closeHour={closeHour}
				/>
			) : (
				<p>
					sorry. we are closed now. please visit us again at {openHour}:00 till{' '}
					{closeHour}:00
				</p>
			)}
		</footer>
	);
}

function Pizza({ pizzaObj }) {
	return (
		<li
			className={`pizza__section--el ${pizzaObj.soldOut ? 'pizza--sold-out' : ''}`}
		>
			<img
				className="pizza__section--img"
				src={pizzaObj.photo}
			/>
			<h2 className="pizza__section--name">{pizzaObj.name}</h2>
			<p className="pizza__section--description">{pizzaObj.description}</p>
			<span className="pizza__section--price">
				{pizzaObj.soldOut ? 'SOLD OUT' : pizzaObj.price}
			</span>
		</li>
	);
}

function App() {
	return (
		<div className="pizza--container">
			<Header />
			<Menu />
			<Footer />
		</div>
	);
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
