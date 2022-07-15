import React from "react"; // iport react itself
import ReactDOM from "react-dom/client"; // import react dom for web
import "./index.css"; // import base css stylesheet
import reportWebVitals from "./reportWebVitals"; // import webvitals
import "tachyons"; // import css library - need to switch to tailwind
import Card from "./Card"; // import apps, only have 1 for now
import { robots } from "./robots";

const root = ReactDOM.createRoot(document.getElementById("root")); // element selector
root.render(
	<React.StrictMode>
		<div>
			<Card id={robots[0].id} name={robots[0].name} email={robots[0].email} />
			<Card id={robots[1].id} name={robots[1].name} email={robots[1].email} />
			<Card id={robots[2].id} name={robots[2].name} email={robots[2].email} />
		</div>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
