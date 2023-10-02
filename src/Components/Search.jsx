import React, { useContext, useState } from "react";
import { TodoContext } from "../Context/ContextApi";
import "./Search.css"; // Import the external CSS file

function Search() {
	const { dispatch } = useContext(TodoContext);
	const [search, setSearch] = useState("");

	const handleSearch = (e) => {
		setSearch(e.target.value);
		dispatch({ type: "SEARCH_TODO", payload: e.target.value });
	};

	return (
		<header>
			<h1>Todo List</h1>
			<form className="search">
				<input
					type="text"
					name="search"
					placeholder="Search the list"
					value={search}
					onChange={handleSearch}
				/>
			</form>
		</header>
	);
}

export default Search;
