import React,{useState} from "react";
import { useDispatch } from "react-redux";
import { login } from "../../features/userslice";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import {useSelector} from 'react-redux';
import {selectUser} from '../../features/userslice';

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
        // console.log(parent.login);
    };
    useEffect(() => {
        // const userLogin = {};
        // userLogin.email = email;
        // userLogin.password = password;
        // console.log(userLogin);
        if ((email.includes("@")) && (password.length > 4)) {
            setIsvalid(true)
        }
}, [email, password])
    return(<>
    <div className="login_form">
        <form className="form" onSubmit={handleSubmit}>
          <input type='name' placeholder='enter name' value={name} onChange={(e)=>setName(e.target.value)}/>
          <input type='email' placeholder='enter email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
          <input type='password' placeholder='enter password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
          {isvalid==true? <button type="submit" className="sub_btn">Submit</button>:<button type="submit" className="sub_btn" disabled>Submit</button>}
        </form>
    </div>
    </>)
}
export default Login;