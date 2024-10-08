import LoginPanel from "./components/Login/Login"
import RegisterPanel from "./components/Register/Register";
import { Routes, Route } from "react-router-dom";
//import Dealer component
import Dealers from './components/Dealers/Dealers';
//import route to Dealer REACT component
import Dealer from "./components/Dealers/Dealer"
//import PostReview component
import PostReview from "./components/Dealers/PostReview";

function App() {
  //add routes
  return (
    <Routes>
      <Route path="/login" element={<LoginPanel />} />
      <Route path="/register" element={<RegisterPanel />} />
      <Route path="/dealers" element={<Dealers/>} />
      <Route path="/dealer/:id" element={<Dealer/>} />
      <Route path="/postreview/:id" element={<PostReview/>} />
    </Routes>
  );
}
export default App;
