import Home from '../pages/Home';
import Login from '../pages/Login';
import Profile from '../pages/User';
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import './App.css';
import { BrowserRouter as Router , Route, Routes} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
            <Route exact path="/"  element={<Home />} /> 
            <Route path="/login"  element={<Login />} /> 
            <Route path="/profile"  element={<Profile />} />
            <Route path="*"  element={<Home />} /> 
          </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
