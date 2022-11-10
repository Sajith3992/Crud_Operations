import React,{useEffect, useState} from 'react';
import{useLocation, Link} from 'react-router-dom';
import firebaseApp from '../firebase';
import "./Search.css"


const Search = () => {
    const [data, setData] = useState({});

    const useQuery = () =>{
        return new URLSearchParams(useLocation().search());
    }

    let query =useQuery();
    let search = query.get("name");
    console.log("search", search);

    useEffect(() =>{
        searchData();
    },[search])

    const searchData = () =>{
        firebaseApp.child("contacts").orderByChild("name").equelTo(search).on("value", (snapshot)=>{
            if (snapshot.val()) {
                const data = snapshot.val();
                setData(data);
            }
        } )
    }
  return (
    <div>
      <h2> Search</h2>
    </div>
  )
}

export default Search
