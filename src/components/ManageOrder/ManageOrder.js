import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './ManageOrder.css'

const ManageOrder = () => {
    const { user} = useAuth();
    console.log(user);
    return (
        <div className=''>
            <a  className="btn btn-primary m-4" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
                  DASHBORD
                  </a>
            <div className="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
            <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasExampleLabel">Dashboard</h5>
                <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
            <nav className="nav flex-column">
            <NavLink to='/myBooking'>My Booking</NavLink>
            <NavLink to = '/manageBooking'>Manage All Booking</NavLink>
            <NavLink to ='/addPlace'>Add New Place</NavLink>
            </nav>
            </div>
            </div>
        </div>
    );
};

export default ManageOrder;