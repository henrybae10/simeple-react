import { useEffect, useState } from "react";

function App() {
	const [loading, setLoading] = useState(true);
	const [coins, setCoins] = useState([]);
	useEffect(() => {
		fetch("https://api.coinpaprika.com/v1/tickers").then((response) =>
			response.json().then((json) => {
				setCoins(json);
				setLoading(false);
			})
		);
	}, []);

	return (
		<div>
			<h1>The Coins! {loading ? "" : `(count: ${coins.length})`}</h1>
			{loading ? (
				<strong>Loading...</strong>
			) : (
				<div>
					<select>
						{coins.map((coin, index) => {
							return (
								<option key={index}>
									{coin.name} ({coin.symbol})
								</option>
							);
						})}
					</select>
					<ul>
						{coins.map((coin, index) => {
							return (
								<li key={index}>
									{coin.name} ({coin.symbol})
								</li>
							);
						})}
					</ul>
				</div>
			)}
		</div>
	);
}

export default App;
