import React from 'react'
import { useState } from 'react';
import axios from 'axios'
export default function Create() {
    const [blogs, setblogs] = useState({ url : "",title: "", Description: "" });
   
    const handleOnChange = (e) => {
        const {name, value} = e.target;
        setblogs({...blogs, [name]: value});
      }
      console.log(blogs)
        const handleSubmit = (e) =>{
            e.preventDefault();
            
            axios.post("http://localhost:3000/blog", blogs)
            .then((res) =>{
              alert("Your response submited successfully!")
            })
            .catch((err) => {
              console.log(err);
            })
        
            setFormData({
              url: "",
              title: "",
              Description: ""
            })
          }
        
          
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" placeholder='Enter img url here' name = "url" onChange={handleOnChange}/><br></br>
        <input type="text" placeholder='Enter title' name="title" onChange={handleOnChange}/><br></br>
        <input type="text" placeholder='Enter Description' name="Description" onChange={handleOnChange}/><br></br>
        <button type='submit'>submit</button>
      </form>
    </div>
  )
}
