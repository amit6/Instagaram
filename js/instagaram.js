import React from 'react';
import ReactDOM from 'react-dom';

//components
import App from './components/App';

import { Provider } from 'react-redux';
import store from './store';

class Instagaram extends React.Component{

	render() {
		return (
			<Provider store={store}>
				<App />
			</Provider>
		);
	}

}

ReactDOM.render(<Instagaram />, document.getElementById('root'));