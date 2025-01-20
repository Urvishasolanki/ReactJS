function Products(props) {
  // console.log(props.arr)
  
  return (
    <div>
      <h1>products</h1>{
        props.arr.map((el,index) => {
          console.log(el.img)
          return <div>
             <div key={index}>
            <div className="box">
              <div className="card">
                <div className="imgs">
                  <img src={el.img} alt={el.title} />
                  
      
                </div>
                <div className="descrip">
                <h1>{el.price}</h1>
                <h2>{el.title}</h2>
                <h2>{el.des}</h2>
      
   </div>
                </div>
              </div>
            </div>
          </div>
      
        })
      }
    </div>
  )
}
export default Products