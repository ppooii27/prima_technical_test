import React, { useState, useEffect } from 'react';
import Event from '../Event/Event';

import classes from './Timeline.module.css';

const Timeline = () => {
	const [event, setEvent] = useState([]);
	const maxEvent = 5;
	const sordtedEvent = event.sort((a, b) => b.time - a.time) || [];

	useEffect(() => {
		const interval = setInterval(() => {
			setEvent((prevEvent) => [
				...prevEvent.slice(0, maxEvent - 1),
				{
					id: Math.random(),
					time: new Date(),
					title: 'Most immediate5',
					description: 'Description about what just happened',
				},
			]);
		}, 5000);

		return () => clearInterval(interval);
	}, []);
	return (
		<div className={classes.timeline}>
			{sordtedEvent &&
				sordtedEvent.map((event, idx) => (
					<Event event={event} key={`event-${event.id}`} idx={idx} />
				))}
		</div>
	);
};

export default Timeline;
