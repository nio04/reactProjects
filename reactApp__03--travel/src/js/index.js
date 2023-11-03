import React from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';

import App from './component/app';

const root = createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);

if (module.hot) {
	module.hot.accept();
}
