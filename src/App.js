import { useState } from "react";
import Tours from "./components/Tours";
import Data from "./Data";

function App() {

	const [tours, setTours] = useState(Data);

	function removeTour(id) {
		const newTours = tours.filter(tour => tour.id !== id);
		setTours(newTours);
	}

	function refreshHandler() {
		setTours(Data);
	}

	if (tours.length == 0) {
		return (
			<div>
				<h2 className="head">Plan for Love</h2>
				<div className="refresh">
					<h2>No Tour Left</h2>
					<button className="white-btn" onClick={refreshHandler}>Refresh</button>
				</div>
			</div>
		)
	}

	return (
		<div>
			<Tours tours={tours} removeTour={removeTour}></Tours>
		</div>
	);
}

export default App;
