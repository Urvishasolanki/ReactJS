import { useState } from 'react'
import './product.css'
function Userdata() {
    const [state, setstate] = useState(true)
    const [image,setimage] = useState("")
    const [title,settitle] = useState("")
    const [price,setPrice] = useState("")
    const [des,setdes] = useState("")
    const [arr,setArray] = useState([])
   

    const submithandle = () =>{

        let obj = {
         image,
         title,
         price,
         des
        }
        setArray([...arr,obj])
            setimage("")
            settitle("")
            setPrice("")
            setdes("")
  
      }
      console.log(arr)

      const render = (el)=>{
    console.log(el)
      }
   
    return (
        <div>
            
                <div className="main">
                     <nav>
                         <button onClick={() => setstate(true)}>Form</button>
                         <button onClick={() => setstate(false)}>Products</button>
                     </nav>
                       {state ? <div className="box">
                            <h1>product data</h1>
                            <input type="text" placeholder="Enter product img url" onChange={(el)=>{setimage(el.target.value)}}/><br></br>
                            <input type="text" placeholder="Enter product title" onChange={(el)=>{settitle(el.target.value)}}/><br></br>
                            <input type="text" placeholder="Enter product price" onChange={(el)=>{setPrice(el.target.value)}}/><br></br>
                            <input type="text" placeholder="Enter product description" onChange={(el)=>{setdes(el.target.value)}}/><br></br>

                            <input type="submit" onClick={submithandle} id="btn" placeholder="submit" />
                            {/* <p onClick={() => { setstate(false) }}>see product</p>  */}
                           
                        </div>
                        :<div className='prod'>
                            <h1>products</h1>
                            <div className="produs">
                            {
                                
                                arr.map((el, index) =>{
                               return (
                                
                                <div className="product-item">
                                <img src={el.image} alt={el.title} className="product-img" />
                                <h2>title:{el.title}</h2>
                                <p>Price: ${el.price}</p>
                                <p>des:{el.des}</p>
                              </div>)
                                })
                            }
                            </div>
                            
                            
                        </div> }
                    </div>
    
        </div>

    )

}
export default Userdata