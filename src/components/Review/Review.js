import React from 'react';
import './review.css';
import { Link } from 'react-router-dom';

const Review = (props) => {
    const {title,img,reting,dis,_id} = props.review; 
    return (
        <div>
            
            <div className="col">
              <div className="card h-100">
               <img src={img} className="card-img-top review-img" alt="..."/>
               <div className="card-body">
               <h5 className="card-title fw-bold" style={{color:'brown'}}>Name: {title}</h5>
               <p className='text-center'><span className='fw-bold '>Feedback: </span> {dis.slice(0,90)}.</p>
               </div>
             </div>
            </div>
        </div>
    );
};

export default Review;