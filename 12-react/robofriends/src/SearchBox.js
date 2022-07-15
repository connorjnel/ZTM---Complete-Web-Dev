import React from "react";

const SearchBox = ({ searchField, searchChange }) => {
	return (
		<div>
			<input className="pa3 ba b--blue bg-lightest-blue tc" type="search" placeholder="Search Robots" onChange={searchChange} />
		</div>
	);
};

export default SearchBox;
