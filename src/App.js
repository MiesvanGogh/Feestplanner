import './App.css';
import Home from './Home';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import Feesten from './Feesten';
import Vrienden from './Vrienden';
import CreateFeesten from './CreateFeesten';
import EditUser from './EditUser';

function App() {
  return (
    <body>
      <div className="Background">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/Feesten" element={<Feesten />} />
            <Route path="/Vrienden" element={<Vrienden />} />
            <Route path="/CreateFeesten" element={<CreateFeesten />} />
            <Route path="/EditUser" element={<EditUser />} />
          </Routes>
        </BrowserRouter>
      </div>
    </body>
  );
}

export default App;
