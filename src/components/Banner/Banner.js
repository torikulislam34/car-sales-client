import React from 'react';
import banner1 from '../../images/banner/banner1.jpg';
import banner2 from '../../images/banner/banner2.jpg';
import banner3 from '../../images/banner/banner3.jpg';
import './Banner.css';

const Banner = () => {
    return (
      <div>
            
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
       <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active"    aria-current="true" aria-label="Slide 1"></button>
           <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
       </div>
       <div className="carousel-inner">
         <div className="carousel-item active carousel">
          <img src={banner1} className="d-block w-100 " alt="..."/>
           <div className="carousel-caption d-none d-md-block mb-5">
            <p>At TrueCar, you're in charge of the process from start to finish. Here's how.!</p>
            <button className ='my-btn'>Explore-now..</button>
          </div>
        </div>
       <div className="carousel-item">
         <img src={banner2} className="d-block w-100" alt="..."/>
         <div className="carousel-caption d-none d-md-block">
           <button className ='my-btn'>Explore-now..</button>
         </div>
        </div>
       <div className="carousel-item">
         <img src={banner3} className="d-block w-100" alt="..."/>
          <div className="carousel-caption d-none d-md-block">
          <h4>At TrueCar, you're in charge of the process from start to finish. Here's how.!</h4>
          <button className ='my-btn '>Explore-now..</button>
          
        </div>
     </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
     <span className="carousel-control-prev-icon" aria-hidden="true"></span>
     <span className="visually-hidden">Previous</span>
    </button>
   <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
     <span className="carousel-control-next-icon" aria-hidden="true"></span>
     <span className="visually-hidden">Next</span>
   </button>
  </div>
  </div>
    );
};

export default Banner;