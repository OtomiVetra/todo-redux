import { combineReducers } from 'redux';
import { todosReducer } from './todosReducer';
import { filterReducer } from './filterReducer';

export const mainReducer = combineReducers({
	todosState: todosReducer,
	filterState: filterReducer,
});
