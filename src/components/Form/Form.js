import { useState } from 'react';
import { useDispatch } from 'react-redux';
import styles from './Form.module.css';
import { addTodo } from '../../actions/todoActions';

export const Form = () => {
	const [value, setValue] = useState('');
	const dispatch = useDispatch();

	const handleAddTodo = (e) => {
		e.preventDefault();
		if (value.trim()) {
			dispatch(
				addTodo({
					text: value,
				}),
			);
			setValue('');
		}
	};

	return (
		<form className={styles.form} onSubmit={handleAddTodo}>
			<input
				type='text'
				placeholder='введите текст'
				value={value}
				onChange={(e) => setValue(e.target.value)}
			/>
			<button className={styles.button} type='submit'>
				Добавить
			</button>
		</form>
	);
};
