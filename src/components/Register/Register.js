import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';
import { Link } from 'react-router-dom';

const Register = () => {
    const {signInUsingGoogle, signInUsingEmailPassword,setUser, updateName, user} = useAuth();
    const location = useLocation();
    const history = useHistory();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    // name handler
    const handelGetName = (e)=>{
        console.log(e.target.value);
        setName(e.target.value)
    }

    // Email handler
    const handelGetEmail = (e) =>{
        console.log(e.target.value);
        setEmail(e.target.value);
    }
    // Password handler
    const handelGetPassword= (e) =>{
        console.log(e.target.value);
        setPassword(e.target.value);
    }

    // Registration email and password
    const handleRegistration = (e) =>{
        console.log(email, password);
        signInUsingEmailPassword(email, password)
        .then((res) => {
            // Signed in 
            updateName(name)
            const user = res.user;
            setUser(user)
            history.push(redirect_uri);
            window.location.reload()
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
          });
        e.preventDefault();
        
    }


    const redirect_uri = location.state?.from || '/home';

    // Google Sign in
    const handleGoogleLogin =() =>{
        signInUsingGoogle()
        .then((res) => {
            // console.log(result.user);
            const user = res.user;
            setUser(user);
           history.push(redirect_uri);
           window.location.reload(); 
          })
         
    }
    return (
        <div className='text-center'>
            <h2>Please Register</h2>
            <form onSubmit={handleRegistration}>
                <input type="text" onBlur={handelGetName}placeholder='Name'/>
                <br/>
                <br/>
                <input type="email" onBlur={handelGetEmail}placeholder='Email' />
                <br/>
                <br/>
                <input type="password" onBlur={handelGetPassword}placeholder='Password' />
                <br/>
                <br/>
                <input className= 'login-btn' type="submit" placeholder='Register' />
                <br/>
            </form>
            {user?.email && <div className="alert alert-primary" role="alert">
            User Created Successfully
            </div>}
            <p> -------or-------</p>
            <button onClick= {handleGoogleLogin} className= 'login-btn'>Log In With Google</button>
                  <p>Already Registerd?<Link to='login'>Please Login</Link></p>
        </div>
    );
};

export default Register;