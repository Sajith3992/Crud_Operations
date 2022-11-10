import React,{useState, useEffect} from 'react';
import firebaseApp from '../firebase';
import{useHistory , useParams, Link} from 'react-router-dom';
import "./View.css"

const View = () => {
  const [user, setUser] = useState({});

  const {id} = useParams();

  useEffect(() =>{
    firebaseApp.child(`contact/${id}`).get().then((snapshot)=>{
      if (snapshot.exisis()) {
        setUser({...snapshot.val()})
      }else{
        setUser({})
      }
    })
  },[id])
 console.log("user", user);
  return (
    <div style={{marginTop:"100px"}}>
      <h1> View </h1>
    </div>
  )
}

export default View
