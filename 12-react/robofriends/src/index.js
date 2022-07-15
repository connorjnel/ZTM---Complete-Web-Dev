import React from "react"; // iport react itself
import ReactDOM from "react-dom/client"; // import react dom for web
import "./index.css"; // import base css stylesheet
import reportWebVitals from "./reportWebVitals"; // import webvitals
import "tachyons"; // import css library - need to switch to tailwind
import CardList from "./CardList"; // cleaned up the card display to pull from seperate app
import { robots } from "./robots"; // still need this as im using it here

const root = ReactDOM.createRoot(document.getElementById("root")); // element selector
root.render(
	<React.StrictMode>
		<CardList robots={robots} />
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
