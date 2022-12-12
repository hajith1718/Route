import Home from "./home";
import About from "./abbout";
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import "./App.css";
function App() {
  return (
  <>
  <Router>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
    </Routes>
  </Router>

  </>   
  );
};

export default App;