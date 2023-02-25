import { useState, useEffect } from 'react';
import Navbar from './components/navbar';
import HomePage from './components/HomePage';
import WatchList from './components/WatchList';

const api_url = 'https://anime-watchlist-app-server.onrender.com';

function App() {
	const [animeList, setAnimeList] = useState([]);
	const [watchList, setWatchList] = useState([]);
	const [page, setPage] = useState('home');

	const getRandomAnimeData = async () => {
		const response = await fetch(`${api_url}/getRandomAnime`);
		const data = await response.json();
		setAnimeList(data);
	};

	useEffect(() => {
		getRandomAnimeData();
	}, []);

	const getWatchListAnimeData = async () => {
		const response = await fetch(`${api_url}/watchlist`);
		const data = await response.json();
		setWatchList(data);
		console.log(data);
	};

	useEffect(() => {
		getWatchListAnimeData();
	}, []);

	const handleAddToWatchList = async (anime) => {
		const { title, image_url, airing, synopsis, episodes, score } = anime;
		const review = '';
		try {
			const response = await fetch(api_url + '/watchlist', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					title,
					image_url,
					airing,
					synopsis,
					episodes,
					score,
					review,
				}),
			});
			const data = await response.json();
			setWatchList((prevWatchList) => [...prevWatchList, data]);
		} catch (error) {
			console.error(`Error adding to watchlist: ${error.message}`);
		}
	};

	return (
		<div>
			<Navbar
				getRandomAnimeData={getRandomAnimeData}
				setPage={setPage}
			/>
			{page === 'home' && (
				<HomePage
					animeList={animeList}
					handleAddToWatchList={handleAddToWatchList}
				/>
			)}
			{page === 'watchlist' && (
				<WatchList
					watchList={watchList}
					setWatchList={setWatchList}
				/>
			)}
		</div>
	);
}

export default App;
