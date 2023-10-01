import { createContext } from "react";

export const TodoContext = createContext();

const TodoContextProvider = ({ children }) => {
	const [task, setTask] = useState("");
	const TodoContextValue = { task, setTask };
	return (
		<TodoContext.Provider value={TodoContextValue}>
			{children}
		</TodoContext.Provider>
	);
};
