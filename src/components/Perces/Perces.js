import React from 'react';
import { Link } from 'react-router-dom';

const Perces = (props) => {
    const {title,img,price,dis,_id} = props.service; 
    return (
        <div>
            
        <div className="col">
          <div className="card h-100">
           <img src={img} className="card-img-top" alt="..."/>
           <div className="card-body">
           <h5 className="card-title fw-bold" style={{color:'brown'}}>{title}</h5>
           <h4> <span style={{color:'brown'}}>${price}</span>/Pice</h4>
           <p className='text-center'><span className='fw-bold '>Discription: </span> {dis.slice(0,90)}.</p>
           
           <Link to={`/service/${_id}`}>
              <button className = 'button-reguler'>Order Now</button> 
           </Link>
                
           </div>
         </div>
        </div>
    </div>
    );
};

export default Perces;