import React, {useState, useEffect} from "react";
import { useHistory, useParams } from "react-router-dom";
import "./AddEdit.css";
// import fireDb from "../firebase";
import firebaseApp from "../firebase";
import {toast} from "react-toastify";


const initialState = {
  name: "",
  email: "",
  contact: "",
  status: ""
}

const AddEdit = () => {
  const [state, setState] = useState(initialState);
  const [data , setData] =  useState({});

  const {name, email, contact, status} = state;

  const history = useHistory();

  const {id} = useParams();

  useEffect(() =>{
    firebaseApp.child("contact").on("value",(snapshot)=>{
      if(snapshot.val()!== null){
        setData({...snapshot.val()})
      }else{
        setData({});
      }
    });
      return() => {
        setData({});
      }
  },[id]);

  useEffect(() =>{
      if(id){
        setState({...data[id]})
      }else{
        setState({...initialState})
      }
      return () =>{
        setState({...initialState})
      }
  },[id,data])

  const handleInputChange = (e) => {
    const{name, value} = e.target;
    setState({...state, [name]: value});
  };
const handleSubmit =(e) =>{
  e.preventDefault();
  if(!name || !email || !contact || !status){
    toast.error("please provide value is each input field")
  }else{
    if(!id){
      firebaseApp.child("contact").push(state, (err) =>{//fireDb
        if(err){
          toast.error(err);
        }else{
          toast.success("contact Added Sucessfuly");
        }
      });
    }else{
      firebaseApp.child(`contact/${id}`).set(state, (err) =>{//fireDb
        if(err){
          toast.error(err);
        }else{
          toast.success("contact Updated Sucessfuly");
        }
      });
    }

    setTimeout(() => history.push("/"), 5000);
  }
};

  return (
    <div style={{margintop:"100px"}}>
      <form style={{margin:"auto",
       padding:"15px",
       maxwidth:"400px",
       alignContent:"center"}}
       onSubmit={handleSubmit}
       >
        <label htmlFor="name">Name</label>
        <input type="text"id="name" name="name"placeholder="Your Name.."value={name || ""}
        onChange={handleInputChange}/>

      <label htmlFor="email">Email</label>
        <input type="text"id="email" name="email"placeholder="Your Email.."value={email || ""}
        onChange={handleInputChange}/>
       
       <label htmlFor="Contact">Contact</label>
        <input type="number"id="contact" name="contact"placeholder="Your Contact Number.."value={contact || ""}
        onChange={handleInputChange}/>

        <label htmlFor="name">Status</label>
        <input type="text"id="status" name="status"placeholder="Your Status.."value={status || ""}
        onChange={handleInputChange}/>

       </form>
       <input type="submit" value={id ? "Update" : "save"}/>
      
    </div>
  )
}

export default AddEdit
