import React from 'react';

const api_url = 'https://anime-watchlist-app-server.onrender.com';

function WatchList({ watchList, setWatchList }) {
	const handleDelete = async (id) => {
		try {
			const response = await fetch(api_url + '/watchlist/' + id, {
				method: 'DELETE',
			});
			if (response.ok) {
				setWatchList((prevWatchList) =>
					prevWatchList.filter((anime) => anime.id !== id)
				);
			}
		} catch (error) {
			console.error(`Error deleting from watchlist: ${error.message}`);
		}
	};

	const handleUpdateReview = async (id, newReview, anime) => {
		console.log(anime.image_url);
		try {
			const response = await fetch(api_url + '/watchlist/' + id, {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					title: anime.title,
					image_url: anime.image_url,
					airing: anime.airing,
					synopsis: anime.synopsis,
					episodes: anime.episodes,
					score: anime.score,
					review: newReview,
				}),
			});
			const data = await response.json();
			setWatchList((prevWatchList) =>
				prevWatchList.map((anime) => (anime.id === id ? data : anime))
			);
		} catch (error) {
			console.error(`Error updating review: ${error.message}`);
		}
	};

	return (
		<div className='container mt-4'>
			<div className='row row-cols-1 row-cols-md-3 g-4'>
				{watchList.map((anime) => (
					<div
						key={anime.id}
						className='col'
					>
						<div className='card h-100'>
							<img
								src={anime.image_url}
								className='card-img-top'
								alt={anime.title}
							/>
							<div className='card-body d-flex flex-column'>
								<h5 className='card-title'>{anime.title}</h5>
								<p className='card-text'>{anime.synopsis}</p>
								<p className='card-text mb-0'>
									Episodes: {anime.episodes} | Score: {anime.score}
								</p>
								<form
									className='mt-auto mb-3'
									onSubmit={(event) => {
										event.preventDefault();
										const newReview = event.target.review.value;
										handleUpdateReview(anime.id, newReview, anime);
									}}
								>
									<div className='input-group'>
										<input
											type='text'
											className='form-control'
											placeholder='Add a review'
											name='review'
											defaultValue={anime.review}
										/>
										<button
											className='btn btn-outline-secondary'
											type='submit'
										>
											Update
										</button>
									</div>
								</form>
								<button
									className='btn btn-danger'
									onClick={() => handleDelete(anime.id)}
								>
									Delete
								</button>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default WatchList;
