import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import Sideber from '../Sideber/Sideber';

const Myorder = () => {
  const {user} = useAuth();
  const [orders, setOrders] = useState([]);

  useEffect(()=>{
    const url =`https://damp-everglades-31322.herokuapp.com/addBook?email=${user.email}`
   fetch(url)
   .then(res => res.json())
   .then(data => setOrders(data))
  }, [])
  const handleDeleteProduct = id => {
  const proceed = window.confirm('Are you sure , you want to deleted?');
  if(proceed){
    const url = `https://damp-everglades-31322.herokuapp.com/addBook/${id}`;
    fetch(url, {
      method: 'DELETE'
    })
    .then(res => res.json())
    .then(data => {
      if (data.deletedCount){
        alert('Deleted successfully');
        const remainingOrders = orders.filter(order=> order._id !== id);
        setOrders(remainingOrders);
      }
    })
  }
  }
    return (
        <div >
        <div className='row'>
          <div className=' col-lg-2 col-md-2 col-12 left-site'>
            <Sideber></Sideber>    
            </div>

          <div className='col-lg-10 col-md-10 col-12'>
          <div>
          <div>
        <h5 className="text-brand  my-2">MY ORDERS : {orders.length}</h5>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">NAME</th>
              <th scope="col">PRODUCT-NAME</th>
              <th scope="col">PRODUCT-IMG</th>
              <th scope="col">PRICE</th>
              <th scope="col">STATE</th>
              <th scope="col">EMAIL</th>
              <th scope="col">REMOVE</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((pd)=> {
              const {name, price, img, product, email} = pd;
              
              return(
            <tr>
              <td>{name}</td>
              <td>{product}</td>
              <td ><img style={{width: '80px'}} src={img} alt="" /></td>
              
              <td>$ {price}</td>

              <td>{<div className="spinner-grow text-warning" role="status">
              <span className="visually-hidden">Loading...</span>
              </div>}</td>
              
              <td>{email}</td>
              <td>{<button onClick={()=>handleDeleteProduct(pd._id)} type="button" className="btn btn-primary">DELETE</button>}</td>

              
            </tr>
              )
             })}
          </tbody>
        </table>
        {/* <PaymentProcess handlePayment={handlePayBooking} /> */}
      </div>
          </div>
          </div>
        </div>
    </div>
       
    );
};

export default Myorder;