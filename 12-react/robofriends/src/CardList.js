import React from "react";
import Card from "./Card"; // import apps, only have 1 for now

// destructuring method, dont need to import robots
const CardList = ({ robots }) => {
	const cardComponent = robots.map((user, i) => {
		return <Card key={robots[i].id} id={robots[i].id} name={robots[i].name} email={robots[i].email} />;
	});

	return <div>{cardComponent}</div>;
};

export default CardList;
