import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Index from './Index.jsx'
import Dashboard from './Dashboard.jsx'
import About from './About.jsx'
import Login from './auth/login.jsx'
import Register from './register/register.jsx'
import RoomInfo from './roomInfo.jsx'

export default function App() {
  return (
    <div className="App">
    <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="about" element={<About />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />}/>
          <Route path="/room-info" component={RoomInfo} />
        </Routes>
      </Router>
    </div>
  );
}
