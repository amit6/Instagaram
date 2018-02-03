import React from 'react';
import ReactDOM from 'react-dom';

//components
import PhotoGrid from './PhotoGrid';
import Overlay from './Overlay';

class Main extends React.Component{

	constructor(props){
		super(props);
		//api calls
		console.log("I am called !!!");
		this.props.configure.bind(null);
	}

	render() {
		const postIndex = this.props.postIndex;
		let elem= null;
				
		if( postIndex > -1 ){
			elem= <Overlay {...this.props} postIndex={postIndex} />
		}else{
			elem= <PhotoGrid {...this.props} />
		}
		
		return (
			<div className="main">
				<header><h3><a href="#" onClick={this.props.handlePost}>Instagaram</a></h3></header>
				{elem}
			</div>
		);
	}

}

export default Main;