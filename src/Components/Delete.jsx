import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TodoContext } from "../Context/ContextApi";
import "./Delete.css"; // Import the external CSS file

function Delete() {
	const { todos, dispatch } = useContext(TodoContext);

	const handleToggle = (id) => {
		dispatch({ type: "TOGGLE_TODO", payload: id });
	};

	const handleDelete = (id) => {
		dispatch({ type: "DELETE_TODO", payload: id });
	};

	return (
		<div>
			<ul>
				{todos.map((todo) => (
					<li key={todo.id}>
						<span
							style={{
								textDecoration: todo.completed ? "line-through" : "none",
							}}
							onClick={() => handleToggle(todo.id)}
						>
							{todo.text}
						</span>
						<button onClick={() => handleDelete(todo.id)}>X</button>
					</li>
				))}
			</ul>
		</div>
	);
}

export default Delete;
