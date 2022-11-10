import React,{useEffect, useState} from 'react'
import firebaseApp from '../firebase';
import { Link } from 'react-router-dom';
import "./Home.css";
import { toast } from 'react-toastify';

const Home = () => {
  const [data, setData] = useState({});
  const [sortedData, setSortedData] = useState({})
  const [sort, setSort] = useState(false);

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
      });
    }
  };
  const handleChange = (e) =>{
    setSort(true);
    firebaseApp.child('contacts').orderByChild(`${e.target.value}`).on("value", (snapshot) =>{
      let startedData =[];
      snapshot.forEach((snap)=>{
        sortedData.push(snap.val())
      });
      setSortedData(sortedData);
    })
  };
  const handleReset = () => {};
    setSort(false);
  return (
    <div style={{margintop: "100px"}}>
      <table className='style-table'>
        <thead>
            <tr>
              <th style={{textAlign:"center"}}>No. </th>
              <th style={{textAlign:"center"}}>Name </th>
              <th style={{textAlign:"center"}}>Email </th>
              <th style={{textAlign:"center"}}>Contact </th>
              <th style={{textAlign:"center"}}>Status </th>
             {sort && (<th style={{textAlign:"center"}}>Action </th>)} 
            </tr>
        </thead>
        {!sort && (
           <tbody>
           {!sort}
         {Object.keys(data).map((id, index) =>{
           return(
            <tr key={id}>
            <th scope='row'> {index + 1}</th>
            <td>{data[id].name}</td>
            <td>{data[id].email}</td>
            <td>{data[id].contact}</td>
            <td>{data[id].status}</td>
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
         })}
         </tbody>
        )}
       
         {sort &&(
          <tbody>
            {sortedData.map((item, index) => {
                <tr key={index}>
                <th scope='row'> {index + 1}</th>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.contact}</td>
                </tr>
            })}
          </tbody>
         )}
      </table>
      <label>Sort By:</label>
      <select className='dropdawn' name='colvalue' onChange={handleChange}>
        <option>Please select</option>
        <option value='name'>Name</option>
        <option value='email'>Email</option>
        <option value='contact'>Contact</option>
        <option value='status'>Status</option>
      </select>
      <button className='btn btn-reset' onClick={handleReset}>Reset</button>
      <br/>
    </div>
  );
}

export default Home
