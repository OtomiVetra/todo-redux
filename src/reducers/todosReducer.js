import {
	FETCH_TODOS_SUCCESS,
	ADD_TODO_SUCCESS,
	DELETE_TODO_SUCCESS,
	UPDATE_TODO_SUCCESS,
} from '../actions/todoActions';

const initialState = {
	todos: [],
};

export const todosReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_TODOS_SUCCESS:
			return { ...state, todos: action.payload };
		case ADD_TODO_SUCCESS:
			return { ...state, todos: [...state.todos, action.payload] };
		case DELETE_TODO_SUCCESS:
			return {
				...state,
				todos: state.todos.filter((todo) => todo.id !== action.payload),
			};
		case UPDATE_TODO_SUCCESS:
			return {
				...state,
				todos: state.todos.map((todo) =>
					todo.id === action.payload.id ? action.payload : todo,
				),
			};
		default:
			return state;
	}
};
