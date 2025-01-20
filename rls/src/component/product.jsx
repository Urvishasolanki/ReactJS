// product page 

import React , {useEffect, useState} from "react";
import ProductFrom from "./productForm";
import ProductList from "./productList";

function Product()
{
    const[hide,setHide] = useState(true)
    const[State,setState] = useState({
        img:"",
        title:"",
        price:""
    })

    const[Arr,setArr] = useState([])
    const inputValue = (e)=>{
        
        setState({ ...State, [e.target.name]:e.target.value})
        //
        // ...State,[e.target.name]:e.target.value
    }
     console.log(State);
   
    const formValue =(e)=>{
        e.preventDefault();
         setArr([...Arr,State])
    }
    console.log(Arr);

    
   
     return( 
       <div>
        <button onClick={()=>{setHide(true)}}>form</button>
        <button onClick={()=>{setHide(false)}}>product</button>
        {hide == true ? <ProductFrom InputValue={inputValue} FormValue={formValue} />:<ProductList arr={Arr} /> }
        </div>
     )
}


export default Product