import {BrowserRouter, Routes, Route} from "react-router-dom";

import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import ContentPage from "./pages/ContentPage";
import NavigateBackButton from "./components/NavigateBackButton.jsx";

import styles from "./App.module.css";

function App ()
{
	const data = [
		{
			id: "mercury",
			title: "Mercury",
			content: "Mercury is the closest planet to the Sun, and the smallest planet in our solar system. It's only slightly larger than Earth's Moon."
		},
		{
			id: "venus",
			title: "Venus",
			content: "Venus is the second planet from the Sun, and the sixth largest planet. It's the hottest planet in our solar system."
		},
		{
			id: "earth",
			title: "Earth",
			content: "Earth, our home planet, is the third planet from the Sun, and the fifth largest planet. It's the only place we know of inhabited by living things."
		},
		{
			id: "mars",
			title: "Mars",
			content: "Mars is the fourth planet from the Sun, and the seventh largest. It's the only planet we know of inhabited entirely by robots."
		},
		{
			id: "milkyway",
			title: "Milky Way",
			content: "The Milky Way is a huge collection of stars, dust and gas. It's called a spiral galaxy because if you could view it from the top or bottom, it would look like a spinning pinwheel."
		}
	];

	return (
		<div className={styles.mainContainer}>
			<BrowserRouter>
				<NavBar data={data} />

				<Routes>
					<Route
						path="/"
						element={<HomePage />}
					/>

					{
						data.map(dataElement => (
							<Route
								key={dataElement.id}
								path={`/content/${dataElement.id}`}
								element={<ContentPage data={dataElement} />}
							/>
						))
					}
				</Routes>

				<NavigateBackButton />
			</BrowserRouter>
		</div>
	);
}

export default App;
