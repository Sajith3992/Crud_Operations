import React,{useEffect, useState} from 'react'
import firebaseApp from '../firebase';
import { Link } from 'react-router-dom';
import "./Home.css";
import { toast } from 'react-toastify';

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
  const onDelete =(id) => {
    if(window.confirm("Are you sure that you want to delete that contact")){
      firebaseApp.child(`contacts/${id}`).remove((err)=>{
        if(err){
          toast.error(err)
        }else{
          toast.success("Contact Deleted Successfully")
        }
      })
    }
  }
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
           <td>
           <Link to={`/update/${id}`}>
           <button className="btn btn-edit">Edit</button>
           </Link>
           <button className="btn btn-delete" onClick={()=>onDelete(id)}>Delete</button>
           <Link to={`/view/${id}`}>
           <button className="btn btn-view">View</button>
           </Link>
           </td>
           </tr>
        );
        })};
        <tbody>

        </tbody>
      </table>
      <label>Sort By:</label>
      <select className='drodawn' name='colvalue' onChange={handleChange}>
        <option></option>
      </select>
    </div>
  );
}

export default Home
