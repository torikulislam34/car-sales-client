import React, { useState } from 'react';
import Sideber from '../../Sideber/Sideber';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    
    const handleOnBlur = e =>{
        // console.log(e.target.value);
        setEmail(e.target.value)
    }
    const handleAdminSubmit = e =>{
        const user = { email };
        fetch('https://damp-everglades-31322.herokuapp.com/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    console.log(data);
                    setSuccess(true);
                }
            })
        e.preventDefault()
    }
    return (
        <div >
            <div className='row'>
              <div className=' col-lg-2 col-md-2 col-12 left-site'>
                <Sideber></Sideber>    
                </div> 

              <div className='col-lg-10 col-md-10 col-12'>
               <h2 className='my-4 text-primary'>MAKE_ADMIN</h2>
               <form onSubmit={handleAdminSubmit}>
                 <input onBlur={handleOnBlur} type='email' placeholder=' Email'/>
                 <br/>
                 <br/>
                 <button type='submit' className="btn btn-primary mb-4">MakeAdmin</button>
                 {success&& alert('Admin  successfully!')}
               </form>
              </div>
            </div>
        </div>
    );
};

export default MakeAdmin;