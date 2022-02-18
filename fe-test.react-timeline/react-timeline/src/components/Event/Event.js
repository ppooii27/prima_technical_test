import React from 'react';
import Card from '../UI/Card';
import moment from 'moment';
import classes from './Event.module.css';

const Event = ({ event, idx }) => {
	const { time, title, description } = event;
	const formatedTime = moment(time).format('MMMM Do YYYY, HH:mm:ss');
	const containerPosition = idx % 2 === 0 ? classes.left : classes.right;
	const cardStyle = `${classes.container} ${containerPosition}`;
	return (
		<div className={cardStyle}>
			<Card className={classes.date}>{formatedTime}</Card>
			<div className={classes.content}>
				<div className={classes.title}>{title}</div>
				<div>{description}</div>
			</div>
		</div>
	);
};

export default Event;
