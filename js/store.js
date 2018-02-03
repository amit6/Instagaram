import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

//import root reducer
import rootReducer from './reducers/reducer.js';

//import data
import posts from './data/posts';
import comments from './data/comments';

//default state
const defaultState= {
	posts,
	comments,
	postIndex: -1
}

const store= createStore(rootReducer, defaultState);

export default store;