import './App.css';
import TradingPage from './components/TradingPage/TradingPage';
import Login from './components/Login/Login';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom' 
import Signup from './components/Signup/Signup';
import ErrorPage from './components/ErrorPage/ErrorPage';

function App() {
  return (
    <Router>
      <div className="content">
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/trading/:id' element={<TradingPage />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;
