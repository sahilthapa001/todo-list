import { createContext, useReducer, useState } from "react";

export const TodoContext = createContext();

const todoReducer = (state, action) => {
	switch (action.type) {
		case "ADD_TODO":
			return [
				...state,
				{ id: Date.now(), text: action.payload, completed: false },
			];
		case "TOGGLE_TODO":
			return state.map((todo) =>
				todo.id === action.payload
					? { ...todo, completed: !todo.completed }
					: todo
			);

		case "DELETE_TODO":
			return state.filter((todo) => todo.id !== action.payload);
            
		case "SEARCH_TODO":
			return state.filter((todo) => todo.text.includes(action.payload));

		default:
			return state;
	}
};

export const TodoContextProvider = ({ children }) => {
	const [todos, dispatch] = useReducer(todoReducer, []);
	const [task, setTask] = useState("");
	const TodoContextValue = { task, setTask };
	return (
		<TodoContext.Provider value={{ todos, dispatch }}>
			{children}
		</TodoContext.Provider>
	);
};
