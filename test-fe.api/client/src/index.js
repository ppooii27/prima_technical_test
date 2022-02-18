import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

import App from './App';

const client = new ApolloClient({
	uri: 'http://0.0.0.0:3001/',
});

ReactDOM.render(
	<Router>
		<ApolloProvider client={client}>
			<App />
		</ApolloProvider>
	</Router>,
	document.getElementById('root')
);
