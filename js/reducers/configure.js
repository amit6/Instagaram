function configure( state = { posts: [], comments: [], postIndex: -1 }, action ){

	switch(action.type){
		case 'CONFIGURE': {
			return
		}
		default: 
			return state;
	}

}