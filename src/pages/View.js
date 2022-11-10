import React,{useState, useEffect} from 'react';
import firebaseApp from '../firebase';
import{useHistory , useParams, Link} from 'react-router-dom';
import "./View.css"

const View = () => {
  const [user, setUser] = useState({});
  return (
    <div>
      <h1> View </h1>
    </div>
  )
}

export default View
