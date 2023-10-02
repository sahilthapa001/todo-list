import { createContext, useReducer, useState } from "react";

export const TodoContext = createContext();

const todoReducer = (state, action) => {
	switch (action.type) {
		case "ADD_TODO":
			const newTodo = {
				id: Date.now(),
				text: action.payload,
				completed: false,
			};
			return state.slice().concat(newTodo);

		case "TOGGLE_TODO":
			const indexToToggle = state.findIndex(
				(todo) => todo.id === action.payload
			);
			if (indexToToggle !== -1) {
				const newState = state.slice();
				const todoToToggle = newState[indexToToggle];
				todoToToggle.completed = !todoToToggle.completed;
				return newState;
			}
		case "DELETE_TODO":
			const indexToDelete = state.findIndex(
				(todo) => todo.id === action.payload
			);
			console.log(indexToDelete);
			if (indexToDelete !== -1) {
				const newState = state.slice();
				newState.splice(indexToDelete, 1);
				return newState;
			}
		case "SEARCH_TODO":
			return state.filter((todo) => todo.text.includes(action.payload));

		default:
			return state;
	}
};

export const TodoContextProvider = ({ children }) => {
	const [todos, dispatch] = useReducer(todoReducer, []);
	return (
		<TodoContext.Provider value={{ todos, dispatch }}>
			{children}
		</TodoContext.Provider>
	);
};
