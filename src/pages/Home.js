import React,{useEffect, useState} from 'react'
import firebaseApp from '../firebase';
import { Link } from 'react-router-dom';
import "./Home.css";

const Home = () => {
  const [data, setData] = useState({});

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
  },[]);
  return (
    <div style={{margintop: "100px"}}>
      <table className='style-table'>
        <thead>
            <tr>
              <th style={{textAlign:"center"}}>No. </th>
              <th style={{textAlign:"center"}}>No. </th>
              <th style={{textAlign:"center"}}>No. </th>
              <th style={{textAlign:"center"}}>No. </th>
              <th style={{textAlign:"center"}}>No. </th>
            </tr>
        </thead>
      </table>
    </div>
  )
}

export default Home
