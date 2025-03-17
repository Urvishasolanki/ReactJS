function Mainrouts(){
 return(
    <div>
    <Routes>
    <Route path="/" element="<Home/>"></Route>
    <Route path="/cart" element="<cart/>"></Route>
    <Route path="/form" element="<From/>"></Route>
    <Route path="/men" element="<Men/>"></Route>
    <Route path="/women" element="<Women/>"></Route>
    <Route path="/singleproduct" element="<Singleproduct/>"></Route>
   </Routes>
   </div>
 )
}
export default Mainrouts