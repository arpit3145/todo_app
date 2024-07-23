import axios from "axios";
import { ADDNEW_TODO } from "./type";

const API_URL = 'http://localhost:8000';

export const addNewTodo =(description)=> async(dispatch) =>{
    try{
    const res = await axios.post(`${API_URL}/todos`,{description});

    dispatch({type : ADDNEW_TODO ,payload: res.data})
    }catch(error){
        console.log('Error while calling addNewTodo API', error.message)
    }
}

export const getAllTodos =()=>async(dispatch)=>{
    try{
       const res = await axios.get(`${API_URL}/todos`)
       
    }catch(error){
        console.log('Error while calling getAllTodos API ',error.message)
    }
}