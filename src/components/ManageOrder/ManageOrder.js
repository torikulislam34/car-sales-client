import React from 'react';
import useAuth from '../../hooks/useAuth';
import Sideber from '../Sideber/Sideber';
import './ManageOrder.css';

const ManageOrder = () => {
    const { user} = useAuth();
    console.log(user);
    return (
        <div >
            <div className='row'>
              <div className=' col-lg-2 col-md-2 col-12 left-site'>
                <Sideber></Sideber>    
                </div>

              <div className='col-lg-10 col-md-10 col-12'>
               
              </div>
            </div>
        </div>
        // <div className='sidebar-nav'>
        //     <a  className="btn btn-primary m-4" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
        //           DASHBORD
        //           </a>
        //     <div className="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
        //     <div className="offcanvas-header">
        //         <h5 className="offcanvas-title" id="offcanvasExampleLabel">Dashboard</h5>
        //         <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        //     </div>
        //     <div className="offcanvas-body">
        //     <nav className="nav flex-column">
        //     <NavLink className='text-black' to='/myOrder'>My Booking</NavLink>
        //     <NavLink className='text-black' to = '/manageBooking'>Manage All Booking</NavLink>
        //     <NavLink className='text-black' to ='/addPlace'>Add New Place</NavLink>
        //     </nav>
        //     </div>
        //     </div>
        // </div>
    );
};

export default ManageOrder;