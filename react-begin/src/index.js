import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Button from "./Button";
import Cleanup from "./Cleanup";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<div>
		<App />
		<Button text={"test"} />
		<Cleanup />
	</div>
);
