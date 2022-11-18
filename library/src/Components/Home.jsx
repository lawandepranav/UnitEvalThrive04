import React, { useState } from "react";
import axios from "axios"
import "./home.css"

const Home=()=>{
    const [title,settitle] = useState()
    const [author,setAuthor] = useState()
    const [content,setContent] = useState()
    const [date,setDate]  = useState()
    const [category, setCategory] = useState()
    const [price, setPrice]=useState()
  
  
    const handleSubmit=(e) =>{
      e.preventDefault();
      const data = {
      title,
      author,
      content,
      date,
      category,
      price
    };
  
  axios({
      method: 'post',
      url: ` http://localhost:8000/book-list`,
      data: data,
  })
  .then(function (response) {
      console.log(response);
  })
  .catch(function (error) {
      console.log(error);
  });
    }
  
    return (
      <div >
        <h1>Add new Book</h1>
        <input className="input_box" type="text" placeholder='Enter Name' onChange={(e)=>{
          settitle(e.target.value)
        }} />
        
        <input className="input_box"  type="text" placeholder='Enter Author'   onChange={(e)=>{
          setAuthor(e.target.value)
        }} /> 
       
         <input  className="input_box" type="text" placeholder='Description'  onChange={(e)=>{
          setContent(e.target.value)
        }} />
        
        <input  className="input_box" type="text" placeholder='Category' onChange={(e)=>{
          setCategory(e.target.value)
        }} />
      
        <input  className="input_box"  type="date" placeholder='Price' onChange={(e)=>{
          setPrice(e.target.value)
        }} />
       
        
        <button className="submit_but" type="submit" onClick={handleSubmit}>Submit</button>
      
      </div>
    )
}
export default Home;