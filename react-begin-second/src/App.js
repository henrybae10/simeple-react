import { useState } from "react";

function App() {
	const [toDo, setToDo] = useState("");
	const onChange = (event) => setToDo(event.target.value);

	const [toDos, setToDos] = useState([]);

	const onSubmit = (event) => {
		//event.preventDefault();
		if (toDo === "") {
			return;
		} else {
			// toDo = ""; 처럼 직접적으로 state를 수정하는 것이 아니라 setState를 사용함을 잊지말자.
			// 배열도 마찬가지다. toDos.push()는 안 됨.
			// function(currentValue) {return} 과 동일한거임
			// state는 항상 새로운 값으로 set함을 잊지말자.
			setToDos((currentArray) => [toDo, ...currentArray]);
			setToDo("");
		}
	};
	console.log(toDos);
	return (
		<div>
			<h1>My ToDos List : {toDos.length}</h1>
			<form onSubmit={onSubmit}>
				<input
					onChange={onChange}
					value={toDo}
					type="text"
					placeholder="todo list "
				/>
				<button>confirm</button>
			</form>
		</div>
	);
}

export default App;
