import { gql } from "@apollo/client";

export const TODOS = gql`
	query Todos {
		todos {
			id
			title
			completed
			createdat
			updatedat
		}
	}
`;

export const CREATE_TODO = gql`
	mutation createTodo($todo: ITodo) {
		createTodo(todo: $todo)
	}
`;

export const UPDATE_TODO = gql`
	mutation updateTodo($updateTodo: IUpdateTodo) {
		updateTodo(updateTodo: $updateTodo)
	}
`;

export const DELETE_TODO = gql`
	mutation deleteTodo($deleteTodoId: ID) {
		deleteTodo(id: $deleteTodoId)
	}
`;

export const TODO_LATEST = gql`
	subscription todoLatest {
		todoLatest {
			title
			completed
			createdat
			updatedat
		}
	}
`;
