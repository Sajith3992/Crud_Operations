import React,{useEffect, useState} from 'react'
import firebaseApp from '../firebase';
import { Link } from 'react-router-dom';
import "./Home.css";

const Home = () => {
  const [data, setData] = useState({});

  useEffect(() =>{
    firebaseApp.child("contact").on("value",(snapshot)=>{
      if()
    })
  })
  return (
    <div>
      <h2>Home</h2>
    </div>
  )
}

export default Home
