import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Player.module.css';

const Player = ({ player }) => {
	return (
		<Link to={`/player-profile/${player.id}`} state={{ player: player }}>
			<div className={classes['flex-table']}>
				<div
					className={classes['flex-row']}
				>{`${player.firstname} ${player.lastname}`}</div>
				<div className={classes['flex-row']}>{player.position}</div>
				<div className={classes['flex-row']}>{player.squadNumber}</div>
			</div>
		</Link>
	);
};

export default Player;
