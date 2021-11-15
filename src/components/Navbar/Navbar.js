import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import logo from '../../images/logo/logo.jpg';
import './Navbar.css';

const Navbar = () => {
   const{user, logOut} = useAuth();
   
   // console.log(user);
    return (
        <div>
            <nav className="navbar  sticky-top navbar-expand-lg navbar-dark bg-primary " >
             <div className="container-fluid">
                <img className='logo-img' src={logo} alt="" />
                 <br />
                 <p className='text-head'>CAR_SALES_SITE</p>
                 <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"      aria-controls="navbarText" aria-expanded="false" aria-label="Toggle  navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
            <div className="collapse navbar-collapse " id="navbarText">
               <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                 <li className="nav-item">
                    <Link to='/home'>HOME</Link>
                 </li>
                 <li className="nav-item">
                    <Link to ='/about'>ABOUT</Link>
                 </li>
                 <li className="nav-item">
                    <Link to ='/specials'>SPECIALS</Link>
                 </li>
                 <li className="nav-item">
                    <Link to ='/services'>PRODUCTS</Link>
                 </li>
                 <li className="nav-item">
                    <Link to = 'additem'>ADDITEM</Link>
                 </li>
                 <li className="nav-item">
                 {
                    user?.email?
                    <Link to = 'manageOrder'>DASBORD</Link>
                    :''
                 }
                 </li>
                 
               </ul>
               <div className='row w-25 mx-auto'>
                  <div className ='col'>
                  <span className='text-white pe-2'>Loged in As: {user?.displayName}</span>          
                  </div>
                  <div className ='col'>
                  {
                  user?.email?
                  <button onClick = {logOut} className='btn btn-danger'>Log Out</button>:
                  <Link to='/login'><button className='btn btn-danger'>Login</button></Link>
                   }
                  </div>
               </div>
            </div>
          </div>
         </nav>
        </div>
    );
};

export default Navbar;