import React from 'react';
import './App.scss';

import ComponentOne from './components/One';
import { Parent as ComponentTwo } from './components/Two';

// generic reference : https://react.dev/learn/thinking-in-react

const App = () => (
	<>
		<ComponentOne />
		<ComponentTwo />
	</>
);

export default App;
