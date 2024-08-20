import { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { debounce } from 'lodash';
import styles from './App.module.css';
import { Form } from '../Form/Form';
import {
	fetchTodos,
	deleteTodo,
	updateTodo,
	setFilterText,
	toggleSort,
} from '../../actions/todoActions';

export const App = () => {
	const { todos } = useSelector((state) => state.todosState);
	const { filterText, isSorted } = useSelector((state) => state.filterState);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchTodos());
	}, [dispatch]);

	const handleSearchInputChange = useCallback(
		debounce((value) => {
			dispatch(setFilterText(value));
		}, 300),
		[dispatch],
	);

	const filteredTodos = todos.filter((todo) =>
		todo.text.toLowerCase().includes(filterText.toLowerCase()),
	);

	const sortedTodos = isSorted
		? [...filteredTodos].sort((a, b) => a.text.localeCompare(b.text))
		: filteredTodos;

	const handleEditInputChange = (e, currentTodo) => {
		dispatch(updateTodo({ ...currentTodo, text: e.target.value }));
	};

	return (
		<div className={styles.app}>
			<div className={styles.todoListContainer}>
				<h1 className={styles.header}>Список дел</h1>
				<Form />
				<input
					type='text'
					placeholder='Поиск...'
					onChange={(e) => handleSearchInputChange(e.target.value)}
					className={styles.searchInput}
				/>
				<button className={styles.button} onClick={() => dispatch(toggleSort())}>
					{isSorted ? '🔼' : '🔽'}
				</button>
				<ul className={styles.todoList}>
					{sortedTodos.map((todo) => (
						<li key={todo.id} className={styles.todoListItem}>
							<span className={styles.todoText}>{todo.text}</span>
							<div className={styles.buttonGroup}>
								<button
									className={styles.button}
									onClick={() => handleEditInputChange(todo)}
								>
									✏️
								</button>
								<button
									className={styles.button}
									onClick={() => dispatch(deleteTodo(todo.id))}
								>
									❌
								</button>
							</div>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};
