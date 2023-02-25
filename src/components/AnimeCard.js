import React, { useState } from 'react';

function AnimeCard({
	anime,
	handleAddToWatchList,
	handleUpdateReview,
	handleDeleteAnime,
	showAddButton,
	showUpdateButton,
	showDeleteButton,
}) {
	const [review, setReview] = useState('');

	const handleReviewChange = (event) => {
		setReview(event.target.value);
	};

	const handleAddClick = () => {
		handleAddToWatchList(anime);
	};

	const handleUpdateClick = () => {
		handleUpdateReview(anime.title, review);
	};

	const handleDeleteClick = () => {
		handleDeleteAnime(anime.title);
	};

	return (
		<div className='card'>
			<img
				src={anime.image_url}
				className='card-img-top'
				alt={anime.title}
			/>
			<div className='card-body'>
				<h5 className='card-title'>{anime.title}</h5>
				<p className='card-text'>{anime.synopsis}</p>
				<ul className='list-group list-group-flush'>
					<li className='list-group-item'>
						<strong>Airing:</strong> {anime.airing ? 'Yes' : 'No'}
					</li>
					<li className='list-group-item'>
						<strong>Episodes:</strong> {anime.episodes}
					</li>
					<li className='list-group-item'>
						<strong>Score:</strong> {anime.score}
					</li>
				</ul>
				{showUpdateButton && (
					<div className='input-group mt-3'>
						<input
							type='text'
							className='form-control'
							placeholder='Enter review'
							value={review}
							onChange={handleReviewChange}
						/>
						<button
							className='btn btn-primary'
							onClick={handleUpdateClick}
						>
							Update Review
						</button>
					</div>
				)}
				{showAddButton && (
					<button
						className='btn btn-secondary me-2 mt-3'
						onClick={handleAddClick}
					>
						Add to Watchlist
					</button>
				)}
				{showDeleteButton && (
					<button
						className='btn btn-danger mt-3'
						onClick={handleDeleteClick}
					>
						Delete
					</button>
				)}
			</div>
		</div>
	);
}

export default AnimeCard;
