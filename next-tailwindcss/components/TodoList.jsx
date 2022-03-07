import React, { useState } from 'react';
import TodoForm from './TodoForm';

const TodoList = () => {
	const [todos, setTodos] = useState([]);

	const addTodo = (todo) => {
		if (!todo.text || /^\s*$/.test(todo.text)) return;

		const newTodos = [...todos, todo];
		setTodos(newTodos);
		// console.log(todo, ...todos);
		console.log(newTodos);
	};

	return (
		<div>
			<h1>Todo List</h1>
			<TodoForm onSubmit={addTodo} />
		</div>
	);
};

export default TodoList;
