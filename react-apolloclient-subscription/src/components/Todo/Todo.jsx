import React from "react";
import { useMutation, useQuery } from "@apollo/client";

import AddInput from "../AddInput/AddInput";
import Header from "../Header/Header";
import TodoList from "../TodoList/TodoList";

// import client from "../../libs/client";
import {
	TODOS,
	CREATE_TODO,
	UPDATE_TODO,
	DELETE_TODO,
} from "../../libs/client/gql";

import "./Todo.css";

function Todo() {
	const { data, loading, error } = useQuery(TODOS);

	const [createTodo, { error: errorCreatingTodo, loading: load }] = useMutation(
		CREATE_TODO,
		{
			refetchQueries: [TODOS, "Todos"],
		}
	);

	React.useEffect(() => {
		console.log(load);
	}, [load]);

	const [updateTodo, { error: creatingError }] = useMutation(UPDATE_TODO, {
		refetchQueries: [TODOS, "Todos"],
		// onCompleted({ updateTodo }) {
		// 	updateTodo && alert("Updating todo is done");
		// },
	});

	const [deleteTodo, { error: errorDeletingTodo }] = useMutation(DELETE_TODO, {
		refetchQueries: [TODOS, "Todos"],
		// onCompleted({ deleteTodo }) {
		// 	deleteTodo && alert("Deleting todo is done");
		// },
	});

	if (creatingError) return `Adding todo error! ${creatingError.message}`;
	if (errorDeletingTodo)
		return `Deleting todo error! ${errorDeletingTodo.message}`;

	return (
		<div className="todo">
			<span>{error?.networkError.message}</span>

			<Header title="Todo" />
			<AddInput createTodo={createTodo} error={errorCreatingTodo} />
			{loading ? (
				<h1>is loading.....</h1>
			) : (
				<TodoList
					todos={data?.todos || []}
					updateTodos={updateTodo}
					deleteTodo={deleteTodo}
				/>
			)}
		</div>
	);
}

export default Todo;
