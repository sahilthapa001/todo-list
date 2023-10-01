import React, { useContext, useState } from "react";
import { TodoContext } from "../Context/ContextApi";

function Search() {
	const { dispatch } = useContext(TodoContext);
	const [search, setSearch] = useState();
	const handleSearch = (e) => {
		setSearch(e.target.value);
		dispatch({ type: "SEARCH_TODO", payload: e.target.value });
	};
	return (
		<header className="">
			<h1> Todo List</h1>
			<form className="search">
				<input
					type="text"
					name="search"
					placeholder="search the list"
					value={search}
					onChange={handleSearch}
				/>
			</form>
		</header>
	);
}

export default Search;
