import React from 'react';
import './Notfound.css';
import notFound from '../../images/Notfound/notFound.jpg'

const NotFound = () => {
    return (
        <div>
            <img className='notfound-img' src={notFound} alt="" />
            <h2 className ='text-primary mt-2'>Ops! Page is Not Found</h2>
        </div>
    );
};

export default NotFound;