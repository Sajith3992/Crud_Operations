import React, {useState, useEffect} from "react";
import { useHistory, useParams } from "react-router-dom";
import "./AddEdit.css";
import fireDb from "../firebase";
import {toast} from "react-toastify";


const initialState = {
  name: "",
  email: "",
  contact: ""
}

const AddEdit = () => {
  return (
    <div>
      <h2>Add AddEdit</h2>
    </div>
  )
}

export default AddEdit
