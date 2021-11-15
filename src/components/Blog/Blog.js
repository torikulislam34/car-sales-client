import React from 'react';
import blog1 from '../../images/blog/blog01.jpg';
import blog2 from '../../images/blog/blog02.jpg';
import blog3 from '../../images/blog/blog03.jpg';

const Blog = () => {
    return (
<div className='container'>
<h1 className= 'text-center mt-5 pb-3 fw-bold '>OUR <span className ='text-primary'>BLOG</span></h1>
<div className="row row-cols-1 row-cols-md-3 g-4 pb-3">
  <div className="col">
    <div className="card h-100">
      <img src={blog1} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title fw-bold" style={{color:'brown'}}>Build Your Deal With Confidence</h5>
        <p className="card-text text-start">Get a personalized offer from a dealer online, including manufacturer incentives and discounts. Next, build a custom deal that includes the value of your trade-in and monthly payments. </p>
        <button className='button-reguler'>Shop New Cars</button>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src={blog2} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title fw-bold" style={{color:'brown'}}>Choose From Close to a Million Used Cars</h5>
        <p className="card-text text-start">Get access to our extensive selection of pre-owned vehicles for sale across the US, and see price ratings based on similar used car listings in your area, so you know when you’re getting a great deal.</p>
        <button className='button-reguler'>Shop Used Cars</button>
      </div>
    </div>
  </div>
  <div className="col ">
    <div className="card h-100">
      <img src={blog3} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title fw-bold" style={{color:'brown'}}>Get a Trade-in Offer You Can Use Today</h5>
        <p className="card-text text-start ">Answer a few questions to see your car’s market value and get a cash offer in minutes. Cash out, or trade in for a new or used car.</p>
        <button className='button-reguler'>Gate a Value on Car</button>
      </div>
    </div>
  </div>
</div>
</div>
    );
};

export default Blog;