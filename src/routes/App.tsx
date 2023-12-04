import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from '../pages/Home';


const App = () => {
	return (
		<Router basename="/Resto">
			<Routes>
				<Route path="/" element={<Home />} />
			</Routes>
		</Router>
	);
};

export default App;