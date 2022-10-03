import React,{useState} from "react";
import { useDispatch } from "react-redux";
import { login } from "../../features/userslice";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import {useSelector} from 'react-redux';
import {selectUser} from '../../features/userslice';
import "./Login.css"

const Login=()=>{
    const navigateTo = useNavigate()
    const[name,setName]=useState('');
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const [isvalid,setIsvalid]=useState(false)
    const dispatch=useDispatch();
    const parent=useSelector(selectUser);
    const handleSubmit=(e)=>{
        e.preventDefault();
        navigateTo("/")
        dispatch(
            login({
                name:name,
                email:email,
                password:password,
                login:true
            })
        );
    };
    useEffect(() => {
  
        if ((email.includes("@")) && (password.length > 4)) {
            setIsvalid(true)
        }
}, [email, password])
    return(<div className="body">
    <div className="container">
        <form className="form" onSubmit={handleSubmit}>
        <h1>Pearl Mart</h1>
          <label htmlFor="user">User Name:</label> <input id="user" type='name' placeholder='Type your name' value={name} onChange={(e)=>setName(e.target.value)}/>
         <label htmlFor="mail">Usermail Id:</label> <input id="mail" type='email' placeholder='Type your mailId' value={email} onChange={(e)=>setEmail(e.target.value)}/>
          <label htmlFor="pass">Password:</label><input id="pass" type='password' placeholder='Type your Password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
          {isvalid==true? <button type="submit" className="subbtn">Submit</button>:<button type="submit" className="subbtn" disabled>Submit</button>}
          <div>
                    <p className="signtext">Or Sign Up Using</p>
                    <h3 className="signup">SIGN UP</h3>

                </div>
        
        </form>
    </div>
    </div>)
}
export default Login;