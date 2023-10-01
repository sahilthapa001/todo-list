import React, { useContext, useState } from "react";
import { TodoContext } from "../Context/ContextApi";

function Add() {
	const { dispatch } = useContext(TodoContext);
	const [text, setText] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		if (text.trim() === "") return;
		dispatch({ type: "ADD_TODO", payload: text });
		setText("");
	};
	return (
		<form className="add" onSubmit={handleSubmit}>
			<label className="">Add a new todo</label>
			<input
				type="text"
				name="add"
				value={text}
				onChange={(e) => setText(e.target.value)}
				className=""
			/>
			<button type="submit">Add</button>
		</form>
	);
}

export default Add;
