import React,{useEffect,useState} from 'react';
import {Link, useLocation} from 'react-router-dom';
import "./Header.css";

const Header = () => {
    const [activeTab, setActiveTab]= useState("Home");
    const location = useLocation();
    const [search, setSearch] = useState("");

    useEffect(()=>{
        if(location.pathname === "/"){
            setActiveTab("Home")
        }else if(location.pathname === "/add"){
            setActiveTab("Addcontact")
        }else if(location.pathname === "/about"){
            setActiveTab("About")
        }
    },[location]);
     
    const handleSubmit =(e) =>{
        e.preventDefault()

    }
  return (
    <div className='header'>
        <p className='logo'>Contact App</p>
        <div className='header-right'>
            <form onSubmit={handleSubmit}>
                <input
                type="text"
                className='inputField'
                placeholder='Serach Name ..'
                onChange={(e) => setSearch(e.target.value)}
                value={search}
                />
            </form>
            <Link to="/">
                <p className={`${activeTab === "Home" ? "Active" : ""}`} onClick ={() => setActiveTab("Home")}>
                    Home
                </p>
            </Link>

            <Link to="/add">
            <p className={`${activeTab === "AddContact" ? "Active" : ""}`} onClick ={() => setActiveTab("AddContact")}>
                    Add Contact
                </p>
            </Link>

            <Link to="/about">
            <p className={`${activeTab === "About" ? "Active" : ""}`} onClick ={() => setActiveTab("About")}>
                    About
                </p>
            </Link>
        </div>
    </div>
  )
}

export default Header
