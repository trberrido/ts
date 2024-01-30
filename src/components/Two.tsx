import React, { useState } from 'react';

type ChildOneProps = { value: boolean }

const ChildOne = ({ value }: ChildOneProps) => {
	return (
			<div className='component component--child'>
				<h2 className='component__title'>Child 1</h2>
				<p>
					Value is:
					<span className={'feedback feedback--' + (value ? 'positive' : 'negative')}>
					{
						value
							? 'true'
							: 'false'
					}
					</span>
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

	const [value, setValue] = useState(false);

	return (
		<div className='component component--parent'>
			<h1 className='component__title'>Component 2</h1>

			<section className='component__section'>
				<ChildOne value={value} />
				<ChildTwo hook={setValue} value={value}/>
			</section>
		</div>
	);
};

export { Parent };