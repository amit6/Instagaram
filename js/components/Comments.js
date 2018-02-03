import React from 'react';
import ReactDOM from 'react-dom';

class Comments extends React.Component {

	constructor(props) {
		super(props);
		this._handleSubmit= this._handleSubmit.bind(this);
	}

	_handleSubmit(e) {
		e.preventDefault();
		const user= this.refs.user.value;
		const text= this.refs.text.value;
		const { posts, postIndex }= this.props; 
		this.props.addComment(posts[postIndex].code, user, text);
		console.log("amit9");
		this.refs.addCommentForm.reset();
	}

	renderComments(){
		const { posts, comments, postIndex }= this.props;

		if(!comments){
			return false;
		}

		return comments.map((comment, i) => {
			return (
				<div className="comment" key={i}>
			        <p>
			          <strong>{comment.user}</strong>
			          {comment.text}
			          <button className="remove-comment" 
			          	onClick={this.props.removeComment.bind(null, posts[postIndex].code, i)}
			          	title="remove comment">
			          	X
			          </button>
			        </p>
			     </div>
			)}
		);
	}

	render() {
		return (
			<div className="comments">
				{this.renderComments()}
				<form ref="addCommentForm" onSubmit={this._handleSubmit}>
					<input type="text" ref="user" placeholder="name"/>
					<input type="text" ref="text" placeholder="comment"/>
					<input type="submit" hidden />
				</form>
			</div>
		);
	}

}

export default Comments;