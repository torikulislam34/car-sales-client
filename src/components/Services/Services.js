import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'


const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() =>{
        fetch('https://damp-everglades-31322.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div className ='container'>
            <h1 className= 'text-center mt-5 fw-bold'>OUR <span className ='text-primary'>PRODUCTS</span></h1>
            <div className="row row-cols-1 row-cols-md-3 g-4 mt-5">
              {
                services.map(service => <Service key={service._id} service = {service}></Service>)
              }
          </div>
        </div>
    );
};

export default Services;