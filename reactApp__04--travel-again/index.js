import React from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
import './style.css';
import App from './component/app';

const root = createRoot(document.querySelector('#root'));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
