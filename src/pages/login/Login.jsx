import { useContext, useRef, useState } from "react";
import "./login.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { Context } from '../../context/context';

export default function Login() {
  const userRef = useRef();
  const pwdRef = useRef();
  const { user, dispatch, isFetching } = useContext(Context)
  const handleLogin = async (e)=>{
    e.preventDefault();
    dispatch({ type: "LOGIN_START" })
    try{
      const res = await axios.post("http://localhost:5500/api/auth/login", {
      username: userRef.current.value,
      password: pwdRef.current.value,
      })
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data })
    }catch(err){
      dispatch({ type: "LOGIN_FAIL" })
    }
  }
  console.log(user);
  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm" onSubmit={handleLogin}> 
        <label>Username</label>
        <input 
          className="loginInput" 
          type="text" 
          placeholder="Enter your username..." 
          ref={userRef}
          />
        <label>Password</label>
        <input 
          className="loginInput" 
          type="password" 
          placeholder="Enter your password..." 
          ref={pwdRef}
          />
        <button className="loginButton">Login</button>
      </form>
        <button className="loginRegisterButton">
          <Link className="link" to='/register'>Register</Link>
        </button>
    </div>
  );
}