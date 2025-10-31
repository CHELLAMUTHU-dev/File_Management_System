import { Routes,Route } from "react-router-dom";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Dashboard } from "./pages/Dashboard";
import { getToken } from "./utils/auth";
import "./App.scss";

const App = () => {
  const token = getToken()
  console.log(token)
  return(
  <Routes>
    <Route path="/" element={token ? <Dashboard/>: <Login/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/register" element={<Register/>}/>
  </Routes>
)}

export default App