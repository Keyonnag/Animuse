import React from 'react';
import AnimeCard from './AnimeCard';

function Homepage(props) {
	const { animeList, handleAddToWatchList } = props;

	return (
		<div className='home-page container mt-4'>
			<div className='row row-cols-1 row-cols-md-3 g-4'>
				{animeList.map((anime) => (
					<AnimeCard
						key={anime.title}
						showAddButton={true}
						anime={anime}
						handleAddToWatchList={handleAddToWatchList}
					/>
				))}
			</div>
		</div>
	);
}

export default Homepage;
