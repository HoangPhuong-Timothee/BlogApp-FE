import { useState } from "react"
import "./register.css"
import axios from "axios"
import { Link } from "react-router-dom"

export default function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [err, setErr] = useState(false);
  const handleRegister = async (e)=>{
    e.preventDefault();
    setErr(false);
    try{
      const res = await axios.post("http://localhost:5500/api/auth/register", {
      username,
      email,
      password 
    })
    res.data && window.location.replace('/login')
    }catch(err){
      setErr(true);
    }
  }
    return (
      <div className="register">
        <span className="registerTitle">Register</span>
        <form className="registerForm" onSubmit={handleRegister}>
          <label>Username</label>
          <input 
            className="registerInput" 
            type="text" 
            placeholder="Enter your username..." 
            onChange={e=>setUsername(e.target.value)}
            />
          <label>Email</label>
          <input 
            className="registerInput" 
            type="text" 
            placeholder="Enter your email..." 
            onChange={e=>setEmail(e.target.value)}
            />
          <label>Password</label>
          <input 
            className="registerInput" 
            type="password" 
            placeholder="Enter your password..." 
            onChange={e=>setPassword(e.target.value)}
            />
          <button className="registerButton">Register</button>
        </form>
        {err && <span className="error-noti">Oops, something went wrong!</span>}
        <button className="registerLoginButton">
          <Link to='/login' className="link">Login</Link>
        </button>
      </div>
    )
}
