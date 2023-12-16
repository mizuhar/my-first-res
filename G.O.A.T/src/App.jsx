import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./components/contexts/TodoContext";
import Home from "./components/Home/Home"
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";



function App() {

  return (
    <>
    <AuthProvider>
      {/* <Home></Home> */}
      <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>

      </Routes>      

    </AuthProvider>
    </>
  )
}

export default App
