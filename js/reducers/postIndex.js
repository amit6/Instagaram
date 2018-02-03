function postIndex( state = -1, action){
	console.log('HANDLE_POST');
	switch(action.type){
		case 'HANDLE_POST': {
			return action.index 
		}
		default:
			return state;
	}
}

export default postIndex;