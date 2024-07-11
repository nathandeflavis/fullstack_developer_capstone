import LoginPanel from "./components/Login/Login"
import RegisterPanel from "./components/Register/Register";
import { Routes, Route } from "react-router-dom";
//import Dealer component
import Dealers from './components/Dealers/Dealers';
//import route to Dealer REACT component
import Dealer from "./components/Dealers/Dealer"

function App() {
  //add routes
  return (
    <Routes>
      <Route path="/login" element={<LoginPanel />} />
      <Route path="/register" element={<RegisterPanel />} />
      <Route path="/dealers" element={<Dealers/>} />
      <Route path="/dealer/:id" element={<Dealer/>} />
    </Routes>
  );
}
export default App;
