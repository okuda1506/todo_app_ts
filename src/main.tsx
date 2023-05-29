import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';

import { registerSW } from 'virtual:pwa-register';

const root = createRoot(document.getElementById('root') as Element);

root.render(
	<StrictMode>
		<App />
	</StrictMode>
);

registerSW();
