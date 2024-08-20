import { SET_FILTER_TEXT, TOGGLE_SORT } from '../actions/todoActions';

const initialState = {
	filterText: '',
	isSorted: false,
};

export const filterReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_FILTER_TEXT:
			return { ...state, filterText: action.payload };
		case TOGGLE_SORT:
			return { ...state, isSorted: !state.isSorted };
		default:
			return state;
	}
};
