import React from 'react';
import { Link } from 'react-router-dom';
import './perces.css';

const Perces = (props) => {
    const {title,img,price,dis,} = props.service; 
    return (
        <div className='product'>
          <div>
                <img className='perces-img' src={img} alt="" />
          </div>

          <div>
                <h4 className="product-name">{title}</h4>
                <p> <span style={{color:'brown'}}>${price}</span>/Pice</p>
                <p><span className='fw-bold '>Discription: </span> {dis}.</p>
                <Link to={`/PlaceOrder`}>
                    <button className = 'button-reguler'>Order Now</button> 
                </Link>
                {/* <p><small>only {stock} left in stock - order soon</small></p>
                <Rating
                    initialRating={star}
                    emptySymbol="far fa-star icon-color"
                    fullSymbol="fas fa-star icon-color"
                    readonly></Rating>
                <br />
                <button
                    onClick={() => props.handleAddToCart(props.product)}
                    className="btn-regular"
                ><FontAwesomeIcon icon={faShoppingCart} /> add to cart</button> */}
            </div>
            
        {/* <div className="col">
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
        </div> */}
    </div>
    );
};

export default Perces;