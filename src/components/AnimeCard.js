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
	const [isTruncated, setIsTruncated] = useState(true);

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

	const toggleTruncate = () => {
		setIsTruncated(!isTruncated);
	};

	const synopsis = isTruncated
		? `${anime.synopsis.substring(0, 100)}...`
		: anime.synopsis;

	return (
		<div className='card anime-card'>
			<div className='row g-0'>
				<div className='col-5 col-sm-4'>
					<img
						src={anime.image_url}
						className='img-fluid w-100'
						alt={anime.title}
					/>
				</div>
				<div className='col-7 col-sm-8'>
					<div className='card-body'>
						<h5 className='card-title'>{anime.title}</h5>
						<p className='card-text'>{synopsis}</p>
						{anime.synopsis.length > 100 && (
							<button
								className='btn btn-link'
								onClick={toggleTruncate}
							>
								{isTruncated ? 'Read more' : 'Show less'}
							</button>
						)}
						<ul className='card-text'>
							<li className='list-group-item'>
								<strong>Episodes:</strong> {anime.episodes}
							</li>
							<li className='list-group-item'>
								<strong>Score:</strong> {anime.score}
							</li>
						</ul>
						{showUpdateButton && (
							<div className='input-group'>
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
			</div>
		</div>
	);
}

export default AnimeCard;
