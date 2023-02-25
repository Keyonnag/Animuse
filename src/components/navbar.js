import React from 'react';
import { useState } from 'react';
import Logo from './logo.svg';

function Navbar({ getRandomAnimeData, setPage }) {
	const [currentPage, setCurrentPage] = useState('home');

	return (
		<nav className='navbar navbar-expand-lg navbar-dark bg-dark sticky-top'>
			<div className='container'>
				<button
					className='navbar-brand btn d-flex align-items-center'
					onClick={() => setPage('home')}
				>
					<img
						src={Logo}
						alt='Animuse'
						width='30'
						height='24'
						className='d-inline-block align-text-top me-2'
					/>
					<span>Animuse</span>
				</button>
				<button
					className='navbar-toggler'
					type='button'
					data-bs-toggle='collapse'
					data-bs-target='#navbarNav'
					aria-controls='navbarNav'
					aria-expanded='false'
					aria-label='Toggle navigation'
				>
					<span className='navbar-toggler-icon'></span>
				</button>
				<div
					className='collapse navbar-collapse justify-content-between'
					id='navbarNav'
				>
					<ul className='navbar-nav'>
						<li className='nav-item'>
							<button
								className='nav-link btn'
								type='button'
								onClick={() => {
									setCurrentPage('home');
									setPage('home');
								}}
							>
								Home
							</button>
						</li>
						<li className='nav-item'>
							<button
								className='nav-link btn'
								type='button'
								onClick={() => {
									setPage('watchlist');
									setCurrentPage('watchlist');
								}}
							>
								Watchlist
							</button>
						</li>
						{currentPage === 'home' ? (
							<li className='nav-item'>
								<button
									className='nav-link btn'
									type='button'
									onClick={() => getRandomAnimeData()}
								>
									More Anime!!!
								</button>
							</li>
						) : null}
					</ul>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
