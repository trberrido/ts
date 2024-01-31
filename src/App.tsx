import './App.scss';

import ComponentOne from './components/One';
import { Parent as ComponentTwo } from './components/Two';
import ComponentThree from './components/Three';

// generic reference : https://react.dev/learn/thinking-in-react

const App = () => (
	<>
		<ComponentOne />
		<ComponentTwo />
		<ComponentThree />
	</>
);

export default App;
