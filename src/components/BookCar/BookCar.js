import React, { useEffect, useState } from 'react';
import Perces from '../Perces/Perces';
import './BookCar.css';


const BookCar = () => {
    const [services, setServices] = useState([])
    useEffect(() =>{
        fetch('https://damp-everglades-31322.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div className ='shop-container'>
            
            <div className="product-container">
              {
                services.map(service => <Perces key={service._id} service = {service}></Perces>)
              }
          </div>
        </div>
    );
};

export default BookCar;