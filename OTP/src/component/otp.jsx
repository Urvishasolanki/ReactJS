import React,{ useRef,useEffect} from "react"


function Otp(){
    const titleRef = useRef(null)
    const titleRef1= useRef(null)
    const titleRef2 = useRef(null)
    const titleRef3 = useRef(null)
    const handlesubmit=(e)=>{
        e.preventDefault();
        let str = titleRef.current.value + "" +titleRef1.current.value + "" +titleRef2.current.value + ""+titleRef3.current.value
        console.log(str);
        
    }
    useEffect(() => {
       
        titleRef.current.focus();
    }, []);

    const handleInput = (e, nextRef,prevref) => {
       
        if (e.target.value.length === 1 && nextRef) {
            nextRef.current.focus();
        }
        else if(e.target.value.length === 0){
           prevref.current.focus()
        }
    };
    return (
       <div className="f">
        <form action="" onSubmit={handlesubmit}>
            <input type="text" ref={titleRef} placeholder="Enter otp"onChange={(e) => handleInput(e, titleRef1)}/>
            <input type="text"  ref={titleRef1} onChange={(e) => handleInput(e, titleRef2,titleRef)}/>
            <input type="text" ref={titleRef2} onChange={(e) => handleInput(e, titleRef3, titleRef1)}/>
            <input type="text" ref={titleRef3} onChange={(e) => handleInput(e,null,titleRef2)}/>
            <button>submit</button>
        </form>
       </div>
    )

}
export default Otp