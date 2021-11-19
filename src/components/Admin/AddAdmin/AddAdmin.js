import React from 'react';
import Sideber from '../../Sideber/Sideber';

const AddAdmin = () => {
    return (
        <div >
            <div className='row'>
              <div className=' col-lg-2 col-md-2 col-12 left-site'>
                <Sideber></Sideber>    
                </div>

              <div className='col-lg-10 col-md-10 col-12'>
               <h2 className='my-4 text-primary'>Add-Admin</h2>
               <form>
                 <input  type='email' placeholder='Enter Your Email'/>
                 <br/>
                 <br/>
                 <input  type='number' placeholder='Phone Number'/>
                 <br/>
                 <br/>
                 <button type='submit' className="btn btn-primary mb-4">Add-Admin</button>
                 
               </form>
              </div>
            </div>
        </div>
    );
};

export default AddAdmin;