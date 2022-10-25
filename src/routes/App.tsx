import '../assets/css/app.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from '../pages/home';
import About from '../pages/about';
import Contact from '../pages/contact';


const App = () => {
  return (
    <>
      <Router basename="/Resto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}


export default App;
