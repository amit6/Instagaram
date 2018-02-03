import React from 'react';
import ReactDOM from 'react-dom';

//components
import Photo from './Photo';
import Comments from './Comments';

class Single extends React.Component {

	constructor(props){
		super(props);
	}

	render() {

		const { posts, comments, postIndex } = this.props;
		const comment= comments[posts[postIndex]['code']];
		
		return (
			<div className="single-photo-wrapper">
				<div className="single-photo">
					<Photo {...this.props} post={posts[postIndex]}/>
					<Comments {...this.props} comments={comment} />
				</div>
			</div>
		);
	}

}

export default Single;