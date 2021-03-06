import React from "react";
import TodoFooter from "../TodoFooter/TodoFooter";
import "./TodoList.css";

function TodoList({ todos, updateTodos, deleteTodo }) {
	const calcNumberOfIncompletedTasks = () => {
		let count = 0;
		todos.forEach((todo) => {
			if (!todo.completed) count++;
		});
		return count;
	};

	return (
		<div className="todolist-container">
			<div className="todos-container">
				<div>
					{todos.map((todo) => (
						<div className="todo-fragment" key={todo.id}>
							<div
								className={`todo-item ${todo.completed && "todo-item-active"}`}
								onClick={() =>
									updateTodos({
										variables: {
											updateTodo: {
												id: todo.id,
												completed: !todo.completed,
												updatedat: Date.toLocaleString(),
											},
										},
									})
								}
							>
								<p>{todo.title}</p>
								<p>
									Created at: {todo.createdat} and Updated at: {todo.updatedat}
								</p>
							</div>
							<button
								className="remove-todo"
								onClick={() =>
									deleteTodo({ variables: { deleteTodoId: todo.id } })
								}
							>
								X
							</button>
						</div>
					))}
				</div>
			</div>
			<div>
				<TodoFooter numberOfIncompleteTasks={calcNumberOfIncompletedTasks()} />
			</div>
		</div>
	);
}

export default TodoList;
