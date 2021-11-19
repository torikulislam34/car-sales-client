import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import useAuth from '../../hooks/useAuth';
import { useParams } from 'react-router';


const PlaceOrder = () => {
    // product information
    const [services, setServices] = useState()

    const{id} = useParams();
    
    useEffect(()=>{
        fetch('https://damp-everglades-31322.herokuapp.com/products')
        .then(res=>res.json())
        .then(data =>setServices(data))
    },[])

    const matchService = services?.find(service =>service?._id === id);

    // user information
    const {user} = useAuth();
    // console.log(user);
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data =>{
        // console.log(data);

        axios.post(`https://damp-everglades-31322.herokuapp.com/addBook`, data)
        .then(res => {
            // console.log(res);
            if(res.data.insertedId){
                alert('Order to successfully!');
                reset();
            }
        })
    }
    return (
        <div >
                <div className='add-tour'>
                <h2 className='text-primary'> Place Order</h2>
                
                    <form onSubmit={handleSubmit(onSubmit)} >
                    <input defaultValue={user.displayName} className='add-input' {...register("name", {  maxLength: 20 })} />
                    <input defaultValue={matchService?.title} className='add-input' {...register("product", { maxLength: 20 })} />
                    <input defaultValue={user.email} className='add-input' {...register("email" )} />
                    <input defaultValue={matchService?.price} className='add-input' type="number" {...register("price" )} />
                    <input defaultValue={matchService?.img} className='add-input'  {...register("img" )} />
                    <input className='add-input' {...register("state", { required: true, maxLength: 20 })} placeholder="Done"/>
                    <input className='button-reguler' type="submit" />
                </form>
               
              
            </div>
        </div>
        
    );
};

export default PlaceOrder;