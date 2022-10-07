import './App.css';
import Home from './Home';
import { Route, Routes , BrowserRouter } from 'react-router-dom';
import Login from './Login';
import Register from './Register';

function App() {
  return (
    <div className="App">
              <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route  path="/Login" element={<Login/>} />
                <Route  path="/Register" element={<Register/>} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
