import React from 'react';
import { NavLink } from 'react-router-dom';

const Sideber = () => {
    return (
        <div className= 'bg-black'>
                  <h4 className='text-warning'>DASBORD</h4>
                    <div className='dashbord'>
                    <NavLink className='text-white text-decoration-none' to='/myOrder'>MY ORDER</NavLink><br/>
                    <NavLink className='text-white text-decoration-none' to ='/addReview'>REVIEW</NavLink><br/>
                    <NavLink className='text-white text-decoration-none' to = '/pay'>PAY</NavLink><br/>
                   
                    <NavLink className='text-white text-decoration-none' to ='/addItem'>AddItem</NavLink><br/>
                    </div>
                        
                </div>
    );
};

export default Sideber;