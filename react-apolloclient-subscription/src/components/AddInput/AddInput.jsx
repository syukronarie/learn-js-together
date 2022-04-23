import React, { useState } from "react";
import "./AddInput.css";

function AddInput({ createTodo, error }) {
	const [title, setTodo] = useState("");

	if (error) return <p>Adding todo error! ${error.message}</p>;

	const addTodo = (e) => {
		e.preventDefault();
		if (!title) return;

		const payload = {
			todo: {
				title: title,
				completed: false,
			},
		};

		const options = ({ payload }) => ({
			variables: payload,
		});

		// const payload = options(variables)

		createTodo(options({ payload }));

		setTodo("");
	};

	return (
		<form className="input-container" onSubmit={addTodo}>
			<input
				className="input"
				value={title}
				onChange={(e) => setTodo(e.target.value)}
				placeholder="Add a new task here..."
			/>
			<button className="add-btn">Add</button>
		</form>
	);
}

export default AddInput;
