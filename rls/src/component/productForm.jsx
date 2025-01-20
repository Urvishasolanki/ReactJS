import React from "react";
import ProductList from "./productList";



function ProductFrom({InputValue,FormValue})
{
    return(
       <div>
             <form action="" onSubmit={FormValue} >
                 <input type="text" name="img" id=""  placeholder="img" onChange={InputValue}/>
                 <input type="text" name="title" id=""  placeholder="title" onChange={InputValue} />
                 <input type="text" name="price" id="" placeholder="price" onChange={InputValue} />
                 <input type="submit"  id=""    />
                 {/* <ProductList  /> */}
             </form>
    </div>
      
    )
}

export default ProductFrom