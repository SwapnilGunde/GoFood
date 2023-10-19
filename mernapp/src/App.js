
import './App.css';
import Home from './Screens/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Login from './Screens/Login';
import "../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import SignUp from './Screens/SignUp';
import { Cartprovider } from './Components/ContextReducer';
import MyOrder from './Screens/MyOrder';

function App() {
  return (
    <Cartprovider>
      <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Home></Home>}></Route>
          <Route exact path="/Login" element={<Login></Login>}></Route>
          <Route exact path="/SignUp" element={<SignUp></SignUp>}></Route>
          <Route exact path="/myOrder" element={<MyOrder></MyOrder>}></Route>
        </Routes>
      </div>
    </Router>
    </Cartprovider>
    
  );
}

export default App;