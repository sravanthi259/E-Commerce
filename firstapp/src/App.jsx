import{BrowserRouter,Routes,Route} from "react-router-dom";
 import Home from './components/Home.jsx'
 import Register from"./components/Register.jsx";
 import Login from"./components/Login.jsx";
 import Navigations from "./components/Navigations.jsx";
 export default function App()
 {
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Register" element={<Register/>}/>
            <Route path="/Login" element={<Login/>}/>
            <Route path="/Navigations" element={<Navigations/>}/>
        </Routes>
        
        </BrowserRouter>
    )
        
 }