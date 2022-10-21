import './App.css';
import Home from './Home';
import { Route, Routes , BrowserRouter } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import Feesten from './Feesten';

function App() {
  return (
    <body>
        <div className="Background">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route  path="/Login" element={<Login/>} />
              <Route  path="/Register" element={<Register/>} />
              <Route  path="/Feesten" element={<Feesten/>} />
            </Routes>
          </BrowserRouter>
        </div>
    </body>

  );
}

export default App;
