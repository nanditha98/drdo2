import React,{useState,useEffect} from "react";
import {useNavigate} from "react-router-dom";
import Header from "./Header";


function Login(){
    const[username,setUserName]=useState('');
    const[password,setPassword]=useState('');
    const navigate = useNavigate();
    useEffect(()=>{
        if(localStorage.getItem('user-info')){
            navigate('/add')
        }
    },[])
    function login(){
        console.warn('data',username,password);
        let item=(username,password)
        let result= fetch('http://localhost:8000/api/login',{
            method:'POST',
            headers:{
                "content-Type":"application/json",
                "Accept":"application/json"
            },
            body:JSON.stringify(item)
    })
    result=result.json();
    localStorage.setItem('user-info',JSON.stringify(result));
    navigate('/add')
    }
    return(
        <div>
            <Header/>
            <h1>Login</h1>
        <input type='text' className="form-control" placeholder="username" onChange={(e)=>setUserName(e.target.value)}/>
       < input type='text' placeholder='password' onChange={(e)=>setPassword(e.target.value)} />
       <button className="btn btn-primary" onClick={login}>login</button>
        </div>
    )
}

export default Login;