import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Card from '../UI/Card';
import classes from './PlayerProfile.module.css';

const PlayerProfile = () => {
	const location = useLocation();
	const player = location.state.player;
	const getAge = (birthDate) =>
		Math.floor((new Date() - new Date(birthDate).getTime()) / 3.15576e10);

	const dob = new Date(player.dateOfBirth).toLocaleDateString('en-us', {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	});
	const age = getAge(new Date(player.dateOfBirth));
	const height = ((150 + (player.height - 15000)) / 100).toFixed(2);
	return (
		<>
			<Link to="/">Back</Link>
			<div className={classes['flex-table']}>
				<div className={classes.squadNumber}>{player.squadNumber}</div>
				<div className={classes.name}>
					{player.firstname} {player.lastname}
				</div>
			</div>
			<div className={`${classes['flex-table']} ${classes.profile}`}>
				<div className={classes['flex-row']}>
					<label>Nationality</label>
				</div>
				<div className={classes['flex-row']}>{player.nationality}</div>
				<div className={classes['flex-row']}>
					<label>Position</label>
				</div>
				<div className={classes['flex-row']}>{player.position}</div>
				<div className={classes['flex-row']}>
					<label>Height</label>
				</div>
				<div className={classes['flex-row']}>{`${height} m`}</div>
				<div className={classes['flex-row']}>
					<label>Birthday</label>
				</div>
				<div className={classes['flex-row']}>{dob}</div>
				<div className={classes['flex-row']}>
					<label>Age</label>
				</div>
				<div className={classes['flex-row']}>{age}</div>
			</div>
		</>
	);
};

export default PlayerProfile;
