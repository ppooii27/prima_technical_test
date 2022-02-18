import React from 'react';
import Card from '../UI/Card';
import Player from './Player';

import classes from './Team.module.css';

export const Team = (props) => {
	const sortedPlayer = [...props.data?.firstEleven];
	sortedPlayer.sort((a, b) => a.squadNumber - b.squadNumber);

	return (
		<Card className={classes.container}>
			<div>
				<label>Team:</label>{props.data?.name}
			</div>
			<div>
				<label>Stadium:</label>{props.data?.stadium}
			</div>
			<div className={classes.table}>
				<label>First Eleven:</label>
				<div className={classes['flex-table']}>
					<div className={classes['flex-row']}>Name</div>
					<div className={classes['flex-row']}>Positon</div>
					<div className={classes['flex-row']}>squad number</div>
				</div>
				{sortedPlayer.length > 0 &&
					sortedPlayer.map((player) => {
						return <Player player={player} key={player.id} />;
					})}
			</div>
		</Card>
	);
};
