import React, {useState, useEffect} from "react";
import { useHistory, useParams } from "react-router-dom";
import "./AddEdit.css";
import fireDb from "../firebase";
import {toast} from "react-toastify";


const initialState = {
  name: "",
  email: "",
  contact: ""
}

const AddEdit = () => {
  const [state, setState] = useState(initialState);
  const [data , setData] =  useState({});

  const {name, email, contact} = state;
  const handleInputChange = () => {};
const handleSubmit =() =>{};
  return (
    <div style={{margintop:"100px"}}>
      <form style={{margin:"auto",
       padding:"15px",
       maxwidth:"400px",
       alignContent:"center"}}
       onSubmit={handleSubmit}
       >
        <label htmlFor="name">Name</label>
        <input type="text"id="name" name="name"placeholder="Your Name.."value={name}
        onChange={handleInputChange}/>
       </form>
      
    </div>
  )
}

export default AddEdit
