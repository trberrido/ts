import { useEffect, useState } from 'react';

const ComponentThree = () => {

	const [data, setData] = useState({
		expectLoading: false,
		isLoaded: false,
		payLoad: false
	});

	// useEffect(setup, dependencies?)
	// https://react.dev/reference/react/useEffect

	useEffect(() => {

		if (!data.expectLoading) return;

		fetch('https://jsonplaceholder.typicode.com/todos/1')
		.then(response => response.json())
		.then(json => {

			// spread syntax
			// https://react.dev/learn/updating-objects-in-state#copying-objects-with-the-spread-syntax
			setData({
				...data,
				isLoaded: true,
				payLoad: json
			});

		});

	// by adding data.expectLoading to the dependencies,
	// the effect will be triggered only when the value of data.expectLoading changes
	// see https://react.dev/reference/react/useEffect#examples-dependencies
	}, [data.expectLoading]);

	return (
		<div className='component component--parent'>
			<h1 className='component__title'>Component 3</h1>
			<p>How to fetch data from an external source</p>
			{
				!data.expectLoading ?
					<button onClick={() => setData({...data, expectLoading: true})}>Fetch data</button>
				:
					<>
						<p>
							Status:
							<span className={'feedback feedback--' + (data.isLoaded ? 'positive' : 'negative') }>
								{ data.isLoaded ? 'Loaded!' : 'Loading...' }
							</span>
						</p>
						<p> Fetched data:
							<pre>
								{
									// Conditionnal rendering && operator
									// https://react.dev/learn/conditional-rendering#logical-and-operator-
									data.isLoaded && JSON.stringify(data.payLoad)
								}
							</pre>
						</p>
					</>
			}

		</div>
	);

};

export default ComponentThree;