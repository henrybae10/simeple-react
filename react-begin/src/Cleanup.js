import { useState, useEffect } from "react";

function Hello() {
	useEffect(() => {
		console.log("created");

		return () => console.log("destroyed");
	}, []);
	return <h1>hello!!!!!</h1>;
}

function Cleanup() {
	const [showing, setShowing] = useState(false);
	const onClick = () => setShowing((prev) => !prev);
	console.log("ren");
	// jsx에서 js를 사용할 때는 {}를 해주고 이 안에서 js를 사용한다.
	return (
		<div>
			{showing ? <Hello /> : null}
			<button onClick={onClick}>{showing ? "showing" : "hiding"}</button>
		</div>
	);
}

export default Cleanup;
