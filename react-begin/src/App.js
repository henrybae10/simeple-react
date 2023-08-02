import { useState, useEffect } from "react";
import styles from "./App.module.css";

function App() {
	// create-react-app을 사용하면서 import를 통해 useState 바로 써줘도 된다.
	const [counter, setCounter] = useState(0);
	const onClick = () => setCounter((prev) => prev + 1);
	console.log("render");
	const iRunOnlyOnce = () => {
		console.log("render only once");
	};

	useEffect(iRunOnlyOnce, []);
	/*
	위와 동일
	useEffect(() => {
		console.log("render only once");
	}, []);
	*/
	return (
		<div>
			<h1 className={styles.title}>Hello!</h1>
			<button onClick={onClick}>Count</button>
			<p>{counter}</p>
		</div>
	);
}

export default App;
