import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { Team } from './Team';

import classes from './Match.module.css';

const MATCH_DATA = gql`
	{
		nextMatch {
			id
			date
			home {
				id
				name
				stadium
				firstEleven {
					id
					lastname
					firstname
					position
					squadNumber
					height
					dateOfBirth
					nationality
				}
			}
			away {
				id
				name
				stadium
				firstEleven {
					id
					lastname
					firstname
					position
					squadNumber
					height
					dateOfBirth
					nationality
				}
			}
		}
	}
`;

const Match = () => {
	const { loading, data } = useQuery(MATCH_DATA);
	
	console.log(data, loading);

	return (
		<>
			{loading ? (
				'loading'
			) : (
				<>
					<div className={classes.container}>
						<div className={classes.date}>{data?.nextMatch?.date}</div>
						<Team data={data?.nextMatch?.home} />
						<label>vs</label>
						<Team data={data?.nextMatch?.away} />
					</div>
				</>
			)}
		</>
	);
};

export default Match;
