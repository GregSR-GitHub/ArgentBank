import Home from '../pages/Home';
import Login from '../pages/Login';
import User from '../pages/User';
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
            <Route path="/sign-in"  element={<Login />} /> 
            <Route path="/user"  element={<User />} /> 
          </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
