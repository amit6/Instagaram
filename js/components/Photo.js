import React from 'react';
import ReactDOM from 'react-dom';

class Photo extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		const { post, comments, index } = this.props;
		
		return(
			<div className="photo">
				<figure>
					<img src={post.display_src} className="grid-photo"></img>
				</figure>
				<section className="caption-likes-comments">
					<div className="caption">{post.caption}</div>
					<div className="likes-comments">
						<div className="likes" onClick={this.props.increment.bind(null, index)} >
							{post.likes}
						</div>
						<div className="comments" onClick={this.props.handlePost.bind(null, index)}>
							{comments[post.code] ? comments[post.code].length : 0}
						</div>
					</div>
				</section>
			</div>
		);

	}

}
export default Photo;