import { useEffect, useState } from "react";
import "./App.css";
import spacerIcon from "./assets/Group.png";
import { BsFillDice5Fill } from "react-icons/bs";

function App() {
	useEffect(() => {
		fetchAdvice();
	}, []);
	const [data, setData] = useState();
	const [fetching, setFetching] = useState(false);
	const fetchAdvice = () => {
		setFetching(true);
		fetch("https://api.adviceslip.com/advice", { cache: "no-store" })
			.then((res) => res.json())
			.then((data) => {
				setTimeout(() => {
					setFetching(false);
					setData(data);
				}, 500);
			});
	};
	return (
		<main>
			<div className="card">
				<p>Advice #{data ? data.slip.id : 0}</p>
				<h2>“{data ? data.slip.advice : "Fetching advice..."}”</h2>
				<div className="seperator">
					<div className="line"></div>
					<img src={spacerIcon} className="icon" />
					<div className="line"></div>
				</div>
				<button onClick={() => fetchAdvice()}>
					{fetching ? <div className="loader"></div> : <BsFillDice5Fill />}
				</button>
			</div>
		</main>
	);
}

export default App;
