import React from "react";
import Add from "./Components/Add";
import Delete from "./Components/Delete";
import Search from "./Components/Search";
import "./App.css";

function App() {
	return (
		<div className="container">
			<Search />
			<Delete />
			<Add />
		</div>
	);
}

export default App;
