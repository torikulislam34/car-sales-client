
import './Login.css';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Login = () => {
    const {signInUsingGoogle,loginWithEmailAndPassword,setUser} = useAuth();
    const location = useLocation();
    const history = useHistory();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')

    // handle email
    const handleGetemail = (e) =>{
      setEmail(e.target.value);
  }

  // handle password
  const handleGetPassword = (e) =>{
      setPassword(e.target.value);
  }

  //  email and password login
  const handleLoginWithEmailAndPassword = (e) =>{
      loginWithEmailAndPassword(email,password)
      .then((res) => {
          // Signed in 
          const user = res.user;
          setUser(user)
          history.push(redirect_uri)
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
        .then((result) => {
           history.push(redirect_uri);
           window.location.reload(); 
          })
         
    }

    return (
        <div >
            <div className='row'>
              <div className=' col-lg-4 col-md-6 col-12 btn-area'>
                <div className= 'left-log'>
                  <p className='text-primary'>SIGN UP</p>
                  <form onSubmit={handleLoginWithEmailAndPassword}>
                {/* <input type="text" onBlur={handelGetName}placeholder='Name'/> */}
                <input type="email" onBlur={handleGetemail}placeholder='Email' />
                <br/>
                <br/>
                <input type="password" onBlur={handleGetPassword}placeholder='Password' />
                <br/>
                <br/>
                <input className= 'login-btn' type="submit" placeholder='Register' />
                <br/>
                <p>-------or-------</p>
            </form>
                  <button onClick= {handleGoogleLogin} className= 'login-btn'>Log In With Google</button>
                  <p>Are You New User?<Link to='register'>Please Register</Link></p>
                </div>

              </div>
              <div className='col-lg-8 col-md-6 col-12'>
               <img className='logb-img' src="https://consumer.tcimg.net/assets/21-11/module-3-img-4b925963b67a60e97f4444cb07ba338a.svg" alt="" />
              </div>
            </div>
        </div>
    );
};

export default Login;
