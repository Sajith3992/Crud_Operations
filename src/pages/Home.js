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
              <th style={{textAlign:"center"}}>Name </th>
              <th style={{textAlign:"center"}}>Email </th>
              <th style={{textAlign:"center"}}>Contact </th>
              <th style={{textAlign:"center"}}>Action </th>
            </tr>
        </thead>
        {Object.keys(data).map((id, index) =>{
          return(
           <tr key={id}>
           <th scope='row'> {index + 1}</th>
           <td>{data[id].name}</td>
           <td>{data[id].email}</td>
           <td>{data[id].contact}</td>
           </tr>
        )
        })}
        <tbody>

        </tbody>
      </table>
    </div>
  )
}

export default Home
