import { useState } from 'react';

type ChildOneProps = { value: boolean }

const ChildOne = ({ value }: ChildOneProps) => {
	return (
		<div className='component component--child'>
			<h2 className='component__title'>Child 1</h2>
			<p>
				Value is:
				{
					// Conditionnal rendering ternary operator
					// https://react.dev/learn/conditional-rendering#conditional-ternary-operator--
					<span className={'feedback feedback--' + (value ? 'positive' : 'negative')}>
						{ value.toString() }
					</span>
				}
			</p>
		</div>
	);
};

type ChildTwoProps = {
	hook: (value: boolean) => void,
	value: boolean
}

const ChildTwo = ({ hook, value }: ChildTwoProps) => {

	const handleClick = () => {
		hook(!value);
	};

	return (
		<div className='component component--child'>
			<h2 className='component__title'>Child 2</h2>
			<button onClick={handleClick}>Tooggle value</button>
		</div>
	);

};

const Parent = () => {

	// How to share data between components
	// https://react.dev/learn#sharing-data-between-components

	const [value, setValue] = useState(false);

	return (
		<div className='component component--parent'>
			<h1 className='component__title'>Component 2</h1>

			<p>The component Child 1 is updated because of the component Child two, and how to transmit the state.</p>

			<section className='component__section'>
				<ChildOne value={value} />
				<ChildTwo hook={setValue} value={value}/>
			</section>
		</div>
	);

};

export { Parent };