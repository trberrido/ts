import { useState } from 'react';

const ComponentOne = () => {

	// use State
	// https://react.dev/reference/react/useState
	//
	// note about destructuring assignment: `useState()` returns an array with two elements
	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
	const [count, setCount] = useState(0);

	const handleClick = () => {
		setCount(count + 1);
	};

	return (
		<div className='component component--parent'>
			<h1 className='component__title'>Component 1</h1>
			<p>Where the state is modified in the component itself.</p>
			<p>Count: {count}</p>
			<button onClick={handleClick}>Increment count</button>
		</div>
	);
}

export default ComponentOne;