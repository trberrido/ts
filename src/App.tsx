import React from 'react';
import './App.scss';

import ComponentOne from './components/One';
import { Parent as ComponentTwo } from './components/Two';

const App = () => (
	<>
		<ComponentOne />
		<ComponentTwo />
	</>
);

export default App;
