import { Routes, Route } from "react-router-dom";
import BoxerDetails from "./components/BoxerDetails/BoxerDetails";
import BoxerList from "./components/BoxerList/BoxerList";
import { AuthProvider } from "./components/contexts/TodoContext";
import CreateBoxer from "./components/CreateBoxer/CreateBoxer";
import Home from "./components/Home/Home"
import Login from "./components/Login/Login";
import Logout from "./components/Logout/Logout";
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
            <Route path="/logout" element={<Logout />}></Route>
            <Route path="/boxers" element={<BoxerList />}></Route>
            <Route path="/boxers/:boxerId" element={<BoxerDetails />}></Route>
            <Route path="/boxers/create" element={<CreateBoxer />}></Route>

      </Routes>      

    </AuthProvider>
    </>
  )
}

export default App
