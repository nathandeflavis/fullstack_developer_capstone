import LoginPanel from "./components/Login/Login"
import RegisterPanel from "./components/Register/Register";
import { Routes, Route } from "react-router-dom";
//import Dealer component
import Dealers from './components/Dealers/Dealers';

function App() {
  //add route for /dealers
  return (
    <Routes>
      <Route path="/login" element={<LoginPanel />} />
      <Route path="/register" element={<RegisterPanel />} />
      <Route path="/dealers" element={<Dealers/>} />
    </Routes>
  );
}
export default App;
