import { Route, Routes } from "react-router"
import Home from "../Pages/home"
import Product from "../Pages/product"
import About from "../Pages/about"
import From from "../Pages/form"
import Editpage from "../Pages/editpage"

function Mainrouts(){
    return(
    <div>
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/product" element={<Product/>}></Route>
            <Route path="/about" element={<About/>}></Route>
            <Route path="/form" element={<From />}></Route>
            <Route  path="/editpage/:id" element={<Editpage />}></Route>
        </Routes>
    </div>
    )
}
export default Mainrouts