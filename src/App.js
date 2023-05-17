import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./components/HomePage";
import ResultsPage from "./components/ResultsPage";
import ContactPage from "./components/ContactPage";
import BusinessPage from "./components/BusinessPage";
import SportsPage from "./components/SportsPage";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route exact path="/" element={<HomePage />} />
				<Route exact path="/business" element={<BusinessPage />} />
				<Route exact path="/sports" element={<SportsPage />} />
				<Route exact path="/contact" element={<ContactPage />} />
				<Route exact path="/add-article" element={<h1>Add new</h1>} />
				<Route exact path="/results" element={<ResultsPage />} />
				<Route path="/:heading" element={<h1>Article Details Page</h1>} />
				<Route path="*" element={<h1>Error 404 Page Not Found</h1>} />
			</Routes>
		</div>
	);
}

export default App;
