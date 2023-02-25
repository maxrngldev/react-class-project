// Components
import UserCard from './components/user-card';

import './App.css';

// Functional components JSX -> JS + HTML
function App() {
	const users = [
		{
			name: 'Max',
			age: 24,
		},
		{
			name: 'Jazmin',
			age: 25,
		},
		{
			name: 'Abdiel',
			age: 2,
		},
	];

	return (
		<div>
			<h1>My App</h1>

			<p>This is my first React app</p>

			{users.map((user, index) => (
				<UserCard key={index} name={user.name} age={user.age} />
			))}
		</div>
	);
}

export default App;
