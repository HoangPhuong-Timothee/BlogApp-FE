import { useState } from "react";
import "./login.css";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [err, setErr] = useState(false);
  const loginHandle = async (e)=>{
    e.preventDefault();
    setErr(false);
    try{
      const res = await axios.post("http://localhost:5500/api/auth/login", {
      email,
      password
      })
      res.data && window.location.replace('/')
    }catch(err){
      setErr(true);
    }
  }
  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm" onSubmit={loginHandle}> 
        <label>Email</label>
        <input 
          className="loginInput" 
          type="text" 
          placeholder="Enter your email..." 
          onChange={e=>setEmail(e.target.value)}
          />
        <label>Password</label>
        <input 
          className="loginInput" 
          type="password" 
          placeholder="Enter your password..." 
          onChange={e=>setPassword(e.target.value)}
          />
        <button className="loginButton">Login</button>
      </form>
      {err && <span className="err-noti">Oops, something went wrong!</span>}
        <button className="loginRegisterButton">
          <Link className="link" to='/register'>Register</Link>
        </button>
    </div>
  );
}