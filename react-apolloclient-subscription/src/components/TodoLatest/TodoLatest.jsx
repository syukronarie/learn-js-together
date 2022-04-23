import { useSubscription } from "@apollo/client";
import React from "react";
import { TODO_LATEST } from "../../libs/client/gql";
// ${todo.completed && "todo-item-active"}

const TodoLatest = () => {
	const { data, loading } = useSubscription(TODO_LATEST);

	const { todoLatest } = data || {};

	React.useEffect(() => {
		console.log(loading);
	}, [loading]);

	return (
		<div className="todolist-container">
			<h1>Todo Latest</h1>
			{loading ? (
				<p>is loading</p>
			) : (
				<div className="todos-container">
					<div>
						<div className="todo-fragment">
							<div
								className={`todo-item
						`}
							>
								<p>{todoLatest?.title}</p>
								<p>
									Created at: {todoLatest?.createdat} and Updated at:{" "}
									{todoLatest?.updatedat}
								</p>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default TodoLatest;
