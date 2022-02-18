import { Routes, Route } from 'react-router-dom';
import Match from './components/Match/Match';
import PlayerProfile from './components/Pages/PlayerProfile';

function App() {
	return (
		<Routes>
			<Route path="/" element={<Match />} />
			<Route
				path="/player-profile/:playerId"
				element={<PlayerProfile />}
			/>
		</Routes>
	);
}

export default App;
