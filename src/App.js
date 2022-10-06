import './App.css';
import Home from './Home';
import { Route, Routes , BrowserRouter } from 'react-router-dom';
import { Login, CreateUser } from './Components/Login/Index'

function App() {
  return (
    <div className="App">
              <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route  path="/Accountaanmaken" element={<Accountaanmaken/>} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
