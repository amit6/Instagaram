import React from 'react';
import ReactDOM from 'react-dom';
import Photo from './Photo';

class PhotoGrid extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {

		return (
			<section className="photo-grid">
				{this.props.posts.map((post, i) => <Photo {...this.props} key={i} post={post} index={i} />)}
			</section>
		)
	}

}

export default PhotoGrid;