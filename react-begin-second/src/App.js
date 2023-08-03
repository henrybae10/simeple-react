import { useState } from "react";

function App() {
	const [toDo, setToDo] = useState("");
	const onChange = (event) => setToDo(event.target.value);

	const [toDos, setToDos] = useState([]);

	const onSubmit = (event) => {
		// submit은 기본적으로 refresh 동작이 있어서 이를 막아야 함
		event.preventDefault();
		if (toDo === "") {
			return;
		} else {
			// toDo = ""; 처럼 직접적으로 state를 수정하는 것이 아니라 setState를 사용함을 잊지말자.
			// 배열도 마찬가지다. toDos.push()는 안 됨.
			// setState에서는 직접 값을 주는 방식과 함수를 주고 리턴값으로 set하는 방식이 있다.
			// function(currentValue) {return} 과 동일한거임
			// currentArray는 현재 State. setState에서 함수를 보내면 함수의 첫 번째 인자는 state로 간주한다.
			// state는 항상 새로운 값으로 set함을 잊지말자.
			setToDos((currentArray) => [toDo, ...currentArray]);
			setToDo("");
		}
	};
	// console.log를 onSubmit 내부에 넣으면 이전 toDos가 출력된다.
	// 함수가 완전히 끝나야 반영된다.
	// setState도 비동기이고, 컴포넌트가 렌더링 될 때 이전값을 기준으로 판단하기 떄문.
	// setState가 동기적으로 그 값을 반영한다는 guarantee가 없다.
	// pending 상태에 있기 때문에 적어도 해당 렌더링 과정에서는 결과값이 반영될 수도, 그러지 않을 수도 있음
	// onSubmit 혹은 ToDos가 변경될 때만 출력하고 싶으면 setTodos 내에 consoloe.log를 추가하거나 todos에 대한 useEffect를 만든다.
	console.log(toDos);

	const deleteBtn = (index) => {
		setToDos(toDos.filter((item, todoIndex) => index !== todoIndex));
	};

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
			<hr />

			<ul>
				{
					// 컴포넌트dptj 리스트를 렌더할 때는 key라는 Prop를 넣어야 한다.
					toDos.map((item, index) => (
						<li key={index}>
							{item}
							<button onClick={() => deleteBtn(index)}>❌</button>
						</li>
					))
				}
			</ul>
		</div>
	);
}

export default App;
