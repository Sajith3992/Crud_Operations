import React,{useEffect, useState} from 'react';
import{useLocation, Link} from 'react-router-dom';
import firebaseApp from '../firebase';
import "./Search.css"


const Search = () => {
    const [data, setData] = useState({});

    const useQuery = () =>{
        return new URLSearchParams(useLocation().search();)
    }

    let query =useQuery();
    let search = query.get("name");

  return (
    <div>
      <h2> Search</h2>
    </div>
  )
}

export default Search
