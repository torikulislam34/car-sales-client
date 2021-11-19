import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';

const Reviews = () => {
    const [productsReview, setProductsReview] = useState([])
    useEffect(() =>{
        fetch('http://localhost:5000/productsReview')
        .then(res => res.json())
        .then(data => setProductsReview(data))
    },[])
    return (
        <div className ='container'>
            <h1 className= 'text-center mt-5 fw-bold fw-300 text-primary'>REVIEWS</h1>
            <div className="row row-cols-1 row-cols-md-3 g-4 mt-5">
              {
               productsReview.map(review => <Review key={review._id} review = {review}></Review>)
              }
          </div>
        </div>
    );
};

export default Reviews;