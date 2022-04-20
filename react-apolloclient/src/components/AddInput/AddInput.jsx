import React, { useState } from "react";
import "./AddInput.css";

function AddInput({ createTodo, error }) {
	const [todo, setTodo] = useState("");

	if (error) return `Adding todo error! ${error.message}`;

	const addTodo = (e) => {
		e.preventDefault();
		if (!todo) return;

		createTodo({
			variables: {
				todo: {
					title: todo,
					completed: false,
				},
			},
		});

		setTodo("");
	};

	return (
		<form className="input-container" onSubmit={addTodo}>
			<input
				className="input"
				value={todo}
				onChange={(e) => setTodo(e.target.value)}
				placeholder="Add a new task here..."
			/>
			<button className="add-btn">Add</button>
		</form>
	);
}

export default AddInput;
