import React from 'react';
import ReactDOM from 'react-dom';
import Single from './Single';

class Overlay extends React.Component{

	constructor(props) {
		super(props);
	}

	render() {

		const { comments, postIndex }= this.props;
		let Elem= null;
		if( postIndex > -1 ){
			Elem= <Single {...this.props} />
		}

		return (
			<div className="overlay">
				{Elem}
			</div>
		);
	}

}

export default Overlay;
