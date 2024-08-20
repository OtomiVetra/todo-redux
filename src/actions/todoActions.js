export const FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS';
export const ADD_TODO_SUCCESS = 'ADD_TODO_SUCCESS';
export const DELETE_TODO_SUCCESS = 'DELETE_TODO_SUCCESS';
export const UPDATE_TODO_SUCCESS = 'UPDATE_TODO_SUCCESS';
export const SET_FILTER_TEXT = 'SET_FILTER_TEXT';
export const TOGGLE_SORT = 'TOGGLE_SORT';

export const fetchTodos = () => async (dispatch) => {
	try {
		const response = await fetch('http://localhost:3005/todos');
		const data = await response.json();
		dispatch({ type: FETCH_TODOS_SUCCESS, payload: data });
	} catch (error) {
		console.error('Что-то пошло не так:', error);
	}
};

export const addTodo = (newTodo) => async (dispatch) => {
	try {
		const response = await fetch('http://localhost:3005/todos', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json;charset=utf-8' },
			body: JSON.stringify(newTodo),
		});
		const data = await response.json();
		dispatch({ type: ADD_TODO_SUCCESS, payload: data });
	} catch (error) {
		console.error('Что-то пошло не так:', error);
	}
};

export const deleteTodo = (id) => async (dispatch) => {
	try {
		const response = await fetch(`http://localhost:3005/todos/${id}`, {
			method: 'DELETE',
		});
		if (response.ok) {
			dispatch({ type: DELETE_TODO_SUCCESS, payload: id });
		} else {
			console.error('Не удалось удалить дело');
		}
	} catch (error) {
		console.error('Что-то пошло не так:', error);
	}
};

export const updateTodo = (todo) => async (dispatch) => {
	try {
		const response = await fetch(`http://localhost:3005/todos/${todo.id}`, {
			method: 'PUT',
			headers: { 'Content-Type': 'application/json;charset=utf-8' },
			body: JSON.stringify(todo),
		});
		const data = await response.json();
		dispatch({ type: UPDATE_TODO_SUCCESS, payload: data });
	} catch (error) {
		console.error('Что-то пошло не так:', error);
	}
};

export const setFilterText = (text) => ({
	type: SET_FILTER_TEXT,
	payload: text,
});

export const toggleSort = () => ({
	type: TOGGLE_SORT,
});
