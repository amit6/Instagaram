import { combineReducers } from 'redux';

import posts from './posts';
import comments from './comments';
import postIndex from './postIndex';

const rootReducer= combineReducers({
						posts, 
						comments,
						postIndex
					});

export default rootReducer;